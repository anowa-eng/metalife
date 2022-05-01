import { Injectable } from '@angular/core';

import { HttpService } from './http.service';

import { HttpRequest, HttpResponse } from '@angular/common/http';

import { EventEmitter } from 'stream';

// RxJS imports
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private eventEmitter: EventEmitter;

  data: object;

  webSocket: typeof webSocket;

  private currentRoomId?: number | null;

  constructor(private _httpService: HttpService) {
    // Use the HttpService to get the current room number.
    // (We don't have rooms yet; that's later into the project.)

    this.eventEmitter = new EventEmitter();

    this.data = {};

    this.setCurrentRoomId();

    this.createNewWebSocket();
  }

  createNewWebSocket() {
    if (this.currentRoomId) {
      this.webSocket = webSocket(`wss://ws/room/${this.currentRoomId}`);

      this.webSocket
        .subscribe(() => {})
    }
  }

  private setCurrentRoomId() {
    let req = new HttpRequest('GET', '/api/currentRoomId');
    this
      ._httpService
      .request(req)
      .subscribe({
        next: (res) => {
          let body = res.body;
          let content = Buffer.from(body).toString();

          if (content) var parsedId = parseInt(content);
          this.currentRoomId = parsedId!;
        },
        error: () => this.eventEmitter.emit('currentRoomIdFailed')
      });
  }
}
