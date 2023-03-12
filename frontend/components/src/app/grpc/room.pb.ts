/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
/**
 * Message implementation for room.UserInRoomData
 */
export class UserInRoomData implements GrpcMessage {
  static id = 'room.UserInRoomData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserInRoomData();
    UserInRoomData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserInRoomData) {
    _instance.x = _instance.x || 0;
    _instance.y = _instance.y || 0;
    _instance.direction = _instance.direction || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserInRoomData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.x = _reader.readFloat();
          break;
        case 2:
          _instance.y = _reader.readFloat();
          break;
        case 3:
          _instance.direction = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    UserInRoomData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UserInRoomData,
    _writer: BinaryWriter
  ) {
    if (_instance.x) {
      _writer.writeFloat(1, _instance.x);
    }
    if (_instance.y) {
      _writer.writeFloat(2, _instance.y);
    }
    if (_instance.direction) {
      _writer.writeInt32(3, _instance.direction);
    }
  }

  private _x: number;
  private _y: number;
  private _direction: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserInRoomData to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserInRoomData.AsObject>) {
    _value = _value || {};
    this.x = _value.x;
    this.y = _value.y;
    this.direction = _value.direction;
    UserInRoomData.refineValues(this);
  }
  get x(): number {
    return this._x;
  }
  set x(value: number) {
    this._x = value;
  }
  get y(): number {
    return this._y;
  }
  set y(value: number) {
    this._y = value;
  }
  get direction(): number {
    return this._direction;
  }
  set direction(value: number) {
    this._direction = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UserInRoomData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserInRoomData.AsObject {
    return {
      x: this.x,
      y: this.y,
      direction: this.direction
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UserInRoomData.AsProtobufJSON {
    return {
      x: this.x,
      y: this.y,
      direction: this.direction
    };
  }
}
export module UserInRoomData {
  /**
   * Standard JavaScript object representation for UserInRoomData
   */
  export interface AsObject {
    x: number;
    y: number;
    direction: number;
  }

  /**
   * Protobuf JSON representation for UserInRoomData
   */
  export interface AsProtobufJSON {
    x: number;
    y: number;
    direction: number;
  }
}

/**
 * Message implementation for room.UserInRoomDataListRequest
 */
export class UserInRoomDataListRequest implements GrpcMessage {
  static id = 'room.UserInRoomDataListRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserInRoomDataListRequest();
    UserInRoomDataListRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserInRoomDataListRequest) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserInRoomDataListRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    UserInRoomDataListRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UserInRoomDataListRequest,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserInRoomDataListRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserInRoomDataListRequest.AsObject>) {
    _value = _value || {};
    UserInRoomDataListRequest.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UserInRoomDataListRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserInRoomDataListRequest.AsObject {
    return {};
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UserInRoomDataListRequest.AsProtobufJSON {
    return {};
  }
}
export module UserInRoomDataListRequest {
  /**
   * Standard JavaScript object representation for UserInRoomDataListRequest
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for UserInRoomDataListRequest
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for room.UserInRoomDataRetrieveRequest
 */
export class UserInRoomDataRetrieveRequest implements GrpcMessage {
  static id = 'room.UserInRoomDataRetrieveRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserInRoomDataRetrieveRequest();
    UserInRoomDataRetrieveRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserInRoomDataRetrieveRequest) {
    _instance.id = _instance.id || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserInRoomDataRetrieveRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    UserInRoomDataRetrieveRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UserInRoomDataRetrieveRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt64String(1, _instance.id);
    }
  }

  private _id: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserInRoomDataRetrieveRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<UserInRoomDataRetrieveRequest.AsObject>
  ) {
    _value = _value || {};
    this.id = _value.id;
    UserInRoomDataRetrieveRequest.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UserInRoomDataRetrieveRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserInRoomDataRetrieveRequest.AsObject {
    return {
      id: this.id
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UserInRoomDataRetrieveRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module UserInRoomDataRetrieveRequest {
  /**
   * Standard JavaScript object representation for UserInRoomDataRetrieveRequest
   */
  export interface AsObject {
    id: string;
  }

  /**
   * Protobuf JSON representation for UserInRoomDataRetrieveRequest
   */
  export interface AsProtobufJSON {
    id: string;
  }
}
