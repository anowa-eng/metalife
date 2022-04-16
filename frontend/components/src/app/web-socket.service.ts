import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  webSocket: WebSocket;

  data: object[];

  constructor() {
    this.webSocket = new WebSocket(`wss://${window.location.href}/`);

    this.webSocket.onmessage = (event) => {
      let newData: object = JSON.parse(event.data);
      this.data = {
        ...this.data,
        ...newData
      };
    }
  }

  bindDataTo()
}
