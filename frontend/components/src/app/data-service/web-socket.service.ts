import { Injectable } from '@angular/core';

import { HttpService } from '../http.service';

import { HttpRequest, HttpResponse } from '@angular/common/http';

import { EventEmitter } from '@angular/core';

// RxJS imports
import { webSocket } from 'rxjs/webSocket';
import { UserPositionData } from './user-position-data.type';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private eventEmitter: EventEmitter<any>;

  data: UserPositionData;

  webSocket!: ReturnType<typeof webSocket>;

  private currentRoomId?: number | null;

  constructor(private _httpService: HttpService) {
    // Use the HttpService to get the current room number.
    // (We don't have rooms yet; that's later into the project.)

    this.eventEmitter = new EventEmitter();

    this.data = [];

    this.setCurrentRoomId();

    this.createNewWebSocket();
  }

  createNewWebSocket() {
    if (this.currentRoomId) {
      this.webSocket = webSocket(`wss://ws/room/${this.currentRoomId}`);

      this.webSocket
        .subscribe({
          next: (val: any) => {
            let newData = JSON.parse(val);
            this.data = [
              ...this.data,
              ...newData
            ]
          }
        })
    }
  }

  private setCurrentRoomId() {
    let req = new HttpRequest('GET', '/api/currentRoomId', {
      responseType: 'text'
    });
    this
      ._httpService
      .request(req)
      .subscribe({
        next: (res: any) => {
          let body = res.body;

          if (body) var parsedId = parseInt(body);
          this.currentRoomId = parsedId!;
        },
        error: () => this.eventEmitter.emit('currentRoomIdFailed')
      });
  }
}
