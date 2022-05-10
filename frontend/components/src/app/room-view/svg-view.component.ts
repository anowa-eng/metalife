import { Component, OnInit } from '@angular/core';

import { DataService } from './data-service/data.service';
import { UserDataService } from './data-service/user-data.service';

@Component({
  selector: 'app-svg-view',
  templateUrl: './svg-view.component.html',
  styleUrls: ['./svg-view.component.scss']
})
export class SvgViewComponent implements OnInit {
  users: object = {};

  constructor(
    private dataService: DataService,
    private userDataService:
  ) {
    let roomData = this.dataService.roomData;
    let userData = this.dataSer
  }

  ngOnInit(): void {
  }

}
