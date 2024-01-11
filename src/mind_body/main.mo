import Debug "mo:base/Debug";
import Blob "mo:base/Blob";
import Cycles "mo:base/ExperimentalCycles";
import Array "mo:base/Array";
import Nat8 "mo:base/Nat8";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Error "mo:base/Error";
import Random "mo:base/Random";
// import HashMap "mo:motoko-hash-map/Map"; //explore in future

//import the custom types you have in Types.mo
import Types "types";

actor {

  type Vector = [Int];
  type NestedArray = [Vector];
  type AddressMap = HashMap.HashMap<Text, NestedArray>;

  // structure:
  // "web3Id" : [uploadData1_ints,uploadData2_ints,...,uploadDataN_ints]
  // uploadData1_ints = [int1, int2, int3,...,intN]

  stable var storedNetworkDataSize : Nat = 0;

  // Initialize the HashMap
  // stable storage - set mapping to per month hashmaps - potentially segment to weeks or days depending on sizing/timing requirements
  var addressMap : AddressMap = HashMap.HashMap<Text, NestedArray>(10, Text.equal, Text.hash);

  // study map
  // structure
  // studyMap = { "web3Id": "studyId", ... }

  // exchange map
  // map of "web3Id": "record-ID" to temporary hold for participation in study
  // hold until confirmed transfer
  // structure:
  // "studyId": [ "web3Id": "record-ID", ... ]
  // confirm transfer from AddressMap to new ID
  // provide value for participation

  public func pushToArray(address: Text, encryptedWindow: [Int], dateInt: Int) {
    // assert(isCallerAllowed());                                   // Ensure the caller is allowed to call this method
    let tmpArraySize = Array.size(encryptedWindow) * 4;
    storedNetworkDataSize += tmpArraySize;

    let currentArrays = addressMap.get(address);
    let updatedArrays : NestedArray = switch (currentArrays) {
      case (null) { [encryptedWindow] };                            // If no entry exists, start a new array
      case (?arrays) { Array.append(arrays, [encryptedWindow]) };   // If an entry exists, append the new array
    };
    addressMap.put(address, updatedArrays);
  };

  public func removeAddress(address: Text, sizeOfData: Nat) {
    if (sizeOfData <= storedNetworkDataSize){
      storedNetworkDataSize -= sizeOfData;
    };
    addressMap.delete(address); 
  };

  // Function to retrieve the array of arrays for a given address.
  public query func getMapping(address: Text) : async ?NestedArray {
    return addressMap.get(address);
  };

  public query func getCanisterBalance() : async Nat {
    return Cycles.balance();
  };

  public query func getStoredDataNetworkSize() : async Nat {
    return storedNetworkDataSize;
  };

  public query (message) func getIcpId() : async Text {
    return Principal.toText(message.caller);
  };

  //data check prior to upload
  //hashmap of each uploadData1_ints = [int1, int2, int3,...,intN] within a web3Id
  //loop through all hashs for each "web3Id" or all "web3Id" to ensure no replications 

  //function to transform the response
  public query func transform(raw : Types.TransformArgs) : async Types.CanisterHttpResponsePayload {
      let transformed : Types.CanisterHttpResponsePayload = {
          status = raw.response.status;
          body = raw.response.body;
          headers = [
              {
                  name = "Content-Security-Policy";
                  value = "default-src 'self'";
              },
              { name = "Referrer-Policy"; value = "strict-origin" },
              { name = "Permissions-Policy"; value = "geolocation=(self)" },
              {
                  name = "Strict-Transport-Security";
                  value = "max-age=63072000";
              },
              { name = "X-Frame-Options"; value = "DENY" },
              { name = "X-Content-Type-Options"; value = "nosniff" },
          ];
      };
      transformed;
  };

  //reference: https://m7sm4-2iaaa-aaaab-qabra-cai.ic0.app/?tag=1496604579
  private func parse(t: Text, k: Text): Text {
    for(e:Text in Text.split(t, #char '{')){
      if(Text.contains(e, #text k)){
        if(Text.contains(e, #char '{')){
          return parse(e, k);
        } else {
          for(i:Text in Text.split(e, #char ',')){
            if(Text.contains(i, #text k)){
              for(s:Text in Text.split(i, #char ':')){
                if(Text.contains(s, #text k) == false){
                  var r:Text = Text.replace(s, #char '\"', "");
                  r := Text.replace(r, #char ']', "");
                  r := Text.replace(r, #char '}', "");
                  return r;
                };
              };
            };
          };
        };
      };
    };
    return "Not found";
  };

  public func send_http_blueberry_proxy_login(email: Text, password: Text) : async Text {

    //LOCAL: "aaaaa-aa"
    let ic : Types.IC = actor("aaaaa-aa");

    let host : Text = "us-central1-blueberry-x-proj.cloudfunctions.net";
    // let url = "https://us-central1-blueberry-x-proj.cloudfunctions.net/app/loginForce"; 
    let url = "https://us-central1-blueberry-x-proj.cloudfunctions.net/app/loginForce?email=" # email # "&password=" # password;

    // 2.2 prepare headers for the system http_request call
    let request_headers = [
        { name = "Host"; value = host # ":443" }
    ];

    // 2.2.1 Transform context
    let transform_context : Types.TransformContext = {
      function = transform;
      context = Blob.fromArray([]);
    };

    // 2.3 The HTTP request
    let http_request : Types.HttpRequestArgs = {
        url = url;
        max_response_bytes = null; //optional for request
        headers = request_headers;
        body = null; //optional for request
        method = #get;
        transform = ?transform_context;
    };

    //1 node
    // Cycles.add(1_605_000_000);
    //13 nodes
    Cycles.add(20_870_000_000);
    
    //4. MAKE HTTPS REQUEST AND WAIT FOR RESPONSE
    //Since the cycles were added above, we can just call the IC management canister with HTTPS outcalls below
    let http_response : Types.HttpResponsePayload = await ic.http_request(http_request);

    //  3. We use a switch to explicitly call out both cases of decoding the Blob into ?Text
    let response_body: Blob = Blob.fromArray(http_response.body);
    let decoded_text: Text = switch (Text.decodeUtf8(response_body)) {
        case (null) { "No value returned" };
        case (?y) { y };
    };

    decoded_text
  };

  public func send_http_blueberry_proxy_get_raw_data(idToken: Text, userID: Text, startMillis: Text, endMillis: Text) : async Text {

    //LOCAL: "aaaaa-aa"
    let ic : Types.IC = actor("aaaaa-aa");

    let host : Text = "us-central1-blueberry-x-proj.cloudfunctions.net";
    let url = "https://us-central1-blueberry-x-proj.cloudfunctions.net/app/queryForce?startMillis=" # startMillis # "&endMillis=" # endMillis # "&userID=" # userID # "&idToken=" # idToken ;

    // 2.2 prepare headers for the system http_request call
    let request_headers = [
        { name = "Host"; value = host # ":443" }
    ];

    // 2.2.1 Transform context
    let transform_context : Types.TransformContext = {
      function = transform;
      context = Blob.fromArray([]);
    };

    // 2.3 The HTTP request
    let http_request : Types.HttpRequestArgs = {
        url = url;
        max_response_bytes = null; //optional for request
        headers = request_headers;
        body = null; //optional for request
        method = #get;
        transform = ?transform_context;
    };

    //1 node
    // Cycles.add(1_605_000_000);
    //13 nodes
    Cycles.add(20_870_000_000);
    
    //4. MAKE HTTPS REQUEST AND WAIT FOR RESPONSE
    //Since the cycles were added above, we can just call the IC management canister with HTTPS outcalls below
    let http_response : Types.HttpResponsePayload = await ic.http_request(http_request);

    //  3. We use a switch to explicitly call out both cases of decoding the Blob into ?Text
    let response_body: Blob = Blob.fromArray(http_response.body);
    let decoded_text: Text = switch (Text.decodeUtf8(response_body)) {
        case (null) { "No value returned" };
        case (?y) { y };
    };

    decoded_text
  };

  //generate random UUID 
  //https://internetcomputer.org/docs/current/motoko/main/base/Random/
  func generateUUID() : Text {
    //let seed : Blob = "\14\C9\72\09\03\D4\D5\72\82\95\E5\43\AF\FA\A9\44\49\2F\25\56\13\F3\6E\C7\B0\87\DC\76\08\69\14\CF";
    //let valInt : Int = Random.rangeFrom(32, seed) // => 348746249
    //let uuidString : Text = "UUID-" # Int.toText(valInt);
    return "UUID-112358132";
  }
};