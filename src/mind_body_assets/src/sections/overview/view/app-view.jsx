//reference
import * as React from 'react';
import { useState, useEffect } from "react";
import { mind_body } from "../../../../../declarations/mind_body"
import ThemeProvider from '../../../theme';
//UI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Card } from "react-bootstrap";
import AppWidgetSummary from '../../../modules/app-widget-summary';

// ----------------------------------------------------------------------
export default function AppView() {

  const [canisterBalance, setCanisterBalance] = React.useState(0);
  const [storedNetworkDataTotal, setStoredNetworkDataTotal] = React.useState(0);
  const [web3Id, setWeb3Id] = React.useState("");

  const loadICPData = async () => {
    //get canister cycle balance
    const canisterBalanceValue = await mind_body.getCanisterBalance();
    setCanisterBalance(canisterBalanceValue);
    
    const storedNetworkDataTotal = await mind_body.getStoredDataNetworkSize();
    setStoredNetworkDataTotal(storedNetworkDataTotal);

    var tmpWeb3AddressId = "demo";
    if(localStorage.getItem('web3AddressId') !== null){
      var tmpVal = localStorage.getItem('web3AddressId');
      if (tmpVal !== ""){
        tmpWeb3AddressId = localStorage.getItem('web3AddressId');
      }
    }
    // console.log(tmpWeb3AddressId);
    if (tmpWeb3AddressId === undefined){
      //display error popup
      setWeb3Id("demo");
      // console.log("web3 id not set!");
    } 
    if (!tmpWeb3AddressId.includes("demo")){
      setWeb3Id(tmpWeb3AddressId);
      // console.log("web3 id set!");
    }
    window.$web3AddressId = tmpWeb3AddressId;
  }

  useEffect(() =>{
    loadICPData();
  },[]);

  return (
      <div className="App" id="outer-container">
        <Container maxWidth="xl">
          <Grid container spacing={3} sx={{marginBottom: 3}} xs={12} md={12} lg={12}>
              <Typography variant="subtitle" sx={{fontSize: "1.5em", textAlign: "left"}}>
                Experiment: user controlled wearable data storage and exchange
              </Typography>
              <Typography variant="subtitle" sx={{fontSize: "1.0em", textAlign: "left"}}>
                Storage via the <a href="https://internetcomputer.org/">Internet Computer</a>, compare and exchange your data for value through participation in studies
              </Typography>
              <Grid style={{position: "relative", height: window.innerWidth < 760 ? 250 : 500, width: "100%", marginTop: "20px"}}><iframe src="https://demo.arcade.software/tdqTw20W3lN63ab4Fcus?embed" title="Dashboard" frameBorder="0" loading="lazy" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light"}}></iframe></Grid>          </Grid>
          <Grid container spacing={3}>
            <Grid xs={12} md={6} lg={3}>
              <AppWidgetSummary
                total={canisterBalance}
                subtitle="ICP Cycles Available"
                color="success"
              />
            </Grid>
            <Grid xs={12} md={6} lg={3}>
              <AppWidgetSummary
                total={storedNetworkDataTotal}
                subtitle="bytes stored"
                color="success"
              />
            </Grid>
            <Grid xs={12} md={6} lg={3}>
              <AppWidgetSummary
                title={window.$web3AddressId}
                subtitle="web3 identity"
                color="success">
              </AppWidgetSummary>
            </Grid>
          </Grid>
        </Container>
      </div>
  );
}
