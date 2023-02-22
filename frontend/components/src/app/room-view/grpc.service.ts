import { Injectable } from '@angular/core';
import * as roomGrpcWebPb from './../room_grpc_web_pb';

@Injectable({
  providedIn: 'root'
})
export class GRPCService {
  constructor() {
    console.log(roomGrpcWebPb);
  }
}
