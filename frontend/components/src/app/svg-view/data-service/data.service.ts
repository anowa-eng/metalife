import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './../../http.service';
import { UserPositionData } from './user-position-data.type';
import { WebSocketService } from './web-socket.service';
import { UserDataService } from './user-data.service';

import { ValueWatcher } from './watch';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private roomData!: UserPositionData;

  room?: number;

  userDataService: UserDataService;

  // @ts-ignore
  constructor(
    private httpService: HttpService,
    private webSocketService: WebSocketService,
    userDataService: UserDataService
  ) {
    // Get the "initial data"
    this.getInitialData()
      .subscribe((res: any) => {
        // Update the data
        let initialData = JSON.parse(res.body);
        this.roomData = initialData;

        // Then, listen for updates and change the data property accordingly
        new ValueWatcher('this.webSocketService.data')
          .observable.subscribe((newData: UserPositionData) => {
            this.roomData = [
              ...this.roomData,
              ...newData
            ]
          })
      });

    this.userDataService = userDataService;
  }

  getInitialData() {
    return this.httpService.httpClient.get('api/get-current-room', {
      responseType: 'text'
    });
  }
}
