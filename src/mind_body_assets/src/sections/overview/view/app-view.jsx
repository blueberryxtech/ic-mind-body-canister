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

    var tmpIcpId = window.$icpId;
    var tmpWeb3AddressId = window.$web3AddressId;
    if (tmpIcpId === undefined && tmpWeb3AddressId === undefined){
      //display error popup
      setWeb3Id("demo");
      // console.log("web3 id not set!");
    } else if (tmpIcpId !== "demo"){
      setWeb3Id(tmpIcpId);
    } else if (tmpWeb3AddressId !== "demo"){
      setWeb3Id(tmpWeb3AddressId);
    }
  }

  useEffect(() =>{
    loadICPData();
  },[]);

  return (
      <div className="App" id="outer-container">
        <Container maxWidth="xl">
          <Grid container spacing={3} sx={{marginBottom: 3}}>
              <Typography variant="subtitle" sx={{fontSize: "1.5em"}}>
                Experiment: store wearable health data and exchange it for real value
              </Typography>
              <Grid style={{position: "relative", height: "550px", width: "100%", marginTop: "20px"}}><iframe src="https://demo.arcade.software/tdqTw20W3lN63ab4Fcus?embed" title="Dashboard" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light"}}></iframe></Grid>
          </Grid>
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
                title={web3Id}
                subtitle="web3 identity"
                color="success">
              </AppWidgetSummary>
            </Grid>
          </Grid>
        </Container>
      </div>
  );
}
