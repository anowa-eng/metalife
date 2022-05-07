import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
}
