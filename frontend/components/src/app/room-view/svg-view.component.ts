import { Component, OnInit } from '@angular/core';

import { RoomDataService } from './data-services/room-data.service';

@Component({
  selector: 'app-svg-view',
  templateUrl: './svg-view.component.html',
  styleUrls: ['./svg-view.component.scss']
})
export class RoomViewComponent implements OnInit {
  users: object = {};

  constructor(
    private roomDataService: RoomDataService,
    private userDataService: UserDataService
  ) {
    let roomData = this.dataService.roomData;
    let userData = this.dataSer
  }

  ngOnInit(): void {
  }

}
