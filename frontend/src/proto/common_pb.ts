// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file proto/common.proto (package imakara_admin_common, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum imakara_admin_common.ValidationResult
 */
export enum ValidationResult {
  /**
   * @generated from enum value: UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: SUCCESS = 1;
   */
  SUCCESS = 1,

  /**
   * @generated from enum value: FAILURE = 2;
   */
  FAILURE = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(ValidationResult)
proto3.util.setEnumType(ValidationResult, "imakara_admin_common.ValidationResult", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "SUCCESS" },
  { no: 2, name: "FAILURE" },
]);

/**
 * @generated from message imakara_admin_common.StreamerInfoRequest
 */
export class StreamerInfoRequest extends Message<StreamerInfoRequest> {
  /**
   * @generated from field: string url = 1;
   */
  url = "";

  constructor(data?: PartialMessage<StreamerInfoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "imakara_admin_common.StreamerInfoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamerInfoRequest {
    return new StreamerInfoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamerInfoRequest {
    return new StreamerInfoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamerInfoRequest {
    return new StreamerInfoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: StreamerInfoRequest | PlainMessage<StreamerInfoRequest> | undefined, b: StreamerInfoRequest | PlainMessage<StreamerInfoRequest> | undefined): boolean {
    return proto3.util.equals(StreamerInfoRequest, a, b);
  }
}

/**
 * @generated from message imakara_admin_common.StreamerInfoResponse
 */
export class StreamerInfoResponse extends Message<StreamerInfoResponse> {
  /**
   * @generated from field: imakara_admin_common.ValidationResponse validation_response = 1;
   */
  validationResponse?: ValidationResponse;

  /**
   * @generated from field: string title = 2;
   */
  title = "";

  /**
   * @generated from field: string avatar_url = 3;
   */
  avatarUrl = "";

  /**
   * @generated from field: string primary_channel = 4;
   */
  primaryChannel = "";

  constructor(data?: PartialMessage<StreamerInfoResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "imakara_admin_common.StreamerInfoResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "validation_response", kind: "message", T: ValidationResponse },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "primary_channel", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamerInfoResponse {
    return new StreamerInfoResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamerInfoResponse {
    return new StreamerInfoResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamerInfoResponse {
    return new StreamerInfoResponse().fromJsonString(jsonString, options);
  }

  static equals(a: StreamerInfoResponse | PlainMessage<StreamerInfoResponse> | undefined, b: StreamerInfoResponse | PlainMessage<StreamerInfoResponse> | undefined): boolean {
    return proto3.util.equals(StreamerInfoResponse, a, b);
  }
}

/**
 * @generated from message imakara_admin_common.ValidationResponse
 */
export class ValidationResponse extends Message<ValidationResponse> {
  /**
   * @generated from field: imakara_admin_common.ValidationResult result = 1;
   */
  result = ValidationResult.UNKNOWN;

  /**
   * @generated from field: string reason = 2;
   */
  reason = "";

  constructor(data?: PartialMessage<ValidationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "imakara_admin_common.ValidationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "enum", T: proto3.getEnumType(ValidationResult) },
    { no: 2, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidationResponse {
    return new ValidationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidationResponse {
    return new ValidationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidationResponse {
    return new ValidationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ValidationResponse | PlainMessage<ValidationResponse> | undefined, b: ValidationResponse | PlainMessage<ValidationResponse> | undefined): boolean {
    return proto3.util.equals(ValidationResponse, a, b);
  }
}
