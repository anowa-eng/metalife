import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';

import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.scss']
})
export class RoomViewComponent implements OnInit {

  constructor(private webSocketService: WebSocketService) { }

  data: object | undefined;

  ngOnInit(): void {
    setInterval(() => {
      this.data = 
    })
  }

}
