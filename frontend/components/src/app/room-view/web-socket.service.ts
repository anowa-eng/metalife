import { Injectable } from '@angular/core';
import { firstValueFrom, observable, Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { RoomDataService } from './room-data.service';
import { RoomViewComponent } from './room-view.component';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  webSocket?: WebSocketSubject<any>;
  
  constructor(private roomDataService: RoomDataService) {
  }

  async init() {
    let url = `ws://localhost:8000/ws/room/`
    this.webSocket = webSocket(url);
  }


}
