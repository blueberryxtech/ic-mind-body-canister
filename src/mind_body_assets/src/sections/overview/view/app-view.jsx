//reference
import * as React from 'react';
import { useState, useEffect } from "react";
import { mind_body } from "../../../../../declarations/mind_body"
import ThemeProvider from '../../../theme';
//UI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { Card } from "react-bootstrap";
import AppUserChart from '../../../modules/app-user-chart';
import AppWidgetSummary from '../../../modules/app-widget-summary';

// ----------------------------------------------------------------------

export default function AppView() {

  const [icpId, setIcpId] = React.useState("");
  const [canisterBalance, setCanisterBalance] = React.useState("");

 const loadICPData = async () => {
    // get ICP-ID
    // const icpIdValue = await mind_body.getIcpId();
    // setIcpId(icpIdValue);
    //get canister cycle balance
    const canisterBalanceValue = await mind_body.getCanisterBalance();
    setCanisterBalance(canisterBalanceValue);
  }

  useEffect(() =>{
    loadICPData();
  },[]);

  return (
      <div className="App" id="outer-container">
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid xs={12} md={12} lg={12}>
              <AppWidgetSummary
                title="ICP Cycles Available" 
                total={canisterBalance}
                color="success"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid xs={12} md={12} lg={12}>
              <AppUserChart
                title=""
                subheader=""
                chart={{
                  labels: [
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
                    '12/21/2023 8:55 AM',
                  ],
                  series: [
                    {
                      name: 'heart rate (bpm)',
                      type: 'area',
                      fill: 'gradient',
                      color: 'red',
                      data: [54, 55, 57, 67, 72, 63, 60, 65, 56, 60, 70],
                    },
                    {
                      name: 'flow activity (%)',
                      type: 'area',
                      fill: 'gradient',
                      color: 'blue',
                      data: [30, 25, 30, 32, 34, 39, 48, 61, 55, 47, 40],
                    },
                  ],
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
  );
}
