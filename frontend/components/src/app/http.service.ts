import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  request(req: HttpRequest<any>): Observable<HttpResponse<any>> {
    return this.httpClient.request<any>(req, {
      observe: 'response'
    });
  }
}
