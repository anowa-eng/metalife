/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './room.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import { GRPC_USER_IN_ROOM_DATA_CONTROLLER_CLIENT_SETTINGS } from './room.pbconf';
/**
 * Service client implementation for room.UserInRoomDataController
 */
@Injectable({ providedIn: 'any' })
export class UserInRoomDataControllerClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Server streaming: /room.UserInRoomDataController/List
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UserInRoomData>>
     */
    list: (
      requestData: thisProto.UserInRoomDataListRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UserInRoomData>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/room.UserInRoomDataController/List',
        requestData,
        requestMetadata,
        requestClass: thisProto.UserInRoomDataListRequest,
        responseClass: thisProto.UserInRoomData
      });
    },
    /**
     * Unary call: /room.UserInRoomDataController/Create
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UserInRoomData>>
     */
    create: (
      requestData: thisProto.UserInRoomData,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UserInRoomData>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/room.UserInRoomDataController/Create',
        requestData,
        requestMetadata,
        requestClass: thisProto.UserInRoomData,
        responseClass: thisProto.UserInRoomData
      });
    },
    /**
     * Unary call: /room.UserInRoomDataController/Retrieve
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UserInRoomData>>
     */
    retrieve: (
      requestData: thisProto.UserInRoomDataRetrieveRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UserInRoomData>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/room.UserInRoomDataController/Retrieve',
        requestData,
        requestMetadata,
        requestClass: thisProto.UserInRoomDataRetrieveRequest,
        responseClass: thisProto.UserInRoomData
      });
    },
    /**
     * Unary call: /room.UserInRoomDataController/Update
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UserInRoomData>>
     */
    update: (
      requestData: thisProto.UserInRoomData,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UserInRoomData>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/room.UserInRoomDataController/Update',
        requestData,
        requestMetadata,
        requestClass: thisProto.UserInRoomData,
        responseClass: thisProto.UserInRoomData
      });
    },
    /**
     * Unary call: /room.UserInRoomDataController/Destroy
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    destroy: (
      requestData: thisProto.UserInRoomData,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/room.UserInRoomDataController/Destroy',
        requestData,
        requestMetadata,
        requestClass: thisProto.UserInRoomData,
        responseClass: googleProtobuf000.Empty
      });
    }
  };

  constructor(
    @Optional()
    @Inject(GRPC_USER_IN_ROOM_DATA_CONTROLLER_CLIENT_SETTINGS)
    settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'room.UserInRoomDataController',
      settings
    );
  }

  /**
   * Server streaming @/room.UserInRoomDataController/List
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UserInRoomData>
   */
  list(
    requestData: thisProto.UserInRoomDataListRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UserInRoomData> {
    return this.$raw
      .list(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/room.UserInRoomDataController/Create
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UserInRoomData>
   */
  create(
    requestData: thisProto.UserInRoomData,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UserInRoomData> {
    return this.$raw
      .create(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/room.UserInRoomDataController/Retrieve
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UserInRoomData>
   */
  retrieve(
    requestData: thisProto.UserInRoomDataRetrieveRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UserInRoomData> {
    return this.$raw
      .retrieve(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/room.UserInRoomDataController/Update
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UserInRoomData>
   */
  update(
    requestData: thisProto.UserInRoomData,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UserInRoomData> {
    return this.$raw
      .update(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/room.UserInRoomDataController/Destroy
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  destroy(
    requestData: thisProto.UserInRoomData,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .destroy(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
