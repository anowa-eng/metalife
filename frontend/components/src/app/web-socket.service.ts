import { Injectable } from '@angular/core';

import { HttpService } from './http.service';

import { HttpRequest } from '@angular/common/http';

import { EventEmitter } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private eventEmitter: EventEmitter;

  data: object;

  private currentRoomId: number | null;

  constructor(private _httpService: HttpService) {
    // Use the HttpService to get the current room number.
    // (We don't have rooms yet; that's later into the project.)

    this.eventEmitter = new EventEmitter();

    this.data = {};

    this._setCurrentRoomId();
  }

  private _setCurrentRoomId() {
    let req = new HttpRequest('GET', '/api/currentRoomId');
    this
      ._httpService
      .request(req)
      .subscribe({
        next: (res) => {
          let body = res.body;

          if (body) var parsedId = parseInt(body);
          this.currentRoomId = parsedId!;
        },
        error: () => this.eventEmitter.emit('currentRoomIdFailed')
      });
  }
}
