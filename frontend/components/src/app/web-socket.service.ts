import { Injectable } from '@angular/core';

import { HttpService } from './http.service';

import { HttpRequest } from '@angular/common/http';

import { EventEmitter } from 'stream';

// RxJS imports
import { webSocket } from 'rxjs/webSocket';

import { pipe, map }

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private eventEmitter: EventEmitter;

  data: object;

  webSocket!: ReturnType<typeof webSocket>;

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
        .subscribe(() => ({
          next: (() => {
            
          })
        }))
    }
  }

  private setCurrentRoomId() {
    let req = new HttpRequest('GET', '/api/currentRoomId', {
      init: {
        responseType: 'text'
      }
    });
    this
      ._httpService
      .httpClient
      .request<any>(req)
      .subscribe((res) => {
        if (res) var parsedId = parseInt(res.body);
        this.currentRoomId = parsedId!;
      });
  }
}
