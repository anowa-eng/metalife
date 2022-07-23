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
    velocity: {
      \u03c9: 0,
      v: 0,
    },
    t: 35,
    drag: 0.05,
    angularDrag: 5,
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
        newVelocity = this.localUser.velocity.v + 1
        if (newVelocity < this.localUser.t)
          this.localUser.velocity.v = newVelocity;
        else
          this.localUser.velocity.v = this.localUser.t;
        break;
      case 'ArrowLeft':
        newAngularVelocity = this.localUser.velocity.ω - 1;
        if (Math.abs(newAngularVelocity) < this.localUser.t)
          this.localUser.velocity.ω = newAngularVelocity;
        else
          this.localUser.velocity.ω = this.localUser.t;
        break;
      case 'ArrowRight':
        newAngularVelocity = this.localUser.velocity.ω - 0.5;
        if (Math.abs(this.localUser.velocity.ω) < this.localUser.t)
          this.localUser.velocity.ω -= 2;
        break;
    }

    this.addDrag();
  }

  updateLocalUser(this: RoomViewComponent) {
    this.localUser.position.y += Math.sin((this.localUser.direction - 90) * (Math.PI / 180)) * this.localUser.velocity.v;
    this.localUser.position.x += Math.cos((this.localUser.direction - 90) * (Math.PI / 180)) * this.localUser.velocity.v;

    this.localUser.direction += -this.localUser.velocity.ω;
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
    let change = Math.sign(this.localUser.velocity.v) == -1
      ? this.localUser.drag
      : -this.localUser.drag;
    let angularChange = Math.sign(this.localUser.velocity.ω) == -1
      ? this.localUser.angularDrag
      : -this.localUser.angularDrag;

    const differentSigns = (newVelocity: number) => Math.sign(newVelocity - change) != Math.sign(newVelocity);

    let newVelocity = this.localUser.velocity.v + change;
    let newAngularVelocity = this.localUser.velocity.ω + angularChange;

    if (this.localUser.velocity.v != 0 && !differentSigns(newVelocity))
      this.localUser.velocity.v = newVelocity
    else if (differentSigns(newVelocity))
      this.localUser.velocity.v = 0
    
    if (this.localUser.velocity.ω != 0 && !differentSigns(newAngularVelocity))
      this.localUser.velocity.ω = newAngularVelocity
    else if (differentSigns(newVelocity))
      this.localUser.velocity.ω = 0;
  }

}
