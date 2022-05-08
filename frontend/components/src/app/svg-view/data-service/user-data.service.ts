import { Injectable } from '@angular/core';

import { HttpService } from '../../http.service'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpService: HttpService) {}

  fetchUser(userId: number) {
    return this.httpService.httpClient.get(`user/${userId}`, {
      responseType: 'json'
    })
  }
}
