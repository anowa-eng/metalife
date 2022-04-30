import { ElementRef, Injectable, ViewChild } from '@angular/core';

import { HttpService } from './http.service';

import { map, ObservableInput, of, filter } from 'rxjs'
import { catchError } from 'rxjs/operators';
import { HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventEmitter } from 'stream';
import { ifError } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  @ViewChild(AppComponent)
  private appComponent!: ElementRef;

  private eventEmitter: EventEmitter;

  data: object;

  constructor(private _httpService: HttpService) {
    // Use the HttpService to get the current room number.
    // (We don't have rooms yet; that's later into the project.)
    
    this.eventEmitter = new EventEmitter();

    this.data = {};
  }

  private async currentRoom() {
    let currentRoom;

    let req = new HttpRequest('GET', '/api/currentroom');
    await this
      ._httpService
      .request(req)
      .subscribe({
        next(value) {
          let response = value
        },
        error: () => this.eventEmitter.emit('currentRoomFailed')
      });
  }
}
