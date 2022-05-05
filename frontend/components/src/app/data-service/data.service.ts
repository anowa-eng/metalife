import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { UserPositionData } from './user-position-data.type';
import { WebSocketService } from './web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data!: UserPositionData;

  constructor(private httpService: HttpService, private webSocketService: WebSocketService) {
  }

  getInitialData() {
    let httpRequest = new HttpRequest('GET', '')
    this.httpService.request()
  }
}
