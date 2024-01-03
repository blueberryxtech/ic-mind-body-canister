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

// ----------------------------------------------------------------------

export default function MyDataPage() {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [devicesDropdown, setDevicesDropdown] = useState('select device');

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

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = myData.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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
    setSelected(newSelected);
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
    inputData: myData,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  const options = [
    'select device','blueberry','+ request a device'
  ];

  const _onSelect = (el) => {
    if(el.value == '+ request a device') window.open('https://form.typeform.com/to/WsBKRzkG')
    else if(el.value != 'select device') setIsOpen(true);
    setDevicesDropdown(el.value)
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

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
  }

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
               ' '+ (tmpDateTime.getHours()-12) +':0'+tmpDateTime.getMinutes()+' AM';
            } else {
              stringTime += (tmpDateTime.getMonth()+1)+'/'+tmpDateTime.getDate()+'/'+tmpDateTime.getFullYear()+ 
               ' '+ (tmpDateTime.getHours()-12) +':'+tmpDateTime.getMinutes()+' AM';
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
    console.log(outputArray);
    // console.log(outputArray[0]);
    // created ICP + blueberry email login
    // e.g. 1123513 + "blueberryUserIdString"
    // await processBlueberryData(outputArray[0], localId);
    // document.getElementById("chartDiv").innerText = outputArray[1];

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
        <Button variant="contained" color="secondary" startIcon={<Iconify icon="" />}>
          <Dropdown options={options} onChange={_onSelect} value={devicesDropdown} placeholder="select an option" />
        </Button>
        <Link variant="subtitle2" href="" sx={{ ml: 0.5 }}>
              
        </Link>
        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          upload 24hr
        </Button>
        <Link variant="subtitle2" href="" sx={{ ml: 0.5 }}>
              
        </Link>
      </Stack>
      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={myData.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'id', label: 'id' },
                  { id: 'datatype', label: 'data type' },
                  { id: 'date', label: 'date' },
                  { id: 'dataSize', label: 'data size (kb)' },
                  { id: 'isVerified', label: 'Verified', align: 'center' },
                  { id: '' },
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
                      selected={selected.indexOf(row.name) !== -1}
                      handleClick={(event) => handleClick(event, row.name)}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, myData.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={myData.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
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
                <button className="action-button" type="submit">Login</button>
              </div>
            </form>
          </div>
        </Card>
      </Modal>
    </Container>
  );
}
