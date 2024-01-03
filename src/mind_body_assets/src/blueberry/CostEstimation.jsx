export function CostEstimationHTTPs(numberBytesSent: any, numberBytesReturned: any) {
    //https://internetcomputer.org/docs/current/developer-docs/gas-cost
    // var costHTTPsOutCall13Node = 0.000000006806072*numberBytesSent;
    var costHTTPsResponse13Node = 0.000000013612144*numberBytesReturned;
    var totalCostEstimate = costHTTPsResponse13Node + costHTTPsResponse13Node;
    console.log(totalCostEstimate);
    console.log(numberBytesSent)
}

export function CostEstimationXNET(numberRecords: any, numberBytesTransmittedPerRecord: any) {
    //https://internetcomputer.org/docs/current/developer-docs/gas-cost
    var costXNETCalls = 0.0000003403036*numberRecords;
    var costXNETByteTransmission = 0.00000000130886*numberBytesTransmittedPerRecord*numberRecords;
    var totalNewGB = (numberBytesTransmittedPerRecord*numberRecords)/1073741824.0;
    //1 GB ~= $5.2420785379
    //~1 records encrypted with aes-256-cbc ~= 280 bytes
    //https://encrypt-online.com/
    //60 records 
    var costXNETGByteStoredPerYear = 0.00000016622522*totalNewGB*365.0*24.0*60.0*60.0;
    var totalCostEstimate = costXNETCalls + costXNETByteTransmission + costXNETGByteStoredPerYear;
    //example for storing 60 records
    // costXNETCalls = 0.0000003403036*60 = $0.000020418216
    // costXNETByteTransmission = 0.00000000130886*280*60 = $0.000021988848
    // totalNewGB = 280*60/1073741824 = 0.00001564621925
    // costXNETGByteStoredPerYear = 0.00000016622522*0.00001564621925*365.0*24.0*60.0*60.0 = $0.00008201871013
    // totalCost = $0.000020418216 + $0.000021988848 + $0.00008201871013 = $0.0001244257741
    // estimate for 1 month at 8 hours per day = 30*8*$0.0001244257741 = $0.02986218578
    console.log(totalCostEstimate);
}

export default {
    CostEstimationHTTPs: CostEstimationHTTPs,
    CostEstimationXNET: CostEstimationXNET
}