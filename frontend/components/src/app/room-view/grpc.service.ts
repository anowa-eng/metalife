import { Injectable } from '@angular/core';
import { load, credentials } from '@grpc/grpc-js';
import { cwd } from 'process';
import path from 'path';

@Injectable({
  providedIn: 'root'
})
export class GRPCService {
  PROTO_FILE = path.resolve(cwd(), '../../../../../backend/venv/project/room.proto');
  client;

  constructor() {
    let proto = load(this.PROTO_FILE, '.proto', {}),
      service = proto.UserInRoomDataController;
    this.client = new service.Client('localhost:50051', credentials.createInsecure());
  }
}
