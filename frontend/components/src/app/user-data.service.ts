import { Injectable } from '@angular/core';

import { HttpService } from './http.service';

import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor(private httpService: HttpService) {}

  fetchUser(id: number): Observable<any> {
    return this.httpService.httpClient.get(`/api/user/${id}`, { responseType: 'json' });
  }

  fetchUsers(ids: number[]): Observable<any[]> {
    return new Observable((sub) => {
      let users: any[] = [];
      for (const id of ids) {
        this.fetchUser(id)
          .subscribe((userData: any) => {
            users.push(userData);
          })
      }

      sub.next(users);
    });
  }

  private loadUserProfile(id: number): Observable<any> {
    return new Observable((sub) => {
      this.fetchUser(id)
        .subscribe((data: any) => {
          sub.next({
            userId: data.user.id,
            profile: data.user_profile
          })
        });
    })
  }
  loadUserProfiles(ids: number[]): Observable<any[]> {
    return new Observable((sub) => {
      let profiles: any[] = [];

      let observables = ids.map((id) => this.loadUserProfile(id));
      let promises = observables.map((observable) => firstValueFrom(observable));
      Promise.all(promises)
        .then((profiles) => sub.next(profiles));
    });
  }
}
