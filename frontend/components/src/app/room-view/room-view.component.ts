import { Component, ElementRef, EventEmitter, HostListener, OnInit, ViewChild } from '@angular/core';

import { RoomDataService } from './room-data.service';
import { UserDataService } from './../user-data.service';

import { transformData } from './transform-data';
import { WindowService } from '../window.service';
import { WebSocketService } from './web-socket.service';

import _ from 'lodash';
import { LocalUser } from './local-user';

import { Position } from './position';
import { UserPositionData } from './user-position-data';
import { Distances } from './distances';
import imageSize from '@coderosh/image-size';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.scss']
})
export class RoomViewComponent implements OnInit {
  untransformedData!: any[];
  data: UserPositionData[] = [];
  userProfiles!: any[];

  localUser: LocalUser = {
    position: {
      x: 0,
      y: 0
    },
    direction: 0,
    velocity: 0,
    angularVelocity: 0,
    drag: 0,
    angularDrag: 0,
    id: 1,

    hist: {
      prevPosition: null,
      prevDirection: null
    }
  };

  _permittedKeys = [
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp'
  ];
  _keysDown: string[] = [];

  changeEventEmitter: EventEmitter<string> = new EventEmitter();

  frames: Position[] = [];

  animationId!: number;
  shouldContinueAnimating: boolean = true;

  circleRadius = 12.5;

  @ViewChild('roomView')
  roomView?: ElementRef;

  constructor(
    private roomDataService: RoomDataService,
    private userDataService: UserDataService,
    private webSocketService: WebSocketService,
    private windowService: WindowService,
  ) {}

  @HostListener('window:beforeunload')
  onUnload() {
    this.shouldContinueAnimating = false;
  }

  getDimensions() {
    return this.windowService.getDimensions();
  }

  getCenterLocation() {
    let dimensions = this.windowService.getDimensions();

    let centerX = dimensions.width / 2;
    let centerY = dimensions.height / 2;

    return {
      x: centerX,
      y: centerY
    };
  }

  async loadProfiles() {
    if (this.data && this.data.length) {
      let ids = this.data?.map((user) => user.user_id);
      this.userDataService.loadUserProfiles(ids)
        .subscribe((profiles) => {
          this.userProfiles = profiles;
        });
    }
  }

  getProfileById(userInRoom: any) {
    let userId = userInRoom.user_id;
    return this.userProfiles?.find((user) => user.userId == userId);
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(this: RoomViewComponent, event: KeyboardEvent) {
    let code = event.code;
    if (this._permittedKeys.includes(code) && !this._keysDown.includes(code))
      this._keysDown.push(code);
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(this: RoomViewComponent, event: KeyboardEvent) {
    let index = _.indexOf(this._keysDown, event.code)
    delete this._keysDown[index];
  }

  _overlappingUserPixelsAt({ x, y }: Position): any {
    const diameter = 25;

    let users = this.untransformedData?.filter((user) => user.user_id !== this.localUser.id);

    if (users) {
      function getDistanceFrom(pos: Position): number {
        let coords = {
          x: Math.abs(x - pos.x),
          y: Math.abs(y - pos.y)
        };

        let distance = coords.x + coords.y;

        return distance;
      }

      let distances: Distances = {};
      for (const user of users) {
        distances[user.user_id] = getDistanceFrom(user.data.position);
      }

      let isTouchingUsers = {};
      for (const pair of Object.entries(distances)) {
        let userId = Number(pair[0]),
          distance = pair[1];

        isTouchingUsers[userId] = distance <= diameter;
      }
      
      return isTouchingUsers;
    }
  }

  userTouchedAt({ x, y }: Position) {
    let usersTouched = this._overlappingUserPixelsAt({ x, y });

    var userIds = Object.keys(usersTouched || {})
      .filter((k) => usersTouched[k])
      .map((userId) => Number(userId))
      [0];

    return userIds;
  }

  updateVelocities(this: RoomViewComponent) {
    let newVelocity, newAngularVelocity;

    if (this._keysDown.includes('ArrowUp')) {
      newVelocity = this.localUser.velocity + 0.046875

      this.localUser.velocity = newVelocity;
    }
    if (this._keysDown.includes('ArrowLeft')) {
      newAngularVelocity = this.localUser.angularVelocity - 0.0234375;

      this.localUser.angularVelocity = newAngularVelocity;
    }
    if (this._keysDown.includes('ArrowRight')) {
      newAngularVelocity = this.localUser.angularVelocity + 0.0234375;

      this.localUser.angularVelocity = newAngularVelocity;
    }
  }

  emitChangeEvents() {
    let currentPosition = this.localUser.position,
      prevPosition = this.localUser.hist.prevPosition,
      currentDirection = this.localUser.direction,
      prevDirection = this.localUser.hist.prevDirection;

    if (!_.isEqual(currentPosition, prevPosition))
      this.changeEventEmitter?.emit('positionChange');
    if (currentDirection !== prevDirection)
      this.changeEventEmitter?.emit('directionChange');
  }

  moved() {
    return !(_.isEqual(this.localUser.position, this.localUser.hist.prevPosition))
  }

  updateLocalUser(this: RoomViewComponent) {
    let newPosition = {
      y: this.localUser.position.y + Math.sin((this.localUser.direction - 90) * (Math.PI / 180)) * this.localUser.velocity,
      x: this.localUser.position.x + Math.cos((this.localUser.direction - 90) * (Math.PI / 180)) * this.localUser.velocity
    };

    this.localUser.hist.prevPosition = Object.assign({}, this.localUser.position);
    this.localUser.hist.prevDirection = this.localUser.direction;

    let idOfCollidedUser = this.userTouchedAt(newPosition);
    if (idOfCollidedUser) {
      this.localUserOnCollidedUpdate(idOfCollidedUser, newPosition);
    } else {
      this.localUser.position = newPosition;
    }

    this.localUser.direction += this.localUser.angularVelocity;
  }

  // Ignore this
  localUserOnCollidedUpdate(idOfCollidedUser: number, newPosition: Position) {
    let collidedUser = this.untransformedData?.find((user) => user.user_id === idOfCollidedUser).data,
    diameter = 5;
  }

  updateData(this: RoomViewComponent) {
    let user = this.untransformedData?.find((user) => user.user_id === this.localUser.id);

    if (user) {
      user.data.position = this.localUser.position;
      user.data.direction = this.localUser.direction;

      let transformedData = transformData(this.untransformedData, this.localUser.id);
      this.data = transformedData;
    }
  }

  updateDrags() {
    if (Math.abs(this.localUser.velocity) < 0.025) {
      this.localUser.velocity = 0;
      this.localUser.drag = 0;
    } else this.localUser.drag = this.localUser.velocity / 30;

    if (Math.abs(this.localUser.angularVelocity) < 0.001) {
      this.localUser.angularVelocity = 0;
      this.localUser.angularDrag = 0;
    } else this.localUser.angularDrag = this.localUser.angularVelocity / 30;
  }

  // addDrags(this: RoomViewComponent) {
  //   let change = Math.sign(this.localUser.velocity) == -1
  //     ? this.localUser.drag
  //     : -this.localUser.drag;
  //   let angularChange = Math.sign(this.localUser.angularVelocity) == -1
  //     ? this.localUser.angularDrag
  //     : -this.localUser.angularDrag;

  //   const differentSigns = (newVelocity: number) => Math.sign(newVelocity - change) != Math.sign(newVelocity);

  //   let newVelocity = this.localUser.velocity + change;
  addDrags(this: RoomViewComponent) {
    this.localUser.velocity -= this.localUser.drag;
    this.localUser.angularVelocity -= this.localUser.angularDrag;
  }

  sendMessage() {
    let position = this.localUser.position;
    let direction = this.localUser.direction;

    this.webSocketService.webSocket?.next({
      type: 'move',
      new_position: position,
      user_id: this.localUser.id
    });
  }

  onLocalUserMoved(eventType: string) {
    // switch (eventType) {
    //   case 'positionChange':
    //     this.sendPositionChangeMessage();
    //     break;
    //   case 'directionChange':
    //     this.sendDirectionChangeMessage();
    //     break;
    //   default:
    //     break;
    // }
  }

  onMessage(event: any) {
    console.log(event);
  }

  refreshRoomView = () => {
    this.updateVelocities();
    this.updateDrags();
    this.addDrags();

    if (this.localUser.velocity || this.localUser.angularVelocity)
      this.updateLocalUser();
    this.updateData();

    this.frames.push(this.localUser.position)

    this.emitChangeEvents();

    if (this.shouldContinueAnimating)
      requestAnimationFrame(this.refreshRoomView);
    else
      cancelAnimationFrame(this.animationId);
  }

  async ngOnInit(this: RoomViewComponent): Promise<any> {
    this.data = [];

    await this.webSocketService.init();
    
    // Send an initial message
    let initialPosition = Object.assign({}, this.localUser.position);

    this.webSocketService.webSocket?.subscribe();
    this.webSocketService.webSocket?.next({
      action: 'join',
      initial_position: initialPosition,
      user_id: this.localUser.id,
      request_id: this.localUser.id
    });

    // Get initial data
    this.animationId = requestAnimationFrame(this.refreshRoomView.bind(this));
    this.roomDataService.getInitialData()
      .subscribe((res) => {
        let data = res.data;
        this.untransformedData = res.data;

        let transformedData = transformData(data, this.localUser.id);
        this.data = transformedData;

        this.loadProfiles();
      });
    
      this.refreshRoomView();

    this.changeEventEmitter?.subscribe((eventType) => this.onLocalUserMoved(eventType));
    this.webSocketService.webSocket?.subscribe((msg: any) => this.onMessage(msg));
  }

}
