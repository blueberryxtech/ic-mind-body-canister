export function DictionaryToIntArray(dictionary, userCategoryEnum, cb) {
    // let tmpValues = {
    // 4 bytes, integer 1               "timestamp": timestamp, 
    // 1 byte, integer 2 - byte 1       "category": user_current_state, 
    // 2 bytes, integer 2 - bytes 2,3   "flow_activity": parseInt(user_flow_activity, 10),
    // 1 byte, integer 2 - byte 4       "heartrate": parseInt(user_heart_rate, 10),
    // 1 byte, integer 3 - byte 1       "strain_intensity": parseInt(user_strain_intensity, 10),
    // 2 bytes, integer 3 - byte 2      "eye_blink_rate": parseInt(user_eye_blink_rate, 10),
    // 1 byte, integer 3 - byte 3       "steps": parseInt(user_steps, 10),
    // 1 byte, integer 3 - byte 4       "data_quality": parseInt(user_data_quality, 10)
    // }
    //MARK may include data quality 1-byte value?
    let tmpObject = dictionary;
    let integer1 = parseInt(tmpObject.timestamp, 10);

    var integer2_1_s = tmpObject.category
    //MARK if user has motion categorization enabled in APP then "category" + "motion activity" e.g. "healthy walking"
    var integer2_1_s_split = integer2_1_s.split(' '); // this is an array containing the items
    if (integer2_1_s_split.length >= 2){
        integer2_1_s = integer2_1_s_split[0];
    }
    var integer2_1_i = 0
    //user specific ENUM for categories
    if (integer2_1_s === userCategoryEnum.state1) {
        integer2_1_i = 1
    } else if (integer2_1_s === userCategoryEnum.state2) {
        integer2_1_i = 2
    } else if (integer2_1_s === userCategoryEnum.state3) {
        integer2_1_i = 3
    } else if (integer2_1_s === userCategoryEnum.state4) {
        integer2_1_i = 4
    } else if (integer2_1_s === userCategoryEnum.state5) {
        integer2_1_i = 5
    } else if (integer2_1_s === userCategoryEnum.state6) {
        integer2_1_i = 6
    }
    let integer2_23 = parseInt(tmpObject.flow_activity, 10);
    let bytes2_23 = shortToByteArray(integer2_23);

    let integer2_4 = parseInt(tmpObject.heartrate, 10);
    var integer2_byteArray = [integer2_1_i, bytes2_23[0], bytes2_23[1], integer2_4];
    var integer2 = byteArrayToInt(integer2_byteArray);

    let integer3_1 = parseInt(tmpObject.strain_intensity, 10);
    let integer3_2 = parseInt(tmpObject.eye_blink_rate, 10);
    let integer3_3 = parseInt(tmpObject.steps, 10);
    let integer3_4 = parseInt(tmpObject.data_quality, 10);
    var integer3_byteArray = [integer3_1, integer3_2, integer3_3, integer3_4];
    var integer3 = byteArrayToInt(integer3_byteArray);

    let intArray = [integer1, integer2, integer3];
    // console.log(intArray);
    return intArray;
}

export function IntArrayToDictionary(intArray, userCategoryEnum, cb) {
    // let tmpValues = {
    // 4 bytes, integer 1               "timestamp": timestamp, 
    // 1 byte, integer 2 - byte 1       "category": user_current_state, 
    // 2 bytes, integer 2 - bytes 2,3   "flow_activity": parseInt(user_flow_activity, 10),
    // 1 byte, integer 2 - byte 4       "heartrate": parseInt(user_heart_rate, 10),
    // 1 byte, integer 3 - byte 1       "strain_intensity": parseInt(user_strain_intensity, 10),
    // 1 bytes, integer 3 - byte 2      "eye_blink_rate": parseInt(user_eye_blink_rate, 10),
    // 1 byte, integer 3 - byte 3       "steps": parseInt(user_steps, 10)
    // 1 byte, integer 3 - byte 4       "data_quality": parseInt(user_data_quality, 10)
    // }
    // let tmpObject = intArray;
    let timestamp = intArray[0];
    var user_current_state = "";
    var int2ByteArray = intToByteArray(intArray[1]);
    let tmpCategoryEnum = int2ByteArray[0];

    if (tmpCategoryEnum === 1) {
        user_current_state = userCategoryEnum.state1;
    } else if (tmpCategoryEnum === 2) {
        user_current_state = userCategoryEnum.state2;
    } else if (tmpCategoryEnum === 3) {
        user_current_state = userCategoryEnum.state3;
    } else if (tmpCategoryEnum === 4) {
        user_current_state = userCategoryEnum.state4;
    } else if (tmpCategoryEnum === 5) {
        user_current_state = userCategoryEnum.state5;
    } else if (tmpCategoryEnum === 6) {
        user_current_state = userCategoryEnum.state6;
    }

    var flowActivityByteArray = [int2ByteArray[1],int2ByteArray[2]];
    let user_flow_activity = byteArrayToInt(flowActivityByteArray);
    let user_heart_rate = parseInt(int2ByteArray[3], 10);

    var int3ByteArray = intToByteArray(intArray[2]);
    let user_strain_intensity = parseInt(int3ByteArray[0], 10);
    let user_eye_blink_rate =  parseInt(int3ByteArray[1], 10);
    let user_steps = parseInt(int3ByteArray[2], 10);
    let user_data_quality = parseInt(int3ByteArray[3], 10);

    let tmpValues = {
        "timestamp": timestamp, 
        "category": user_current_state, 
        "flow_activity": user_flow_activity,
        "heartrate": user_heart_rate,
        "strain_intensity": user_strain_intensity,
        "eye_blink_rate": user_eye_blink_rate,
        "steps": user_steps,
        "data_quality": user_data_quality
    }
    // console.log(tmpValues);
    return tmpValues;
}

export function AverageDictionaryToIntArray(dictionary, cb) {
    // let tmpValues = {
    // 4 bytes - "timestamp_start": query_start_time, 
    // 4 bytes - "timestamp_end": query_end_time,
    // 2 byte - "average_flow_activity": parseInt(averageFlowActivity, 10),
    // 1 byte - "average_heartrate": parseInt(averageHeartRate, 10),
    // 1 byte - "average_strain_intensity": parseInt(averageStrainIntensity, 10),
    // 1 byte - "average_eye_blink_rate": parseInt(averageBlinkRate, 10),
    // 2 bytes - "total_steps": parseInt(totalSteps, 10),
    // 1 byte - "average_data_quality": parseInt(averageDataQuality, 10)
    // }
    // 16 bytes total
    let tmpObject = dictionary;
    let integer1 = parseInt(tmpObject.timestamp_start, 10);
    let integer2 = parseInt(tmpObject.timestamp_end, 10);

    let integer3_12 = parseInt(tmpObject.average_flow_activity, 10);
    let bytes3_12 = shortToByteArray(integer3_12);
    let integer3_3 = parseInt(tmpObject.average_heartrate, 10);
    let integer3_4 = parseInt(tmpObject.average_strain_intensity, 10);
    var integer3_byteArray = [bytes3_12[0], bytes3_12[1], integer3_3, integer3_4];
    var integer3 = byteArrayToInt(integer3_byteArray);

    let integer4_1 = parseInt(tmpObject.average_eye_blink_rate, 10);
    let integer4_23 = parseInt(tmpObject.total_steps, 10);
    let bytes4_23 = shortToByteArray(integer4_23);

    let integer4_4 = parseInt(tmpObject.average_data_quality, 10);
    var integer4_byteArray = [integer4_1, bytes4_23[0], bytes4_23[1], integer4_4];
    var integer4 = byteArrayToInt(integer4_byteArray);

    let intArray = [integer1, integer2, integer3, integer4];
    // console.log(intArray);
    return intArray;
}

export function IntArrayToAverageDictionary(intArray, cb) {
    // let tmpValues = {
    // 4 bytes - "timestamp_start": query_start_time, 
    // 4 bytes - "timestamp_end": query_end_time,
    // 2 byte - "average_flow_activity": parseInt(averageFlowActivity, 10),
    // 1 byte - "average_heartrate": parseInt(averageHeartRate, 10),
    // 1 byte - "average_strain_intensity": parseInt(averageStrainIntensity, 10),
    // 1 byte - "average_eye_blink_rate": parseInt(averageBlinkRate, 10),
    // 2 bytes - "total_steps": parseInt(totalSteps, 10),
    // 1 byte - "average_data_quality": parseInt(averageDataQuality, 10)
    // }
    // 16 bytes total
    let timestamp_start = intArray[0];
    // let timestamp_end: any = intArray[1];

    var int3ByteArray = intToByteArray(intArray[2]);

    var flowActivityByteArray = [int3ByteArray[0],int3ByteArray[1]];
    let average_flow_activity = byteArrayToInt(flowActivityByteArray);
    let average_heart_rate = parseInt(int3ByteArray[2], 10);
    let average_strain_intensity = parseInt(int3ByteArray[3], 10);

    var int4ByteArray = intToByteArray(intArray[3]);
    let average_eye_blink_rate =  parseInt(int4ByteArray[0], 10);
    var stepsByteArray = [int4ByteArray[1],int4ByteArray[2]];
    let total_steps = byteArrayToInt(stepsByteArray);
    let average_data_quality = parseInt(int4ByteArray[3], 10);

    let tmpValues = {
        "timestamp_start": timestamp_start, 
        "timestamp_end": timestamp_start,
        "average_flow_activity": parseInt(average_flow_activity, 10),
        "average_heartrate": parseInt(average_heart_rate, 10),
        "average_strain_intensity": parseInt(average_strain_intensity, 10),
        "average_eye_blink_rate": parseInt(average_eye_blink_rate, 10),
        "total_steps": parseInt(total_steps, 10),
        "average_data_quality": parseInt(average_data_quality, 10)
    }
    // console.log(tmpValues);
    return tmpValues;
}

function shortToByteArray(short) {
    // we want to represent the input as a 8-bytes array
    var byteArray = [0, 0];

    for ( var index = 0; index < byteArray.length; index ++ ) {
        var byte = short & 0xff;
        byteArray [ index ] = byte;
        short = (short - byte) / 256 ;
    }
    return byteArray;
}

function intToByteArray(integer) {
    // we want to represent the input as a 8-bytes array
    var byteArray = [0, 0, 0, 0];

    for ( var index = 0; index < byteArray.length; index ++ ) {
        var byte = integer & 0xff;
        byteArray [ index ] = byte;
        integer = (integer - byte) / 256 ;
    }
    return byteArray;
}

function byteArrayToInt(byteArray) {
    var value = 0;
    for (var i = byteArray.length - 1; i >= 0; i--) {
        value = (value * 256) + byteArray[i];
    }
    return value;
}

export default {
    DictionaryToIntArray: DictionaryToIntArray,
    IntArrayToDictionary: IntArrayToDictionary,
    AverageDictionaryToIntArray: AverageDictionaryToIntArray,
    IntArrayToAverageDictionary: IntArrayToAverageDictionary
}