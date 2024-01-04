import * as React from 'react';
import { useState, useEffect, useCallback } from "react";
import { mind_body } from "../../../../../declarations/mind_body"

import Modal from 'react-modal';
import Dropdown from 'react-dropdown';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Link from '@mui/material/Link';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { myData } from '../../../_mock/myData';
import AppUserChart from '../../../modules/app-user-chart';

import Iconify from '../../../components/iconify';
import Scrollbar from '../../../components/scrollbar';

import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';
import { DictionaryToIntArray, IntArrayToDictionary, AverageDictionaryToIntArray, IntArrayToAverageDictionary } from '../../../blueberry/BlueberryDictionaryCompression'

// ----------------------------------------------------------------------

export default function MyDataPage() {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [devicesDropdown, setDevicesDropdown] = useState('connect and upload');

  const [icpStoredData, setIcpStoredData] = useState([]);

  const [icpStoredSummaryData, setIcpStoredSummaryData] = useState([]);

  const [web3Id, setWeb3Id] = useState('demo');

  const [timeDataLabels, setTimeDataLabels] = useState([
                    '12/21/2023 8:45 AM',
                    '12/21/2023 8:46 AM',
                    '12/21/2023 8:47 AM',
                    '12/21/2023 8:48 AM',
                    '12/21/2023 8:49 AM',
                    '12/21/2023 8:50 AM',
                    '12/21/2023 8:51 AM',
                    '12/21/2023 8:52 AM',
                    '12/21/2023 8:53 AM',
                    '12/21/2023 8:54 AM',
                    '12/21/2023 8:55 AM',]);

  const [heartRateData, setHeartRateData] = useState([54, 55, 57, 67, 72, 63, 60, 65, 56, 60, 70]);

  const [flowActivityData, setFlowActivityData] = useState([30, 25, 30, 32, 34, 39, 48, 61, 55, 47, 40]);

  const [rowDecryptData, setRowDecryptData] = useState({});

  //
  const [user_state_1, setUser_state_1] = useState("active");
  const [user_state_2, setUser_state_2] = useState("dynamic");
  const [user_state_3, setUser_state_3] = useState("increasing");
  const [user_state_4, setUser_state_4] = useState("variable");
  const [user_state_5, setUser_state_5] = useState("resting");
  const [user_state_6, setUser_state_6] = useState("intense");

  const [passcodeKeyLocal, setPasscodeKeyLocal] = useState("1");
  const [selectedRowIndex, setSelectedRowIndex] = useState("0");

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = icpStoredSummaryData.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const initialLoadICP = async() => {
    readICP();
  }

  const handleClick = (event, id) => {
    // console.log(id);
    // console.log(icpStoredSummaryData);
    const filteredArray = icpStoredSummaryData.flatMap(({ id }) => id);
    var tmpIndex = filteredArray.indexOf(id);
    setSelectedRowIndex(tmpIndex.toString());
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    //get data for row 
    // console.log(selectedIndex);
    if (tmpIndex != -1){
      let tmpVectorData = icpStoredData[tmpIndex];
      readICPRow(tmpVectorData);
    }

    setSelected(newSelected);
  };

  const readICPRow = async (tmpVectorData) => {

    var tmpDecryptValues = decryptData(tmpVectorData);
    setRowDecryptData(tmpDecryptValues);

    // console.log(tmpDecryptValues);
    const heartRateArray = tmpDecryptValues.flatMap(({ heartrate }) => heartrate);
    const flowActivityArray = tmpDecryptValues.flatMap(({ flow_activity }) => flow_activity);
    const timeStampArray = tmpDecryptValues.flatMap(({ timestamp }) => timestamp);

    setTimeDataLabels([]);
    setHeartRateData([]);
    setFlowActivityData([]);

    var tmpTimeDataLabels = [];
    var tmpHeartRateData = [];
    var tmpFlowActivityData = [];

    // data.reverse();
    //console.log(data)
    if (timeStampArray.length > 1) {
      for (let i = 0; i < timeStampArray.length - 1; i++) {

        //time conversion for chart
        var tmpDateTimeUTC = new Date(timeStampArray[i]*1000);
        var tmpDateTime = convertUTCDateToLocalDate(tmpDateTimeUTC);
        var stringTime="";
        if (tmpDateTime.getHours() >= 12){
          if (tmpDateTime.getMinutes() < 10){
            stringTime += (tmpDateTime.getMonth()+1)+'/'+tmpDateTime.getDate()+'/'+tmpDateTime.getFullYear()+ 
             ' '+ (tmpDateTime.getHours()-12) +':0'+tmpDateTime.getMinutes()+' PM';
          } else {
            stringTime += (tmpDateTime.getMonth()+1)+'/'+tmpDateTime.getDate()+'/'+tmpDateTime.getFullYear()+ 
             ' '+ (tmpDateTime.getHours()-12) +':'+tmpDateTime.getMinutes()+' PM';
          }
        } else {
          if (tmpDateTime.getMinutes() < 10){
            stringTime += (tmpDateTime.getMonth()+1)+'/'+tmpDateTime.getDate()+'/'+tmpDateTime.getFullYear()+ 
             ' '+ (tmpDateTime.getHours()) +':0'+tmpDateTime.getMinutes()+' AM';
          } else {
            stringTime += (tmpDateTime.getMonth()+1)+'/'+tmpDateTime.getDate()+'/'+tmpDateTime.getFullYear()+ 
             ' '+ (tmpDateTime.getHours()) +':'+tmpDateTime.getMinutes()+' AM';
          }
        }
        tmpTimeDataLabels.push(stringTime);
        tmpHeartRateData.push(parseInt(heartRateArray[i], 10));
        tmpFlowActivityData.push(parseInt(flowActivityArray[i], 10));
      }
    }

    //sets chart to data on upload completion
    setTimeDataLabels(tmpTimeDataLabels);
    setHeartRateData(tmpHeartRateData);
    setFlowActivityData(tmpFlowActivityData);

  }

  const exportRowData = async() => {
    //export data
    if (rowDecryptData.length > 0){
      export_metric_csv(rowDecryptData);
    }
  };

  const deleteAllData = async() => {
    //delete data
    var userStringId = web3Id;
    // console.log(userStringId);
    if (userStringId !== "demo" || !(userStringId === undefined)){
      // console.log("delete data " + userStringId);
      await mind_body.removeAddress(userStringId);
      return readICP();
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: icpStoredSummaryData,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const updateLocalId = () => {
    var tmpIcpId = window.$icpId;
    var tmpWeb3AddressId = window.$web3AddressId;
    // console.log(tmpIcpId);
    if (tmpIcpId === undefined && tmpWeb3AddressId === undefined){
      //display error popup
      setWeb3Id("demo");
      console.log("web3 id not set!");
    } else if (!tmpIcpId.includes("demo")){
      setWeb3Id(tmpIcpId);
    } else if (!tmpWeb3AddressId.includes("demo")){
      setWeb3Id(tmpWeb3AddressId);
    }
  }

  const loadICPData = () => {
    var tmpId = web3Id;
    if (tmpId === undefined ){
      //display error popup
      setWeb3Id("demo");
      console.log("web3 id not set!");
    } else if (!tmpId.includes("demo")){
      console.log(tmpId);
      initialLoadICP();
    } 
    loadLocalState();
    loadLocalPasswordKey();
  }

  useEffect(() =>{
    updateLocalId();
    loadICPData();
  },[]);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const uploadBlueberryAction = () => {
    setIsOpen(true);
  };

  const updateBlueberryStates = () => {

    var tmpS1_ = document.getElementById("userState1")
    var tmpS1 = tmpS1_.value;

    if (tmpS1 != ""){
      localStorage.setItem('userState1', tmpS1);
      setUser_state_1(tmpS1);
    }

    var tmpS2_ = document.getElementById("userState2")
    var tmpS2 = tmpS2_.value;

    if (tmpS2 != ""){
      localStorage.setItem('userState2', tmpS2);
      setUser_state_2(tmpS2);
    }

    var tmpS3_ = document.getElementById("userState3")
    var tmpS3 = tmpS3_.value;

    if (tmpS3 != ""){
      localStorage.setItem('userState3', tmpS3);
      setUser_state_3(tmpS3);
    }

    var tmpS4_ = document.getElementById("userState4")
    var tmpS4 = tmpS4_.value;
    if (tmpS4 != ""){
      localStorage.setItem('userState4', tmpS4);
      setUser_state_4(tmpS4);
    }

    var tmpS5_ = document.getElementById("userState5")
    var tmpS5 = tmpS5_.value;

    if (tmpS5 != ""){
      localStorage.setItem('userState5', tmpS5);
      setUser_state_5(tmpS5);
    }

    var tmpS6_ = document.getElementById("userState6")
    var tmpS6 = tmpS6_.value;
    if (tmpS6 != ""){
      localStorage.setItem('userState6', tmpS6);
      setUser_state_6(tmpS6);
    }
    console.log(tmpS6);
  };

  function loadLocalState() {

    if(localStorage.getItem('userState1') === null){
      setUser_state_1("active");
    } else {
      var tmp_user_state_1 = localStorage.getItem('userState1');
      setUser_state_1(tmp_user_state_1);
    }
    if(localStorage.getItem('userState2') === null){
      setUser_state_2("dynamic");
    } else {
      var tmp_user_state_2 = localStorage.getItem('userState2');
      setUser_state_2(tmp_user_state_2);
    }
    if(localStorage.getItem('userState3') === null){
      setUser_state_3("increasing");
    } else {
      var tmp_user_state_3 = localStorage.getItem('userState3');
      setUser_state_3(tmp_user_state_3);
    }
    if(localStorage.getItem('userState4') === null){
      setUser_state_4("variable");
    } else {
      var tmp_user_state_4 = localStorage.getItem('userState4');
      setUser_state_4(tmp_user_state_4);
    }
    if(localStorage.getItem('userState5') === null){
      setUser_state_5("resting");
    } else {
      var tmp_user_state_5 = localStorage.getItem('userState5');
      setUser_state_5(tmp_user_state_5);
    }
    if(localStorage.getItem('userState6') === null){
      setUser_state_6("intense");
    } else {
      var tmp_user_state_6 = localStorage.getItem('userState6');
      setUser_state_6(tmp_user_state_6);
    }
  };

  function loadLocalPasswordKey() {

    if(localStorage.getItem('passcodeKey') === null){
      setPasscodeKeyLocal(1);
    } else {
      var tmp_passcode_key = localStorage.getItem('passcodeKey');
      setPasscodeKeyLocal(tmp_passcode_key);
    }
  }

  const updatePasswordKey = () => {

      var tmpKey_ = document.getElementById("passcodeKey")
      var tmpKey = tmpKey_.value;

      if (tmpKey !== 0){
        localStorage.setItem('passcodeKey', tmpKey.toString());
        setPasscodeKeyLocal(tmpKey.toString());
        // console.log(tmpKey);
      }
  };

  const handleSubmitBlueberryLogin = useCallback(async (e) => {
    e.preventDefault();

    const [email, password] = e.target.elements;
    sendLoginInfo(email.value, password.value);

  }, []);

  function convertUTCDateToLocalDate(date) {
      var newDate = new Date(date.getTime());

      var offset = date.getTimezoneOffset() / 60;
      var hours = date.getHours();

      newDate.setHours(hours - offset);

      return newDate;   
  };

  function joinArray(array, separator) {
    return array.reduce((p, c, idx) => {
        if (idx === 0)
            return [c];
        else
            return [...p, separator, c];
    }, []);
  }

  const export_metric_csv = (dictionaryArrayData) => {

    var arrayMetricHeader = ["timestamp","category","flow_activity","heartrate","strain_intensity","eye_blink_rate","steps","data_quality"];
    var arrayMetricData = [];
    let tLen = dictionaryArrayData.length;
    for (let i = 0; i < tLen; i++) {
      arrayMetricData.push([
        dictionaryArrayData[i].timestamp,
        dictionaryArrayData[i].category,
        dictionaryArrayData[i].flow_activity,
        dictionaryArrayData[i].heartrate,
        dictionaryArrayData[i].strain_intensity,
        dictionaryArrayData[i].eye_blink_rate,
        dictionaryArrayData[i].steps,
        dictionaryArrayData[i].data_quality]);
    }

    let header = arrayMetricHeader.join(",") + '\n';
    let csv = header;
    for (let j = 0; j < arrayMetricData.length; j++) {
      var tmpValArray = arrayMetricData[j];
      // console.log(tmpValArray);
      var tmpLine = "";
      for (let k = 0; k < tmpValArray.length; k++) {
          var tmpVal = tmpValArray[k].toString();
          tmpLine += tmpVal+","
      }
      csv += tmpLine + '\n';
    }

    let csvData = new Blob([csv], { type: 'text/csv' });  
    let csvUrl = URL.createObjectURL(csvData);

    const nowDate = new Date(dictionaryArrayData[0].timestamp*1000);
    var csvTime = nowDate.toISOString(); // "2020-06-13T18:30:00.000Z"
    let hiddenElement = document.createElement('a');
    hiddenElement.href = csvUrl;
    hiddenElement.target = '_blank';
    hiddenElement.download = csvTime + '_metric_data.csv';
    hiddenElement.click();
    // console.log("metric - csv saved");
  };

  function processBlueberryResponse(data, query_start_time, query_end_time){

      var dictionaryHistoryArray = []
      var recordCount = 0.0
      var sumHeartRate = 0.0
      var sumFlowActivity = 0.0
      var sumBlinkRate = 0.0
      var sumStrainIntensity = 0.0
      var sumSteps = 0.0
      var sumDataQuality = 0.0
      var returnArray = []

      var tmpTimeDataLabels = [];
      var tmpHeartRateData = [];
      var tmpFlowActivityData = [];

      setTimeDataLabels([]);
      setHeartRateData([]);
      setFlowActivityData([]);

      // data.reverse();
      //console.log(data)
      if (data.length > 1) {
        for (let i = 0; i < data.length - 1; i++) {
          var timestamp = data[i + 1].document.fields.timestamp.doubleValue;
          // console.log(timestamp);
          var user_current_state = data[i + 1].document.fields.category.stringValue
          var user_flow_activity = data[i + 1].document.fields.flow_activity.doubleValue
          var user_heart_rate = data[i + 1].document.fields.heartrate.doubleValue
          var user_eye_blink_rate = data[i + 1].document.fields.eye_blink_rate.doubleValue
          if (user_eye_blink_rate > 255.0) {
            user_eye_blink_rate = 255.0
          }
          var user_strain_intensity = 0.0
          if (data[i + 1].document.fields.strain_intensity != null) {
            user_strain_intensity = data[i + 1].document.fields.strain_intensity.doubleValue
          }
          var user_steps = 0.0
          if (data[i + 1].document.fields.steps != null) {
            user_steps = data[i + 1].document.fields.steps.doubleValue
          }
          var user_data_quality = 255.0
          if (data[i + 1].document.fields.data_quality != null) {
            user_data_quality = data[i + 1].document.fields.data_quality.doubleValue
          }

          let tmpValues = {
            timestamp: timestamp,
            category: user_current_state,
            flow_activity: parseInt(user_flow_activity, 10),
            heartrate: parseInt(user_heart_rate, 10),
            strain_intensity: parseInt(user_strain_intensity, 10),
            eye_blink_rate: parseInt(user_eye_blink_rate, 10),
            steps: parseInt(user_steps, 10),
            data_quality: parseInt(user_data_quality, 10)
          }

          //time conversion for chart
          var tmpDateTimeUTC = new Date(timestamp*1000);
          var tmpDateTime = convertUTCDateToLocalDate(tmpDateTimeUTC);
          var stringTime="";
          if (tmpDateTime.getHours() >= 12){
            if (tmpDateTime.getMinutes() < 10){
              stringTime += (tmpDateTime.getMonth()+1)+'/'+tmpDateTime.getDate()+'/'+tmpDateTime.getFullYear()+ 
               ' '+ (tmpDateTime.getHours()-12) +':0'+tmpDateTime.getMinutes()+' PM';
            } else {
              stringTime += (tmpDateTime.getMonth()+1)+'/'+tmpDateTime.getDate()+'/'+tmpDateTime.getFullYear()+ 
               ' '+ (tmpDateTime.getHours()-12) +':'+tmpDateTime.getMinutes()+' PM';
            }
          } else {
            if (tmpDateTime.getMinutes() < 10){
              stringTime += (tmpDateTime.getMonth()+1)+'/'+tmpDateTime.getDate()+'/'+tmpDateTime.getFullYear()+ 
               ' '+ (tmpDateTime.getHours()) +':0'+tmpDateTime.getMinutes()+' AM';
            } else {
              stringTime += (tmpDateTime.getMonth()+1)+'/'+tmpDateTime.getDate()+'/'+tmpDateTime.getFullYear()+ 
               ' '+ (tmpDateTime.getHours()) +':'+tmpDateTime.getMinutes()+' AM';
            }
          }
          tmpTimeDataLabels.push(stringTime);
          tmpHeartRateData.push(parseInt(user_heart_rate, 10));
          tmpFlowActivityData.push(parseInt(user_flow_activity, 10));

          if (timestamp >= query_start_time && timestamp <= query_end_time) {
            recordCount += 1.0
            sumHeartRate += user_heart_rate
            sumFlowActivity += user_flow_activity
            sumBlinkRate += user_eye_blink_rate
            sumStrainIntensity += user_strain_intensity
            sumSteps += user_steps
            sumDataQuality += user_data_quality
            dictionaryHistoryArray.push(tmpValues)
          }
        }
      }

      //sets chart to data on upload completion
      setTimeDataLabels(tmpTimeDataLabels);
      setHeartRateData(tmpHeartRateData);
      setFlowActivityData(tmpFlowActivityData);

      //calculate query averages
      if (recordCount > 0.0) {
        var averageHeartRate = sumHeartRate / recordCount
        var averageFlowActivity = sumFlowActivity / recordCount
        var averageStrainIntensity = sumStrainIntensity / recordCount
        var averageBlinkRate = sumBlinkRate / recordCount
        var totalSteps = sumSteps
        var averageDataQuality = sumDataQuality / recordCount

        let tmpAverageValues = [
          {
            timestamp_start: query_start_time,
            timestamp_end: query_end_time,
            average_flow_activity: parseInt(averageFlowActivity, 10),
            average_heartrate: parseInt(averageHeartRate, 10),
            average_strain_intensity: parseInt(averageStrainIntensity, 10),
            average_eye_blink_rate: parseInt(averageBlinkRate, 10),
            total_steps: parseInt(totalSteps, 10),
            average_data_quality: parseInt(averageDataQuality, 10)
          }
        ]

        //console.log(tmpAverageValues);
        returnArray.push(dictionaryHistoryArray)
        returnArray.push(tmpAverageValues)
        // console.log(dictionaryHistoryArray);
        // console.log(data);
      }       
      return returnArray;
  };

  async function processBlueberryData(dataRaw, userId) {
    let encryptedVector = await encryptData(dataRaw);
    return processEncryptedVector(encryptedVector);
  };

  async function processEncryptedVector(encryptedVector){
    //check if icpId is not undefined
    var tmpWeb3Id = web3Id;
    if (tmpWeb3Id === undefined){
      //display error popup
      console.log("web3 id not set!");
    } else if (tmpWeb3Id !== "demo"){
      writeICP(tmpWeb3Id, encryptedVector);
    } 
  }

  async function writeICP(userStringId, vectorArray){
    // console.log(vectorArray);
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    const timeConcatenateString = '' + year + month;
    const timeConcatenteInt = parseInt(timeConcatenateString, 10);

    await mind_body.pushToArray(userStringId, vectorArray, timeConcatenteInt);

    return readICP();
  };

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  const readICP = async() => {
    var userStringId = web3Id;
    if (userStringId !== undefined){
      // console.log(userStringId);
      var returnValueArray = await mind_body.getMapping(userStringId);
      // console.log(returnValueArray);
      return readICPReturn(returnValueArray, userStringId);
    }
  };

  const readICPReturn = async(returnValueArray, userStringId) => {
    // console.log(returnValueArray);
    if (returnValueArray.length > 0){
      var tmpIcpNetworkData = [];
      var tmpArray = returnValueArray[0];
      setIcpStoredData(tmpArray);
      for (var i = 0; i < tmpArray.length; i++) { 
        var tmpValueArray = tmpArray[i];
        // console.log(tmpValueArray);
        var tmpDecryptValues = decryptData(tmpValueArray);
        var tmpLastValue = tmpDecryptValues[0];
        var tmpSize = (tmpValueArray.length * 4.0)/1000.0;
        var tmpDate = new Date(tmpLastValue.timestamp*1000);
        var tmpUId = uuidv4();
        var tmpRecordInfo = {
          "id": userStringId+"-"+tmpUId, 
          "uniqueId": tmpUId, 
          "dataType": "blueberry",
          "date": tmpDate,
          "dataSize": tmpSize,
          "isVerified": "true"
        };
        tmpIcpNetworkData.push(tmpRecordInfo);
        // console.log(tmpIcpNetworkData)
      }
      loadICPReturnedData(icpStoredData, tmpIcpNetworkData);
    } else {
      setIcpStoredData([]);
      var tmpIcpNetworkData = [];
      loadICPReturnedData(icpStoredData, tmpIcpNetworkData);
    }
  }

  const loadICPReturnedData = async(icpStoredData, icpNetworkData) => {
    //load first record in chart
    if (icpStoredData.length > 0){
      let tmpVectorData = icpStoredData[0];
      // console.log(tmpVectorData);
      readICPRow(tmpVectorData);
    }
    setIcpStoredSummaryData(icpNetworkData);
  }

  async function encryptData(dataRaw){

    let userCategoryEnum = {
      "state1": user_state_1, 
      "state2": user_state_2, 
      "state3": user_state_3,
      "state4": user_state_4,
      "state5": user_state_5,
      "state6": user_state_6
    };

    const compressedVectors = [];
    var passcodeKey = 1;
    if(localStorage.getItem('passcodeKey') === null){
      passcodeKey = 1;
    } else {
      var tmpPasscodeKeyString = localStorage.getItem('passcodeKey');
      passcodeKey = parseInt(tmpPasscodeKeyString, 10);
    }

    for (var i = 0; i < dataRaw.length; i++) {
        let tmpDictionary = dataRaw[i];
        let tmpIntArray = DictionaryToIntArray(tmpDictionary, userCategoryEnum);
        for (let i = 0; i < tmpIntArray.length; i++) {
          let tmpEncrypt = tmpIntArray[i]*passcodeKey;
          compressedVectors.push(tmpEncrypt);
        }
    }

    return compressedVectors
  };

  function decryptData(vector_iv){
    let userCategoryEnum = {
      "state1": user_state_1, 
      "state2": user_state_2, 
      "state3": user_state_3,
      "state4": user_state_4,
      "state5": user_state_5,
      "state6": user_state_6
    }

    const data = [];
    var passcodeKey = 1;
    if(localStorage.getItem('passcodeKey') === null){
      passcodeKey = 1;
    } else {
      var tmpPasscodeKeyString = localStorage.getItem('passcodeKey');
      passcodeKey = parseInt(tmpPasscodeKeyString, 10);
    }

    // console.log(vector_iv);
    for (var i = 0; i < vector_iv.length-3; i+=3) {
        var tmpVector = vector_iv.slice(i, i+3);
        var decryptedVector = [];
        for (let i = 0; i < tmpVector.length; i++) {
          const largeInt = BigInt(tmpVector[i]);
          const convertedInt = parseInt(largeInt);
          let tmpConversion = convertedInt/passcodeKey;
          let tmpInt = parseInt(tmpConversion, 10);
          decryptedVector.push(tmpInt);
        }
        let tmpDictionary = IntArrayToDictionary(decryptedVector, userCategoryEnum);
        data.push(tmpDictionary);
    }
    // console.log(data);
    return data;
  };

  async function sendLoginInfo(email, password) {
    
    const responseLogin = await mind_body.send_http_blueberry_proxy_login(email,password);
    // console.log(responseLogin);
    var responseObject = JSON.parse(responseLogin);
    var token = responseObject["idToken"];
    var localId = responseObject["localId"];
    token = token.replace(' ','');
    localId = localId.replace(' ','');

    var startTimeQuery = new Date(Date.now() - 1000 * 60 * 60); //1 hour
    // var startTimeQuery = new Date(Date.now() - 1000 * 60 * 60 * 24); //24 hours
    var endTimeQuery = new Date(Date.now());
    var millisStart = startTimeQuery.getTime()/1000.0;
    var millisEnd = endTimeQuery.getTime()/1000.0;
    var millisStartString = parseInt(millisStart, 10).toString();
    var millisEndString = parseInt(millisEnd, 10).toString();
    // console.log(jsonBody);
    var responseData = await mind_body.send_http_blueberry_proxy_get_raw_data(token, localId, millisStartString, millisEndString);
    // console.log(responseData);
    const responseDataObject = JSON.parse(responseData);
    // console.log(responseDataObject);
    const outputArray = processBlueberryResponse(responseDataObject, millisStart, millisEnd);
    // console.log(outputArray);
    await processBlueberryData(outputArray[0], localId);

    if (token != ""){
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    
    return;
  }

  return (
    <Container>
        <Card>
          <Grid container spacing={3}>
            <Grid xs={12} md={12} lg={12}>
              <AppUserChart
                title=""
                subheader=""
                chart={{
                  labels: timeDataLabels,
                  series: [
                    {
                      name: 'heart rate (bpm)',
                      type: 'area',
                      fill: 'gradient',
                      color: 'red',
                      data: heartRateData,
                    },
                    {
                      name: 'flow activity (%)',
                      type: 'area',
                      fill: 'gradient',
                      color: 'blue',
                      data: flowActivityData,
                    },
                  ],
                }}
              />
          </Grid>
        </Grid>
      </Card>
      <Link variant="subtitle2" href="" sx={{ ml: 0.5 }}>
              
      </Link>
      <Stack direction="row" alignItems="center"  mb={5}>
        <Button variant="contained" color="secondary" onClick={uploadBlueberryAction}>
          upload blueberry data
        </Button>
        <Link variant="subtitle2" href="" sx={{ ml: 0.5 }}>
              
        </Link>
        <Button variant="contained" color="inherit" startIcon={<Iconify icon=""/>} onClick={readICP}>
          get records
        </Button>
        <Link variant="subtitle2" href="" sx={{ ml: 0.5 }}>
              
        </Link>
        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill"/>} href="https://form.typeform.com/to/WsBKRzkG">
          request device 
        </Button>
      </Stack>
      <Stack>
        <div style={{width: "100%", textAlign: "left", margin: "0.5rem auto"}}>
          <div>
            <span style={{fontSize: "1.0em"}}>encryption key:</span>
            <Link variant="subtitle2" href="" sx={{ ml: 0.5 }}></Link>
            <input type="number" placeholder={passcodeKeyLocal} id="passcodeKey"></input>
            <Link variant="subtitle2" href="" sx={{ ml: 0.5 }}></Link>
            <Button variant="contained" color="primary" style={{width: "150px"}} onClick={updatePasswordKey}>update key</Button>
          </div>
        </div>
      </Stack>
      <Link variant="subtitle2" href="" sx={{ ml: 0.5 }}>
              
      </Link>
      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
          exportData={exportRowData}
          deleteData={deleteAllData}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={icpStoredSummaryData.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'uniqueId', label: 'uniqueId' },
                  { id: 'datatype', label: 'data type' },
                  { id: 'date', label: 'date' },
                  { id: 'dataSize', label: 'data size (kb)' },
                  { id: 'isVerified', label: 'Verified', align: 'center' },
                  { id: '', label: '' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <UserTableRow
                      key={row.id}
                      uniqueId={row.uniqueId}
                      dataType={row.dataType}
                      date={row.date}
                      dataSize={row.dataSize}
                      isVerified={row.isVerified}
                      selected={selected.indexOf(row.id) !== -1}
                      handleClick={(event) => handleClick(event, row.id)}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, icpStoredSummaryData.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={icpStoredSummaryData.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
      <Link variant="subtitle2" href="" sx={{ ml: 0.5 }}>
              
      </Link>
      <Card>
        <div style={{width: '100%', textAlign: 'center', margin: "0.5rem auto"}}>
          <span style={{fontSize: '0.5em'}}>blueberry category labels:</span>
          <div><span style={{fontSize: '0.5em'}}>manually enter from what you have set in your mobile app, required for proper encoding</span></div>
          <div className="row">
            <div><span style={{color: '#FFE933'}}>⬤</span><input type="text" placeholder={user_state_1} id="userState1"></input></div>
            <div><span style={{color: '#7FE683'}}>⬤</span><input type="text" placeholder={user_state_2} id="userState2"></input></div>
            <div><span style={{color: '#33F9FF'}}>⬤</span><input type="text" placeholder={user_state_3} id="userState3"></input></div>
          </div>
          <div className="row">
            <div><span style={{color: '#CA9EFF'}}>⬤</span><input type="text" placeholder={user_state_4} id="userState4"></input></div>
            <div><span style={{color: '#53BEF7'}}>⬤</span><input type="text" placeholder={user_state_5} id="userState5"></input></div>
            <div><span style={{color: '#ff9900'}}>⬤</span><input type="text" placeholder={user_state_6} id="userState6"></input></div>
          </div>
          <Button variant="contained" color="primary" style={{width: "150px"}} onClick={updateBlueberryStates}>update</Button>
        </div>
      </Card>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <Card>
          <div className="card">
            <img style={{margin: 'auto'}} width={50} src={'https://blueberryx.com/cdn/shop/files/logo_180x.png?v=1613792305'}/>
            <form onSubmit={handleSubmitBlueberryLogin} className="card-form">
              <div className="input">
                <input name="email" type="email" className="input-field" required/>
                <label className="input-label">email</label>
              </div>
              <div className="input">
                <input name="password" type="password" className="input-field" required/>
                <label className="input-label">password</label>
              </div>
              <div className="action">
                <button className="action-button" type="submit">login and upload</button>
              </div>
            </form>
          </div>
        </Card>
      </Modal>
    </Container>
  );
}
