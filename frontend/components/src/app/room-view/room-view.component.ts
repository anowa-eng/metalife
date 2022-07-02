import { Component, OnInit } from '@angular/core';

import { RoomDataService } from './room-data.service';
import { UserDataService } from './../user-data.service';

import { transformData } from './transform-data';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.scss']
})
export class RoomViewComponent implements OnInit {
  data!: any[];
  userProfiles!: any[];

  constructor(
    private roomDataService: RoomDataService,
    private userDataService: UserDataService
  ) {
  }

  ngOnInit(): void {
    this.roomDataService.getInitialData()
      .subscribe((res) => {
        let data = res.data;
        let transformedData = transformData(data, 1);

        this.data = transformedData;

        this.loadProfiles();
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

}
