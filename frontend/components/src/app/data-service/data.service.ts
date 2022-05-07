import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { UserPositionData } from './user-position-data.type';
import { watch } from './watch';
import { WebSocketService } from './web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data!: UserPositionData;

  room?: number;

  constructor(private httpService: HttpService, private webSocketService: WebSocketService) {
    // Get the "initial data"
    this.getInitialData()
      .subscribe((res) => {
        // Update the data
        let initialData = JSON.parse(res.body);
        this.data = initialData;

        // Then, listen for updates and change the data property accordingly
        
        watch(this.webSocketService.data)
          .subscribe((newData) => {
            this.data = [
              ...this.data,
              ...newData
            ]
          })
      })
  }

  getInitialData() {
    let httpRequest = new HttpRequest('GET', 'api/get-current-room', {
      responseType: 'text'
    });
    return this.httpService.request(httpRequest);
  }
}
