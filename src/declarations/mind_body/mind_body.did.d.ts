import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface CanisterHttpResponsePayload {
  'status' : bigint,
  'body' : Uint8Array | number[],
  'headers' : Array<HttpHeader>,
}
export interface HttpHeader { 'value' : string, 'name' : string }
export interface HttpResponsePayload {
  'status' : bigint,
  'body' : Uint8Array | number[],
  'headers' : Array<HttpHeader>,
}
export type NestedArray = Array<Vector>;
export interface TransformArgs {
  'context' : Uint8Array | number[],
  'response' : HttpResponsePayload,
}
export type Vector = Array<bigint>;
export interface _SERVICE {
  'getCanisterBalance' : ActorMethod<[], bigint>,
  'getIcpId' : ActorMethod<[], string>,
  'getMapping' : ActorMethod<[string], [] | [NestedArray]>,
  'pushToArray' : ActorMethod<[string, Array<bigint>, bigint], undefined>,
  'send_http_blueberry_proxy_get_raw_data' : ActorMethod<
    [string, string, string, string],
    string
  >,
  'send_http_blueberry_proxy_login' : ActorMethod<[string, string], string>,
  'transform' : ActorMethod<[TransformArgs], CanisterHttpResponsePayload>,
}
