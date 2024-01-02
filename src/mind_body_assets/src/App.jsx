//reference
import * as React from 'react';
import { useState, useEffect } from "react";
import Router from './routes/sections';
import ThemeProvider from './theme';

//UI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import logo from "../assets/logo.svg";
import { Card } from "react-bootstrap";
import AppWidgetSummary from './modules/app-widget-summary';
import AppUserData from './modules/app-user-chart';

const App = () => {

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );

}

export default App;
