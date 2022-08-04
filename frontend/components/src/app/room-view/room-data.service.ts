import { Injectable } from '@angular/core';

import { HttpService } from './../http.service';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomDataService {
  constructor(private httpService: HttpService) {}

  getInitialData(): Observable<any> {
    return this.httpService.httpClient.get('/api/get-initial-room-data', { responseType: 'json' });
  }

  getCurrentRoom(): Observable<any> {
    return new Observable((subscriber) => {
      this.httpService.httpClient.get('/api/current-room', { responseType: 'text' })
        .subscribe((data) => {
          let currentRoomId = parseInt(data);
          subscriber.next(currentRoomId)
        });
    });
  }
}
