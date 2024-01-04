//reference
import * as React from 'react';
import { useState, useEffect } from "react";
import { mind_body } from "../../../../../declarations/mind_body"
import ThemeProvider from '../../../theme';
//UI
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Card } from "react-bootstrap";
import AppWidgetSummary from '../../../modules/app-widget-summary';

// ----------------------------------------------------------------------
export default function AppExchangeView() {

  useEffect(() =>{
  },[]);

  return (
      <div className="App" id="outer-container">
        <Container maxWidth="xl">
          <Grid container spacing={3} sx={{marginBottom: 3}}>
              <Typography variant="subtitle" sx={{fontSize: "1.5em"}}>
                Data exchange opportunities
              </Typography>
          </Grid>
          <Grid container spacing={3}>
            <Grid xs={12} md={6} lg={3}>
              <AppWidgetSummary
                total={100}
                footnote="participants"
                subtitle="Heart rate response to environments: participants needed for 1 month of data (anonymous)"
                color="success"
              />
              <Button variant="contained" color="primary" style={{width: "150px"}} href="https://form.typeform.com/to/WsBKRzkG">
                request to join
              </Button>
            </Grid>
            <Grid xs={12} md={6} lg={3}>
              <AppWidgetSummary
                total={50}
                footnote="participants"
                subtitle="Attention in conversations: 10 logged data sets + conversations (anonymous)"
                color="success"
              />
              <Button variant="contained" color="primary" style={{width: "150px"}}>
                coming soon
              </Button>
            </Grid>
            <Grid xs={12} md={6} lg={3}>
              <AppWidgetSummary
                total={400}
                footnote="participants"
                subtitle="Understanding stress: manual situation reporting + location (anonymous)"
                color="success"
              />
              <Button variant="contained" color="primary" style={{width: "150px"}}>
                coming soon
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
  );
}
