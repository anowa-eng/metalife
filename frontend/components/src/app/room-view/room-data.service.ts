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
}
