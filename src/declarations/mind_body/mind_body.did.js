export const idlFactory = ({ IDL }) => {
  const Vector = IDL.Vec(IDL.Int);
  const NestedArray = IDL.Vec(Vector);
  const HttpHeader = IDL.Record({ 'value' : IDL.Text, 'name' : IDL.Text });
  const HttpResponsePayload = IDL.Record({
    'status' : IDL.Nat,
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HttpHeader),
  });
  const TransformArgs = IDL.Record({
    'context' : IDL.Vec(IDL.Nat8),
    'response' : HttpResponsePayload,
  });
  const CanisterHttpResponsePayload = IDL.Record({
    'status' : IDL.Nat,
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HttpHeader),
  });
  return IDL.Service({
    'getCanisterBalance' : IDL.Func([], [IDL.Nat], ['query']),
    'getIcpId' : IDL.Func([], [IDL.Text], ['query']),
    'getMapping' : IDL.Func([IDL.Text], [IDL.Opt(NestedArray)], ['query']),
    'getStoredDataNetworkSize' : IDL.Func([], [IDL.Nat], ['query']),
    'pushToArray' : IDL.Func(
        [IDL.Text, IDL.Vec(IDL.Int), IDL.Int],
        [],
        ['oneway'],
      ),
    'removeAddress' : IDL.Func([IDL.Text, IDL.Nat], [], ['oneway']),
    'send_http_blueberry_proxy_get_raw_data' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [IDL.Text],
        [],
      ),
    'send_http_blueberry_proxy_login' : IDL.Func(
        [IDL.Text, IDL.Text],
        [IDL.Text],
        [],
      ),
    'transform' : IDL.Func(
        [TransformArgs],
        [CanisterHttpResponsePayload],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
