import React, { useState } from 'react'
import { useCallback, useEffect } from "react"
import { Card } from "react-bootstrap"
import { sequence } from '0xsequence'
import { blueberryLoginAPI, getUserDataRaw } from "./Blueberry";
import { DictionaryToIntArray, IntArrayToDictionary, AverageDictionaryToIntArray } from "./BlueberryDictionaryCompression";
import Modal from 'react-modal';
import Chart from 'chart.js/auto';
import './App.css'

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { Actor, HttpAgent } from '@dfinity/agent';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

(window as any).global = window;

const ENDPOINT = 'http://localhost:1234/'
const table: any = {}

const idlFactory = ({ IDL } : any) => {
  const Vector = IDL.Vec(IDL.Int);
  const NestedArray = IDL.Vec(Vector);
  // const AddressMap = IDL.Vec(IDL.Tuple(IDL.Text, NestedArray));
  const AllowedIdentities = IDL.Vec(IDL.Principal);

  return IDL.Service({
    'pushToArray': IDL.Func([IDL.Text, IDL.Int], [], []),
    'getMapping': IDL.Func([IDL.Text], [IDL.Opt(NestedArray)], ['query']),
    'updateAllowedIdentities': IDL.Func([AllowedIdentities], [], []),
    'getAllowedIdentities': IDL.Func([], [AllowedIdentities], ['query']),
    'getCanisterBalance': IDL.Func([], [], ['query']),
  });
};

const canisterId = "bkyz2-fmaaa-aaaaa-qaaaq-cai";

const agent = new HttpAgent({ 
  host: "https://ic0.app"
});

const canister = Actor.createActor(idlFactory, { agent, canisterId: canisterId });

const FileUploader = () => {
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        // Convert ArrayBuffer to base64 string
        const base64String = new Uint8Array(e.target!.result as any);
        // Store in localStorage
        console.log(base64String)
        localStorage.setItem('salt', JSON.stringify(base64String));
        // alert('File uploaded and stored successfully!');
      };
      // Read the file as an ArrayBuffer
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div style={{
      display: 'grid',
      placeItems: 'center',
    }}>
      <input type="file" style={{ marginLeft: '170px', marginTop: '20px' }}  onChange={handleFileChange} />
    </div>
  );
};

const FileDownloader = () => {
  const handleDownload = () => {
    // Retrieve the JSON string from localStorage
    const jsonString = localStorage.getItem('salt');
    
    if (jsonString) {
      // Parse the JSON string to an object
      const byteObject = JSON.parse(jsonString);

      // Convert the object to Uint8Array
      const byteArray = new Uint8Array(Object.keys(byteObject).map(key => byteObject[key]));

      // Create a blob from the Uint8Array
      const blob = new Blob([byteArray], { type: 'application/octet-stream' });

      // Create a URL for the blob
      const blobUrl = URL.createObjectURL(blob);

      // Create an anchor element and set the download attribute with a filename
      const anchor = document.createElement('a');
      anchor.href = blobUrl;
      anchor.download = 'downloadedFile.bin'; // Set a filename for the download

      // Append the anchor to the body, initiate the download, then remove the anchor
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);

      // Revoke the blob URL after the download
      URL.revokeObjectURL(blobUrl);
    } else {
      console.error('No file found in localStorage');
    }
  };

  return (
    <div>
      <button onClick={handleDownload}>Download 🜔 Salt Encryption File</button>
    </div>
  );
};

// var arrayMetricHeader = ["timestamp","category","flow_activity","heartrate","strain_intensity","eye_blink_rate","steps","data_quality"];
var arrayMetricData: any = [];

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const MyProfile = (props: any) => {
  const options = [
    'select device','blueberry','+ request a device'
  ];
  const _onSelect = (el: any) => {
    if(el.value == '+ request a device') window.open('https://form.typeform.com/to/WsBKRzkG')
    else if(el.value != 'select device') setIsOpen(true);
    props.setDevicesDropdown(el.value)
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmitBlueberryLogin = useCallback(async (e: any) => {
    e.preventDefault();

    const [email, password] = e.target.elements;
    sendLoginInfo(email.value, password.value);

  }, []);

  async function sendLoginInfo(email: string, password: string) {
    
    await blueberryLoginAPI(email, password, async (loginResult: any) => {
      console.log(loginResult)
      if (loginResult[0] === "success"){
        setIsOpen(false);
        props.setIsLoggedIn(true)
        props.setView(2)
        props.fromDownload(props.address)
      } else {
        setIsOpen(true);
        props.setIsLoggedIn(false)
        //todo add error to login screen
      }
    })
    
    return;
  }

  return(
    <>
      <br/>
      <br/>
      <br/>
      <p style={{background: 'white', width: "420px",height: "50px", margin: 'auto', textAlign: 'center', padding: '15px', borderRadius: '10px'}}>address: {props.address.slice(0,10)+"..."+props.address.slice(-4)} &nbsp;&nbsp;&nbsp;&nbsp;{"since: "}{new Date(JSON.parse(localStorage.getItem('time')!)).toDateString().slice(4,new Date(JSON.parse(localStorage.getItem('time')!)).toDateString().length)}</p>
      <br/>
      <br/>
      <Dropdown options={options} onChange={_onSelect} value={props.devicesDropdown} placeholder="Select an option" />
      <br/>
      <br/>
      <p>for backup or all-or-nothing sharing</p>
      <div style={{background: '#dbdbdb', width: '420px', padding: '10px', borderRadius: '10px'}}>
        <p style={{color: 'white'}}>🜔 salt in localstorage <span style={{color: 'hotpink'}}>✓</span></p>
        <FileDownloader/>
        <br/>
        <span style={{fontSize: '12px', color: 'black'}}>upload salt?</span>
        <FileUploader/>
      </div>
      <br/>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Card>
              <Card.Body className="App-header">
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
                    <button className="action-button" type="submit">Login</button>
                  </div>
                </form>
                
              </div>
              </Card.Body>
          </Card>
      </Modal>
    </>
  )
}

const MyData = (props: any) => {
  const width = 80;
  const [highlight, setHighlight] = useState<any>(null)
  const columns: GridColDef[] = [
      { field: 'id',  type: 'number', headerName: 'ID', width: width-80,description: 'This column has a value getter and is not sortable.' },
    { field: 'timeType', headerName: 'Time Type', type: 'string', width: width },
    { field: 'uploadTime', headerName: 'Download Time', type: 'number', width: width+ 110 },
    // { field: 'tag', headerName: 'Tag', type: 'string', width: width },
    { field: 'storageAmount', headerName: 'Storage', type: 'number', width: width + 100},
    // { field: 'yearlyPrice', headerName: 'Yearly Price ($)', type: 'number', width: width },
    // { field: 'computedValue', headerName: 'Computed Value', type: 'number', width: width }
  ];

  var user_state_1 = "active";
  var user_state_2 = "dynamic";
  var user_state_3 = "increasing";
  var user_state_4 = "variable";
  var user_state_5 = "resting";
  var user_state_6 = "intense";
  
  // const rows = [
  //   { id: 1, timeType: 'Type A', uploadTime: 123, tag: 'Tag1', storageAmount: 456, yearlyPrice: 789, computedValue: 1000 },
  //   { id: 2, timeType: 'Type B', uploadTime: 456, tag: 'Tag2', storageAmount: 789, yearlyPrice: 123, computedValue: 1500 },
  //   { id: 3, timeType: 'Type C', uploadTime: 789, tag: 'Tag3', storageAmount: 123, yearlyPrice: 456, computedValue: 2000 },
  //   { id: 4, timeType: 'Type D', uploadTime: 321, tag: 'Tag4', storageAmount: 654, yearlyPrice: 987, computedValue: 2500 },
  //   { id: 5, timeType: 'Type E', uploadTime: 654, tag: 'Tag5', storageAmount: 987, yearlyPrice: 321, computedValue: 3000 },
  //   { id: 6, timeType: 'Type F', uploadTime: 987, tag: 'Tag6', storageAmount: 321, yearlyPrice: 654, computedValue: 3500 },
  //   { id: 7, timeType: 'Type G', uploadTime: 234, tag: 'Tag7', storageAmount: 567, yearlyPrice: 890, computedValue: 4000 },
  //   { id: 8, timeType: 'Type H', uploadTime: 567, tag: 'Tag8', storageAmount: 890, yearlyPrice: 234, computedValue: 4500 },
  //   { id: 9, timeType: 'Type I', uploadTime: 890, tag: 'Tag9', storageAmount: 234, yearlyPrice: 567, computedValue: 5000 },
  // ];

  //run on load
  const load_states = () => {
    if(localStorage.getItem('userState1') == null){
      user_state_1 = "active"
    } else {
      user_state_1 = localStorage.getItem('userState1')!;
    }
    if(localStorage.getItem('userState2') == null){
      user_state_2 = "dynamic"
    } else {
      user_state_2 = localStorage.getItem('userState2')!;
    }
    if(localStorage.getItem('userState3') == null){
      user_state_3 = "increasing"
    } else {
      user_state_3 = localStorage.getItem('userState3')!;
    }
    if(localStorage.getItem('userState4') == null){
      user_state_4 = "variable"
    } else {
      user_state_4 = localStorage.getItem('userState4')!;
    }
    if(localStorage.getItem('userState5') == null){
      user_state_5 = "resting"
    } else {
      user_state_5 = localStorage.getItem('userState5')!;
    }
    if(localStorage.getItem('userState6') == null){
      user_state_6 = "intense"
    } else {
      user_state_6 = localStorage.getItem('userState6')!;
    }
  }

  const handleRowClick = (params: any) => {
    load_states();
    console.log(params)
    // props.setHighlight(params)
    setHighlight(params.row)
    console.log(table[params.id])
    const data = table[params.id]
    var timestampData = [];
      var flowActivityData = [];
      var heartRateData = [];
      let options: any = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      };
      for (let i = 0; i < data.length; i++) {
        let tmpDictionary = data[i];
        let tmpTimestamp = tmpDictionary.timestamp*1000.0;
        let tmpFlowActivity = tmpDictionary.flow_activity;
        let tmpHeartRate = tmpDictionary.heartrate;
        let tmpHumanTime = new Intl.DateTimeFormat("en-US", options).format(new Date(tmpTimestamp)); 
        timestampData.push(tmpHumanTime);
        flowActivityData.push(tmpFlowActivity);
        heartRateData.push(tmpHeartRate);
        arrayMetricData.push([tmpTimestamp,tmpFlowActivity,tmpHeartRate]);
      }
      addChart(timestampData, heartRateData, flowActivityData);
  }


  const handleCheckboxChange = () => {
    props.setIsChecked(!props.isChecked);
  };

  return(
    <>
      <br/>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {/* <span className="tab">upload</span> */}
        <div className="toggle-button-cover">
          <div className="button-tog r" id="button-1">
            <input 
              type="checkbox" 
              className="checkbox" 
              checked={props.isChecked}
              onChange={handleCheckboxChange}
              />
            <div className="knobs"></div>
            <div className="layer"></div>
          </div>
        </div>
        {/* <span className="tab" style={{color: 'grey'}}>local</span> */}
      </div>
      <p style={{
        background: 'white', 
        width: "420px",
        height: "50px", 
        margin: 'auto', 
        textAlign: 'center', 
        padding: '15px', 
        borderRadius: '10px', 
        color: props.isChecked ? "grey" : '#00ABFF'
        }}> {props.rows.length == 0 ?"upload data to begin" : props.isChecked ? <>view</>: !highlight ? <><><span>id: {props.rows[0].id} &nbsp;&nbsp;&nbsp; type: {props.rows[0].timeType} &nbsp;&nbsp;&nbsp; average: {props.rows[0].computedValue} &nbsp;&nbsp;&nbsp;{props.rows[0].uploadTime.toDateString()}</span></></> : <><span>id: {highlight.id} &nbsp;&nbsp;&nbsp; type: {highlight.timeType} &nbsp;&nbsp;&nbsp; average: {highlight.computedValue} &nbsp;&nbsp;&nbsp;{highlight.uploadTime.toDateString()}</span></> }</p>
      <div className="card">
        <div id="loadedTimeline" className="align-center">
          <div id="chartDiv" >
          </div>
        </div>
      </div>
      
      <div className="row">
        {/* <button className="button a" type="button" onClick={() => props.upload_1hour()}>upload 1hr</button> */}
        {/* <button className="button a" type="button" onClick={() => props.upload_24hours()}>upload 24hr</button> */}
        {/* <button className="button b" type="button" onClick={() => props.upload_7days()}>upload 7day (soon)</button> */}
        <button className={!props.isChecked ? "blueButton" : "greyButton"} onClick={() => props.upload_1hour()}>{!props.isChecked ? "upload" : "view"} 1 hour</button>  
        <button className={!props.isChecked ? "blueButton" : "greyButton"} onClick={() => props.upload_24hours()}>{!props.isChecked ? "upload" : "view"} 24 hours</button>
        <button className="whiteButton" onClick={() => props.upload_7days()}>upload 7 days (soon)</button>
      </div>
      <div className="row">
        {/* <button className="blueButton" onClick={() => props.export_metric_csv()}>download CSV</button> */}
      </div>
      <br/>
      <div style={{ height: 400, width: '600px', margin: 'auto' }}>
      <DataGrid
        onRowClick={handleRowClick} 
        rows={props.rows}
        columns={columns}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          console.log(newRowSelectionModel)
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection={false}
        style={{textAlign: 'center'}}
      />
      </div>
      <br/>
      <div>
        <span className="tab">blueberry category labels:</span>
        <div><span style={{ fontSize: '10px'}}>manually enter from what you have set in your mobile app</span></div>
        <div>
        <span style={{ color: '#FFE933'}}>⬤</span><input className="whiteButton" type="text" placeholder={user_state_1} id="userState1"></input>
        <span style={{ color: '#7FE683'}}>⬤</span><input className="whiteButton" type="text" placeholder={user_state_2} id="userState2"></input>
        <span style={{ color: '#33F9FF'}}>⬤</span><input className="whiteButton" type="text" placeholder={user_state_3} id="userState3"></input>
        </div>
        <div>
        <span style={{ color: '#CA9EFF'}}>⬤</span><input className="whiteButton" type="text" placeholder={user_state_4} id="userState4"></input>
        <span style={{ color: '#53BEF7'}}>⬤</span><input className="whiteButton" type="text" placeholder={user_state_5} id="userState5"></input>
        <span style={{ color: '#ff9900'}}>⬤</span><input className="whiteButton" type="text" placeholder={user_state_6} id="userState6"></input>
        </div>
        <button className="blueButton" onClick={() => props.update_user_states()}>update</button>  
      </div>
      {/* <button onClick={() => props.fromDownload()}>from download</button> */}
    </>
  )
}

const Compass = (props: any) => {
	let needle;
		switch(props.onResonance){
			case 1:
				needle = <MyProfile 
                      fromDownload={props.fromDownload}
                      devicesDropdown={props.devicesDropdown}
                      setDevicesDropdown={props.setDevicesDropdown}
                      setIsLoggedIn={props.setIsLoggedIn} 
                      address={props.address}
                      setView={props.setView}
                  />
				break;
			case 2:
				needle = <MyData 
                    isChecked={props.isChecked}
                    setIsChecked={props.setIsChecked}
                    setHighlight={props.setHighlight}
                    rows={props.rows}
                    setRows={props.setRwos}
                    upload_1hour={props.upload_1hour} 
                    upload_24hours={props.upload_24hours} 
                    upload_7days={props.upload_7days}
                    fromDownload={props.fromDownload}
                    update_user_states={props.update_user_states}
                  />
				break;
			default:
				needle = <MyProfile 
                      fromDownload={props.fromDownload}
                      devicesDropdown={props.devicesDropdown}
                      setDevicesDropdown={props.setDevicesDropdown}
                      setIsLoggedIn={props.setIsLoggedIn} 
                      address={props.address}
                      setView={props.setView}
                  />
		}
	return(
		<>
			{
				needle
			}
		</>
	)
}

const formatSize = (size: any) => {
  if (size < 1024) {
    return size + ' bytes';
  } else if (size < 1024 * 100) {
    return (size / 1024).toFixed(2) + ' KB';
  } else {
    return (size / (1024 * 1024)).toFixed(2) + ' MB';
  }
};

async function addChart(timestampData: any, chartDataFlow: any, chartDataHR: any) {
  // data array
  const dataFlow = chartDataFlow;
  const dataHR = chartDataHR;

  //ref index dataFlow.map((_, index) => `${index}`)
  // Get the canvas element
  var canvas = document.createElement('canvas');
  console.log(window.global)
  // Create a chart using Chart.js
  new Chart(canvas, {
      type: 'line', // You can change the chart type here (bar, line, pie, etc.)
      data: {
          labels: timestampData,
          datasets: [{
              label: "flow activity (%)",
              data: dataFlow,
              backgroundColor: 'rgba(75, 192, 192, 0.2)', // Set the color and transparency of the bars
              borderColor: 'rgba(75, 192, 192, 1)', // Set the color of the bar borders
              borderWidth: 1 // Set the width of the bar borders
          },{
              label: "heart rate (bpm)",
              data: dataHR,
              backgroundColor: 'rgba(192, 32, 32, 0.2)', // Set the color and transparency of the bars
              borderColor: 'rgba(192, 32, 32, 1)', // Set the color of the bar borders
              borderWidth: 1 // Set the width of the bar borders
          }]
      },
      options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  
  canvas.style.height = "100%";
  canvas.style.width = "100%";
  //only add 1 chart to div per query request
  var div = document.getElementById("chartDiv") as any;
  while(div.firstChild) {
      div.removeChild(div.firstChild);
  }
  document.getElementById("chartDiv")!.appendChild(canvas);
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [isWeb3LoggedIn, setIsWeb3LoggedIn] = useState(true)
  const [devicesDropdown, setDevicesDropdown] = useState<any>('select device')
  const [rows, setRows] = useState<any>([])
  const [isChecked, setIsChecked] = useState(false);

  const [proof, setProof] = useState<any>('')
  const [address, setAddress] = useState<any>('')

  const [showElement, setShowElement] = useState(true);

  const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const tenVh = viewportHeight * 0.1;

      if (currentScrollY > tenVh) {
          setShowElement(false);
      } else {
          setShowElement(true);
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  var startTimeQuery = new Date(Date.now() - 1000 * 60 * 30);
  var endTimeQuery = new Date();

  var user_state_1 = "active";
  var user_state_2 = "dynamic";
  var user_state_3 = "increasing";
  var user_state_4 = "variable";
  var user_state_5 = "resting";
  var user_state_6 = "intense";

  const [passwordRaw, _] = useState<any>('')
  sequence.initWallet({defaultNetwork: 'mainnet'})

  useEffect(() => {
    if(localStorage.getItem('salt') == null){
      localStorage.setItem('salt', JSON.stringify(window.crypto.getRandomValues(new Uint8Array(16)))) // Secure random salt/
    }

    if(localStorage.getItem('userState1') == null){
      user_state_1 = "active"
    } else {
      user_state_1 = localStorage.getItem('userState1')!;
    }
    if(localStorage.getItem('userState2') == null){
      user_state_2 = "dynamic"
    } else {
      user_state_2 = localStorage.getItem('userState2')!;
    }
    if(localStorage.getItem('userState3') == null){
      user_state_3 = "increasing"
    } else {
      user_state_3 = localStorage.getItem('userState3')!;
    }
    if(localStorage.getItem('userState4') == null){
      user_state_4 = "variable"
    } else {
      user_state_4 = localStorage.getItem('userState4')!;
    }
    if(localStorage.getItem('userState5') == null){
      user_state_5 = "resting"
    } else {
      user_state_5 = localStorage.getItem('userState5')!;
    }
    if(localStorage.getItem('userState6') == null){
      user_state_6 = "intense"
    } else {
      user_state_6 = localStorage.getItem('userState6')!;
    }
  }, [])

  const login = async () => {
    const wallet = sequence.getWallet()
    const details = await wallet.connect({app: 'blueberry', authorize: true})
    if(details.connected){
      setProof(details.proof?.proofString)
      setAddress(details.session?.accountAddress)
      setIsWeb3LoggedIn(true)
      if(localStorage.getItem('time') == null) localStorage.setItem('time', JSON.stringify(Date.now()))
    }
  }

  const update_user_states = () => {
      var tmpS1_ = document.getElementById("userState1")! as any
      var tmpS1 = tmpS1_.value! as any;

      if (tmpS1 != ""){
        localStorage.setItem('userState1', tmpS1);
        user_state_1 = tmpS1;
      }

      var tmpS2_ = document.getElementById("userState2")! as any
      var tmpS2 = tmpS2_.value! as any;

      if (tmpS2 != ""){
        localStorage.setItem('userState2', tmpS2);
        user_state_2 = tmpS2;
      }

      var tmpS3_ = document.getElementById("userState3")! as any

      var tmpS3 = tmpS3_.value! as any;

      if (tmpS3 != ""){
        localStorage.setItem('userState3', tmpS3);
        user_state_3 = tmpS3;
      }

      var tmpS4_ = document.getElementById("userState4")! as any
      var tmpS4 = tmpS4_.value! as any;
      if (tmpS4 != ""){
        localStorage.setItem('userState4', tmpS4);
        user_state_4 = tmpS4;
      }

      var tmpS5_ = document.getElementById("userState5")! as any
      var tmpS5 = tmpS5_.value! as any;

      if (tmpS5 != ""){
        localStorage.setItem('userState5', tmpS5);
        user_state_5 = tmpS5;
      }

      var tmpS6_ = document.getElementById("userState6")! as any
      var tmpS6 = tmpS6_.value! as any;
      if (tmpS6 != ""){
        localStorage.setItem('userState6', tmpS6);
        user_state_6 = tmpS6;
      }
  }

  const encrypt = async (startTimeVal: any, endTimeVal: any) => {
    console.log('encrypt function call')
    var millisStart = startTimeVal.getTime()/1000.0;
    var millisEnd = endTimeVal.getTime()/1000.0;
    console.log(millisStart)
    console.log(millisEnd)
    
    getUserDataRaw(millisStart, millisEnd, async (data: any) => {
      // console.log('in here')
      const password = new TextEncoder().encode(passwordRaw);
      const salt = new ArrayBuffer(JSON.parse(localStorage.getItem('salt')!))
      
      // const json = {
      //   time: Date.now(),
      //   window: [1,2,3,4,5]
      // }

      try{
        //USER CATEGORY ENUM should be saved as part of salt KEY
        let userCategoryEnum = {
          "state1": user_state_1, 
          "state2": user_state_2, 
          "state3": user_state_3,
          "state4": user_state_4,
          "state5": user_state_5,
          "state6": user_state_6
        }

        //converts dictionary to 3 4-byte integers in an array
        //total data saving size 
        //mapping for user identification
        //userKey + timestamp into 1 "key" identifier? find all values with key for data retrival
        const compressedVectors: any = []
        dataRaw.map((val: any) => {
          DictionaryToIntArray(val, userCategoryEnum, async (dataResult: any) => {
            compressedVectors.push(dataResult)

          })
        })
        console.log(compressedVectors);

        // IntArrayToDictionary(dataResult, userCategoryEnum, async (dictionaryResult: any) => {
        //   console.log(dictionaryResult);
        // });
        // console.log('hi')
        //attempting to add chart on function call
        var timestampData = [];
        var flowActivityData = [];
        var heartRateData = [];
        let options: any = {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        };
        for (let i = 0; i < dataRaw.length; i++) {
          let tmpDictionary = dataRaw[i];
          let tmpTimestamp = tmpDictionary.timestamp*1000.0;
          let tmpFlowActivity = tmpDictionary.flow_activity;
          let tmpHeartRate = tmpDictionary.heartrate;
          let tmpHumanTime = new Intl.DateTimeFormat("en-US", options).format(new Date(tmpTimestamp)); 
          timestampData.push(tmpHumanTime);
          flowActivityData.push(tmpFlowActivity);
          heartRateData.push(tmpHeartRate);
          arrayMetricData.push([tmpTimestamp,tmpFlowActivity,tmpHeartRate]);
        }
        //console.log('now here')
        addChart(timestampData, heartRateData, flowActivityData);

        const dataToEncrypt = new TextEncoder().encode(JSON.stringify(compressedVectors)); // Data to encrypt

        // The number of iterations, key length and algorithm details
        const iterations = 100000;
        const hash = 'SHA-256';
        const keyLength = 256;
        const algorithm = { name: 'AES-GCM', length: keyLength };

        // Import the password as a CryptoKey
        const keyMaterial = await window.crypto.subtle.importKey(
          'raw',
          password,
          { name: 'PBKDF2' },
          false,
          ['deriveKey']
        );

        // Derive the key
        const cryptoKey = await window.crypto.subtle.deriveKey(
          {
            name: 'PBKDF2',
            salt: salt,
            iterations: iterations,
            hash: hash,
          },
          keyMaterial,
          algorithm,
          true,
          ['encrypt', 'decrypt']
        );

        // Encrypt the data
        const iv = window.crypto.getRandomValues(new Uint8Array(12)); // AES-GCM recommended IV length is 12 bytes
        const encryptedData = await window.crypto.subtle.encrypt(
          { ...algorithm, iv: iv },
          cryptoKey,
          dataToEncrypt
        );

        // store data 
        // encryptedData
        // const decoder = new TextDecoder('utf-8');
        // const string = decoder.decode(encryptedData);
        let vector: any = [];
        try{
          vector = new Uint8Array(encryptedData)
        }catch(err){
          console.log(err)
        }

        const vector_iv = Array.from([...vector, ...iv])

        if(!isChecked){
          console.log('STORING')
          console.log(Array.from(vector_iv))
          console.log(address)
        }
        
        const int32Array = new Uint8Array(Array.from(vector_iv.slice(0, -12)));

        // To create a new ArrayBuffer from Int32Array
        const buffer = new Uint8Array(int32Array).buffer;
    
        // console.log('Encrypted Data:', uint8array.slice(0, uint8array.byteLength));
        // const iv1 = window.crypto.getRandomValues(new Uint8Array(12)); // AES-GCM recommended IV length is 12 bytes
    
        // Decrypt the data
        const decryptedData = await window.crypto.subtle.decrypt(
          { ...algorithm, iv: new Uint8Array(vector_iv.slice(-12)) },
          cryptoKey,
          buffer
        );
    
        console.log('Decrypted Data:', new TextDecoder().decode(decryptedData));
        setTimeout(() => {
          fromDownload(address)
        }, 2000)

        } catch(err){
        console.log(err)   
        }
    });
  }

  const upload_1hour = async () => {
    startTimeQuery = new Date(Date.now() - 1000 * 60 * 60);
    endTimeQuery = new Date(Date.now());
    encrypt(startTimeQuery, endTimeQuery);
  }

  const upload_24hours = async () => {
    startTimeQuery = new Date(Date.now() - (1000 * 60 * 60 * 24));
    endTimeQuery = new Date(Date.now());
    encrypt(startTimeQuery, endTimeQuery);
  }

  const upload_7days = async () => {
    startTimeQuery = new Date(Date.now() - (1000 * 60 * 60 * 24 * 7));
    endTimeQuery = new Date(Date.now());
    encrypt(startTimeQuery, endTimeQuery);
  }

  const fromDownload = async (account?: any) => {
    console.log(address)
    if(address) account = address
    console.log('CALLING FROM DOWNLOAD')
    const value: any = await canister.getMapping(account);
    const password = new TextEncoder().encode(passwordRaw);
    console.log(value)
    const tempRows: any = []
     
    value[0].map(async (val: any, id: number) => {
      const size = val.map((val: any) => Number(val)).reduce((acc: any, obj: any) => {
        return JSON.stringify(obj).length + acc;
      }, 0);
      console.log(size)
      tempRows.push({
        id: id,
        timeType: size < 10000 ? '1hr' : '24hr',
        uploadTime: new Date(Date.now()),
        tag: '',
        storageAmount: formatSize(size),
        // yearlyPrice: 1,
        // computedValue: 10000
      })

    try{
        const iv = new Uint8Array(val.slice(-12).map((num: any) => Number(num)))
        const vector = new Uint8Array(val.slice(0, -12).map((num: any) => Number(num)))

        const salt = new ArrayBuffer(JSON.parse(localStorage.getItem('salt')!))
        const iterations = 100000;
        const hash = 'SHA-256';
        const keyLength = 256;
        const algorithm = { name: 'AES-GCM', length: keyLength };

        // Import the password as a CryptoKey
        const keyMaterial = await window.crypto.subtle.importKey(
          'raw',
          password,
          { name: 'PBKDF2' },
          false,
          ['deriveKey']
        );

        const cryptoKey = await window.crypto.subtle.deriveKey(
          {
            name: 'PBKDF2',
            salt: salt,
            iterations: iterations,
            hash: hash,
          },
          keyMaterial,
          algorithm,
          true,
          ['encrypt', 'decrypt']
        );
        // const iv = window.crypto.getRandomValues(new Uint8Array(12)); // AES-GCM recommended IV length is 12 bytes
        // const encoder = new TextEncoder();
        // setStorageData(
        // value[0].map((nums: any) => {
        //   return nums.map((num: any) => Number(num))
        // })
        // )
        // const buffer = encoder.encode(value[0][1]);
        // const uint8array = new Uint8Array(value[0][0])
        // console.log(Array.from(value[0][0]).map((num: any) => Number(num)))
        // const int32Array = new Uint8Array(val.map((num: any) => Number(num)))
        // console.log(int32Array)
        // To create a new ArrayBuffer from Int32Array
        const buffer = new Uint8Array(vector).buffer;
        console.log(buffer)
        console.log(iv)
        const decryptedData = await window.crypto.subtle.decrypt(
          { ...algorithm, iv: iv },
          cryptoKey,
          buffer
        );

        let userCategoryEnum = {
          "state1": "focused", 
          "state2": "healthy", 
          "state3": "relaxed",
          "state4": "scattered",
          "state5": "mindful",
          "state6": "intense"
        }

        const data: any = []
        JSON.parse(new TextDecoder().decode(decryptedData)).map((val: any) => {
          IntArrayToDictionary(val, userCategoryEnum, async (dictionaryResult: any) => {
            data.push(dictionaryResult);
          });
        })

        console.log(data)

        table[id] = data
        console.log('Decrypted Data:', data);
      } catch(err) {
         console.log(err)
      }
    })

    setRows(tempRows)
    
  }

  const [view, setView] = useState<any>(1)
  const [isLearnMore, setIsLearnMore] = useState(false)

  useEffect(()=>{

  }, [view, isLearnMore])


  const learnMore = () => {
    window.scrollTo(0, 0);
    setIsLearnMore(!isLearnMore)
  }

  return (
    <>
      {
        isWeb3LoggedIn 
        ? 
        <>
          <div>
            <img style={{position: 'fixed', top: '50px', left: '50px'}} width={50} src={'https://blueberryx.com/cdn/shop/files/logo_180x.png?v=1613792305'}/>
            <br/>
            <div style={{position: 'fixed', right: '50px', top: '55px'}}>
            <span className="tab" onClick={() => {setIsWeb3LoggedIn(false);setIsLoggedIn(false);setView(1)}} >log out</span>

            </div>
            { showElement ? <div style={{position: 'fixed', top: '60px', left: '30%', right: '30%'}}>
              <span className='tabs' onClick={() => setView(1)} style={{borderBottom: view == 1 ? '1px solid #00ABFF': ''}}>profile</span><span className={ isLoggedIn? 'tabs' : 'tabs-disabled'} style={{cursor: isLoggedIn ? 'pointer' : "!important", color: isLoggedIn ? "#00ABFF" : 'lightgrey', borderBottom: view == 2 ? '1px solid #00ABFF': ''}}onClick={() => {if(isLoggedIn) setView(2)}}>my_data</span>
            </div> : null }
            {
              Compass(
                {
                  isChecked: isChecked,
                  setIsChecked: setIsChecked,
                  rows: rows,
                  setRows: setRows,
                  setDevicesDropdown: setDevicesDropdown,
                  devicesDropdown: devicesDropdown,
                  setView: setView,
                  setIsLoggedIn: setIsLoggedIn,
                  onResonance: view, 
                  proof: proof, 
                  address: address,
                  upload_1hour: upload_1hour,
                  upload_24hours: upload_24hours,
                  upload_7days: upload_7days,
                  fromDownload: fromDownload,
                  update_user_states: update_user_states
                }
              )
            }
        </div>
      </> 
      :
      isLearnMore ? <>
      <div className="flex-col">
            <div className="flex-row buttons-row" style={{position: 'absolute', left: '20px', zIndex: '1'}}>
                <img src="https://cdn.shopify.com/s/files/1/0304/7905/7027/files/logo_751c0d51-c8ff-410e-9597-5b27ae561b98_180x.png?v=1598187965" style={{height: '40px', width: '40px', marginTop: '14px'}}/>
            </div>
        </div>
        <Card className="card-styles text-area" as="article">
          <div style={{marginLeft: "20px", marginRight: "20px"}}>
          <div style={{height: '20px'}}></div>
          <div className="title">Do you struggle with trust on who is in control of your data <span> </span>
          <u style={{textDecorationColor: "blue"}}>fitness, health, body, and cognitive</u>
          <span> </span>data?
          </div>
          <div style={{height: '20px'}}></div>
          <div className="title" style={{fontSize: '10px'}}>
            What if there was a way to take back control ensure you are the only one with the key and enable new ways to share, interact and benefit with your data.
          </div>
          <div style={{height: '20px'}}></div>
          </div>
        </Card>
        <Card className="card-styles text-area" as="article">
          <div style={{marginLeft: "20px", marginRight: "20px"}}>
          <div style={{height: '20px'}}></div>
          <div className="title"><u style={{textDecorationColor: "purple"}}>Fitness, cognitive and health</u> data is siloed, locked on your phone or stored in a non distributed database & out of your control.
          </div>
          <div style={{height: '20px'}}></div>
          <div className="title" style={{fontSize: '10px'}}>
            Data is difficult to link with other records.  Sharing with people usually requires exporting by files or taking a screenshot. This process can be extremely frustrating. For example if you are a researcher looking to parse data, an individual looking to share with someone to get feedback/help or a business trying to collect and control data. 3rd party businesses are benefiting from your data however not sharing it back with you.
          </div>
          <div style={{height: '20px'}}></div>
          </div>
        </Card>
        <Card className="card-styles text-area" as="article">
          <div style={{marginLeft: "20px", marginRight: "20px"}}>
          <div style={{height: '20px'}}></div>
          <div className="title">We are building a suite of tools to <u style={{textDecorationColor: "orange"}}>take back control</u> of health and fitness data.
          </div>
          <div style={{height: '20px'}}></div>
          <div className="title" style={{fontSize: '10px'}}>
              We believe health and fitness data storage should be as easily accessible as files are on your phone & computer. We also believe you should have control of how to encrypt your data and how to share / benefit from it.
          </div>
          <div style={{height: '20px'}}></div>
          </div>
        </Card>
        <Card className="card-styles text-area" as="article">
          <div style={{marginLeft: "20px", marginRight: "20px"}}>
          <div style={{height: '20px'}}></div>
          <div className="title">Blockchain systems are now crossing the point where storage cost is reaching <u style={{textDecorationColor: "green"}}>similar levels to top tech providers.</u></div>
          <div style={{height: '20px'}}></div>
          <div className="title" style={{fontSize: '10px'}}>
              Blockchain enables an personalized encryption, control and copy format. With blockchain we can enable you to read, write, copy and delete your data in a seamless fashion.
          </div>
          <div style={{height: '20px'}}></div>
          </div>
        </Card>
        <Card className="card-styles text-area" as="article">
          <div style={{marginLeft: "20px", marginRight: "20px"}}>
            <div style={{height: '20px'}}></div>
            <div className="title">Roadmap: </div>
            <div style={{height: '20px'}}></div>
            <div className="title">
            <ul style={{ listStylePosition: "outside"}}>
              <li>Direct from phone to blockchain storage</li>
              <li>HealthKit, Google, Oura and Whoop integrations</li>
              <li>Anonymized search and comparison tools</li>
              <li>Market research, add your data to an anonymized pool and get rewarded when accessed</li>
              <li>Coaching and feedback exercises to prompt health</li>
            </ul>
            </div>
            <div style={{height: '20px'}}></div>
          </div>
        </Card>
        <div style={{ textAlign: "center", paddingTop: "", paddingBottom: "10px"}}>
            <a target="_blank">
              <button
                onClick={() => learnMore()}
                type="submit"

                className="action-button"
                name="commit"
                style={{width: "180px", fontFamily: 'helvetica', borderRadius: '100px'}}>
                <span>{"<"}</span>
              </button>
            </a>
          </div>
        </>
        :
      <div className="container">
        <div className="flex-col">
            <div className="flex-row buttons-row" style={{position: 'absolute', left: '20px', zIndex: '1'}}>
                <a href="https://sugar.blueberryx.com"><img src="https://cdn.shopify.com/s/files/1/0304/7905/7027/files/logo_751c0d51-c8ff-410e-9597-5b27ae561b98_180x.png?v=1598187965" style={{height: '40px', width: '40px', marginTop: '14px'}}/></a>
            </div>
        </div>
        <br/>
        <p style={{color: '#000000', fontSize: '32px'}}>An easy way to control your fitness and wearable data</p>
        <div>
          <div style={{ textAlign: "center", paddingTop: "40px", paddingBottom: "50px"}}>
            <a href="https://form.typeform.com/to/WsBKRzkG" target="_blank">
              <button
                type="submit"
                className="action-button"
                name="commit"
                style={{width: "180px", fontFamily: 'helvetica', borderRadius: '100px'}}>
                <span>waitlist</span>
              </button>
            </a>
          </div>
          <div style={{ textAlign: "center", paddingTop: "", paddingBottom: "50px"}}>
            <a target="_blank">
              <button
                onClick={() => login()}
                type="submit"

                className="action-button"
                name="commit"
                style={{width: "180px", fontFamily: 'helvetica', borderRadius: '100px'}}>
                <span>connect your data</span>
              </button>
            </a>
          </div>
          <div style={{ textAlign: "center", paddingTop: "", paddingBottom: "0px"}}>
            <a target="_blank">
              <button
                onClick={() => learnMore()}
                type="submit"

                className="action-button"
                name="commit"
                style={{width: "180px", fontFamily: 'helvetica', borderRadius: '100px'}}>
                <span>learn more</span>
              </button>
            </a>
          </div>
          <br/>
          <br/>
          <div className="card-info">
            <a href="https://blueberryx.com/pages/privacy-policy" target="_blank">privacy policy</a>
            <p>Blueberry © 2023</p>
          </div>
        </div>
        {/* <input className='input-general' placeholder='password' type='password' onChange={(evt: any) => setPassword(evt.target.value)}></input> */}
        <br/>
        <br/>
        <br/>
      </div>
      }
      <br/>
      <div className='total-space-left'>
          network total: <span style={{color: '#00ABFF'}}>0.0 MB</span> &nbsp;&nbsp;&nbsp;&nbsp; {isWeb3LoggedIn ? <>total: <span style={{color: '#00ABFF'}}><SizeDisplay data={rows} /></span>  &nbsp;&nbsp;&nbsp;&nbsp; </> : null}
        </div>
        <div className='total-space'>
          { isWeb3LoggedIn ? <>balance: <span style={{color: '#00ABFF'}}>$0.00</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>used blu: </span><span style={{color: '#00ABFF'}}>0</span></> : null }
        </div>
    </>
  )
}

const SizeDisplay = ({ data } : any) => {
  const [size, setSize] = useState(null)
  const formatSize = (size: any) => {
    if (size < 1024) {
      return size + ' bytes';
    } else if (size < 1024 * 100) {
      return (size / 1024).toFixed(2) + ' KB';
    } else {
      return (size / (1024 * 1024)).toFixed(2) + ' MB';
    }
  };

  useEffect(() => {
    const totalSize = data.reduce((acc: any, obj: any) => {
      return JSON.stringify(obj).length + acc;
    }, 0);

    setSize(totalSize);
  }, [data]);

  return (
    <>
      {formatSize(size)}
    </>
  );
};

export default App

