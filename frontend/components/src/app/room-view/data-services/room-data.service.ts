import { Injectable } from '@angular/core';
import { HttpService } from './../../http.service';
import { UserPositionData } from './user-position-data.type';
import { WebSocketService } from './web-socket.service';

import { ValueWatcher } from './watch';

@Injectable({
  providedIn: 'root'
})
export class RoomDataService {
  roomData!: UserPositionData;

  room?: number;

  constructor(
    private httpService: HttpService,
    // @ts-ignore
    private webSocketService: WebSocketService,
  ) {
    // Get the "initial data"
    this.getInitialData()
      .subscribe((res: any) => {
        // Update the data
        let initialData = JSON.parse(res.body);
        this.roomData = initialData;

        // Then, listen for updates and change the data property accordingly
        let watcher = new ValueWatcher(() => this.webSocketService.data)
        watcher.onChangeDetected((newData: any) => {
            this.roomData = [
              ...this.roomData,
              ...newData
            ]
          })
      });
  }

  getInitialData() {
    return this.httpService.httpClient.get('api/get-current-room', {
      responseType: 'text'
    });
  }
}
