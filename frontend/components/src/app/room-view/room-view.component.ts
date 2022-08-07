import { Component, HostListener, OnInit, ɵɵsetComponentScope } from '@angular/core';

import { RoomDataService } from './room-data.service';
import { UserDataService } from './../user-data.service';

import { transformData } from './transform-data';
import { WindowService } from '../window.service';
import { WebSocketService } from './web-socket.service';

import _ from 'lodash';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.scss']
})
export class RoomViewComponent implements OnInit {
  untransformedData?: any[];
  data!: any[];
  userProfiles!: any[];

  localUser = {
    position: {
      x: 0,
      y: 0
    },
    direction: 0,
    velocity: 0,
    angularVelocity: 0,
    // t: 1.5,
    drag: 0,
    angularDrag: 0,
    id: 1
  };

  webSocketMsgs: any[] = [];

  _permittedKeys = [
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp'
  ];
  _keysDown: string[] = [];

  constructor(
    private roomDataService: RoomDataService,
    private userDataService: UserDataService,
    private webSocketService: WebSocketService,
    private windowService: WindowService,
  ) {}

  getCenterLocation() {
    let dimensions = this.windowService.getDimensions();

    let centerX = dimensions.width / 2;
    let centerY = dimensions.height / 2;

    return {
      x: centerX,
      y: centerY
    };
  }

  async ngOnInit(): Promise<any> {
    await this.webSocketService.init();
    
    // Send an initial message
    let initialPosition = Object.assign({}, this.localUser.position);

    this.webSocketService.webSocket?.subscribe();
    this.webSocketService.webSocket?.next({
      type: 'join',
      initial_position: initialPosition,
      user_id: this.localUser.id
    });
    this.webSocketService.webSocket?.subscribe((msg: any) => this.webSocketMsgs.push(msg));

    // Get initial data
    this.roomDataService.getInitialData()
      .subscribe((res) => {
        let data = res.data;
        this.untransformedData = res.data;

        let transformedData = transformData(data, this.localUser.id);
        this.data = transformedData;

        this.loadProfiles();
      });

    let prevPosition: any, currentPosition: any, prevDirection: number, currentDirection: number;
    setInterval(() => {
      this.updateVelocities();
      this.updateDrags();
      this.addDrags();

      this.updateLocalUser();
      this.updateData();

      currentPosition = Object.assign({}, this.localUser.position);
      currentDirection = this.localUser.direction;

      if (!_.isEqual(currentPosition, prevPosition)) this.sendPositionChangeMessage();
      if (currentDirection !== prevDirection) this.sendDirectionChangeMessage();
      
      prevPosition = Object.assign({}, currentPosition);
      prevDirection = currentDirection
    });
  }

  loadProfiles() {
    let ids = this.data?.map((user) => user.user_id);
    this.userDataService.loadUserProfiles(ids)
      .subscribe((profiles) => {
        this.userProfiles = profiles;
      })
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

  updateLocalUser(this: RoomViewComponent) {
    this.localUser.position.y += Math.sin((this.localUser.direction - 90) * (Math.PI / 180)) * this.localUser.velocity;
    this.localUser.position.x += Math.cos((this.localUser.direction - 90) * (Math.PI / 180)) * this.localUser.velocity;

    this.localUser.direction += this.localUser.angularVelocity;
  }

  updateData(this: RoomViewComponent) {
    let user = this.untransformedData?.find((user) => user.user_id == this.localUser.id);

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

  sendPositionChangeMessage() {
    let position = this.localUser.position;

    this.webSocketService.webSocket?.next({
      type: 'move',
      new_position: position,
      user_id: this.localUser.id
    });
  }

  sendDirectionChangeMessage() {
    let direction = this.localUser.direction

    this.webSocketService.webSocket?.next({
      type: 'direction.change',
      new_direction: direction,
      user_id: this.localUser.id
    })
  }

  onMessage(content: any) {
    console.log(content);
  }

}
