import { Component, HostListener, OnInit } from '@angular/core';

import { RoomDataService } from './room-data.service';
import { UserDataService } from './../user-data.service';

import { transformData } from './transform-data';
import { WindowService } from '../window.service';
import { ForwardRefHandling } from '@angular/compiler';

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
    t: 35,
    drag: 1,
    angularDrag: 1,
    id: 1
  };

  _permittedKeys = [
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp'
  ];
  _keysDown: string[] = [];

  constructor(
    private roomDataService: RoomDataService,
    private userDataService: UserDataService,
    private windowService: WindowService
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

  ngOnInit(): void {
    // Get initial data
    this.roomDataService.getInitialData()
      .subscribe((res) => {
        let data = res.data;
        this.untransformedData = res.data;

        let transformedData = transformData(data, this.localUser.id);
        this.data = transformedData;

        this.loadProfiles();
      });
    
    setInterval(() => {
      this.updateLocalUser();
      this.updateData();
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
    return this.userProfiles?.find((user) => user.userId === userId);
  }

  @HostListener('window:keydown', ['$event'])
  updateVelocities(event: KeyboardEvent) {
    let newVelocity, newAngularVelocity;
    switch (event.code) {
      case 'ArrowUp':
        newVelocity = this.localUser.velocity + 3
        if (newVelocity < this.localUser.t)
          this.localUser.velocity = newVelocity;
        else
          this.localUser.velocity = this.localUser.t;
        break;
      case 'ArrowLeft':
        newAngularVelocity = this.localUser.angularVelocity + 1.5;
        if (Math.abs(newAngularVelocity) < this.localUser.t)
          this.localUser.angularVelocity = newAngularVelocity;
        else
          this.localUser.angularVelocity = this.localUser.t;
        break;
      case 'ArrowRight':
        newAngularVelocity = this.localUser.angularVelocity - 1.5;
        if (Math.abs(this.localUser.angularVelocity) < this.localUser.t)
          this.localUser.angularVelocity -= 2;
        break;
    }

    this.addDrag();
  }

  updateLocalUser(this: RoomViewComponent) {
    this.localUser.position.y += Math.sin((this.localUser.direction - 90) * (Math.PI / 180)) * this.localUser.velocity;
    this.localUser.position.x += Math.cos((this.localUser.direction - 90) * (Math.PI / 180)) * this.localUser.velocity;

    this.localUser.direction += -this.localUser.angularVelocity;
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

  addDrag(this: RoomViewComponent) {
    let change = Math.sign(this.localUser.velocity) == -1
      ? this.localUser.drag
      : -this.localUser.drag;
    let angularChange = Math.sign(this.localUser.angularVelocity) == -1
      ? this.localUser.angularDrag
      : -this.localUser.angularDrag;

    const differentSigns = (newVelocity: number) => Math.sign(newVelocity - change) != Math.sign(newVelocity);

    let newVelocity = this.localUser.velocity + change;
    let newAngularVelocity = this.localUser.angularVelocity + angularChange;

    if (this.localUser.velocity != 0 && !differentSigns(newVelocity))
      this.localUser.velocity = newVelocity
    else if (differentSigns(newVelocity))
      this.localUser.velocity = 0
    
    if (this.localUser.angularVelocity != 0 && !differentSigns(newAngularVelocity))
      this.localUser.angularVelocity = newAngularVelocity
    else if (differentSigns(newVelocity))
      this.localUser.angularVelocity = 0;
  }

}
