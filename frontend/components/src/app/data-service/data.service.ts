import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { WebSocketService } from './web-socket.service';

type PositionData = {
  user: 
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: ;

  constructor(private httpService: HttpService, private webSocketService: WebSocketService) {
  }


}
