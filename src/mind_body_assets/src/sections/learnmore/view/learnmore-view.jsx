//process
import * as React from 'react';
import { useState, useEffect } from "react";
import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent } from "@dfinity/agent";
import { mind_body, createActor } from "../../../../../declarations/mind_body";

//UI
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { alpha, useTheme } from '@mui/material/styles';
import { bgGradient } from '../../../theme/css';
import Logo from '../../../components/logo';
import ThemeProvider from '../../../theme';

// ----------------------------------------------------------------------

export default function LearnMoreView() {

  return (
    <div className="App" id="outer-container">
      <Container maxWidth="xl">
        <Card className="card-styles text-area" as="article">
          <div style={{marginLeft: "20px", marginRight: "20px"}}>
          <div style={{height: '20px'}}></div>
          <div className="title">Do you struggle with trust on who is in control of your data <span> </span>
          <u style={{textDecorationColor: "blue"}}>fitness, health, body, and cognitive</u>
          <span> </span>data?
          </div>
          <div style={{height: '20px'}}></div>
          <div className="title" style={{fontSize: '12px'}}>
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
          <div className="title" style={{fontSize: '12px'}}>
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
          <div className="title" style={{fontSize: '12px'}}>
              We believe health and fitness data storage should be as easily accessible as files are on your phone & computer. We also believe you should have control of how to encrypt your data and how to share / benefit from it.
          </div>
          <div style={{height: '20px'}}></div>
          </div>
        </Card>
        <Card className="card-styles text-area" as="article">
          <div style={{marginLeft: "20px", marginRight: "20px"}}>
          <div style={{height: '20px'}}></div>
          <div className="title">Blockchain systems are now crossing the point where storage cost is dramatically reducing <u style={{textDecorationColor: "green"}}>to reasonable pricing, e.g. $5/Gib/year</u></div>
          <div style={{height: '20px'}}></div>
          <div className="title" style={{fontSize: '12px'}}>
              Blockchain enables an personalized encryption, control and copy format. With blockchain we can enable you to read, write, copy and delete your data in a seamless fashion.
          </div>
          <div style={{height: '20px'}}></div>
          </div>
        </Card>
      </Container>
    </div>
  );
}
