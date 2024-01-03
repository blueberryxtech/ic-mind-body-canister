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

  const [canisterBalance, setCanisterBalance] = React.useState("");

  const loadICPData = async () => {
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
            <Grid xs={12} md={12} lg={12}>
              <AppWidgetSummary
                title={window.$icpId}
                subtitle="icp identity"
                color="success">
              </AppWidgetSummary>
            </Grid>
          </Grid>
        </Container>
      </div>
  );
}
