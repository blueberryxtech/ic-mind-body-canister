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
          <div style={{marginLeft: "20px", marginRight: "20px", textAlign: "left"}}>
          <div style={{height: '20px'}}></div>
          <div className="title"><u style={{textDecorationColor: "lightblue"}}>Empowering individuals to unleash the power of health and fitness data</u>
          </div>
          <div style={{height: '20px'}}></div>
          <div className="title" style={{fontSize: '12px'}}>
            In a landscape where health and fitness data's worth remains largely untapped, this paper introduces a new standard for storing health and fitness data on blockchain concept. This standard grants individuals control over their data, facilitates seamless sharing, and introduces incentives for active participation.
          </div>
          <div style={{height: '20px'}}></div>
          </div>
        </Card>
        <Card className="card-styles text-area" as="article">
          <div style={{marginLeft: "20px", marginRight: "20px", textAlign: "left"}}>
          <div style={{height: '20px'}}></div>
          <div className="title"><u style={{textDecorationColor: "blue"}}>Introduction:</u>
          </div>
          <div style={{height: '20px'}}></div>
          <div className="title" style={{fontSize: '12px'}}>
            Despite the significant value of health and fitness data, individuals grapple with challenges like incomplete datasets, data silos, and a lack of incentives for maintaining consistent records. The proposed solution is a user-owned IoT network, empowering individuals to control, share, and benefit from their health and fitness data.
            </div>
          <div style={{height: '20px'}}></div>
          </div>
        </Card>
        <Card className="card-styles text-area" as="article">
          <div style={{marginLeft: "20px", marginRight: "20px", textAlign: "left"}}>
          <div style={{height: '20px'}}></div>
          <div className="title"><u style={{textDecorationColor: "orange"}}>The Problem:</u>
          </div>
          <div style={{height: '20px'}}></div>
          <div className="title" style={{fontSize: '12px'}}>
            Health, fitness, and cognitive data often reside in proprietary databases, accessible to individuals only through mobiles app or APIs or unclear storage used whereby the business benefits from the users data. Existing sharing methods hinder collaboration among researchers, individuals, and businesses. The need for a solution that democratizes data ownership and facilitates seamless sharing is crucial.
            </div>
          <div style={{height: '20px'}}></div>
          </div>
        </Card>
        <Card className="card-styles text-area" as="article">
          <div style={{marginLeft: "20px", marginRight: "20px", textAlign: "left"}}>
          <div style={{height: '20px'}}></div>
          <div className="title"><u style={{textDecorationColor: "green"}}>The Solution:</u></div>
          <div style={{height: '20px'}}></div>
          <div className="title" style={{fontSize: '12px'}}>
            Our suite of tools seeks to revolutionize health and fitness data management, envisioning a system where data storage is as accessible as files on a phone or computer. Blockchain technology is pivotal, providing personalized encryption, control, and a seamless user experience for reading, writing, copying, and deleting data.          
            </div>
          <div style={{height: '20px'}}></div>
          </div>
        </Card>
        <Card className="card-styles text-area" as="article">
          <div style={{marginLeft: "20px", marginRight: "20px", textAlign: "left"}}>
          <div style={{height: '20px'}}></div>
          <div className="title"><u style={{textDecorationColor: "purple"}}>Roadmap:</u></div>
          <div style={{height: '20px'}}></div>
          <div className="title" style={{fontSize: '12px'}}>
              Direct from smartphone to blockchain storage: Establishing a secure and direct connection from users' devices to blockchain storage, ensuring a user-friendly and efficient data transfer process. Integration with multiple Health & Fitness Devices: collaborating with HealthKit, Google/Fitbit, Apple Watch, Whoop, and Oura Ring for seamless integration of device-generated data into the blockchain network.
          </div>
          <div style={{height: '20px'}}></div>
          <div className="title" style={{fontSize: '12px'}}>
            Anonymized Search & Comparison Tools: Developing user-friendly tools for searching and comparing anonymized health and fitness data, fostering collaborative research without compromising individual privacy.
          </div>
          <div style={{height: '20px'}}></div>
          <div className="title" style={{fontSize: '12px'}}>
            Data Marketplace and Reward System: Creating an anonymized data store where users contribute data for market research, receiving rewards when their data is transferred. Coaching and Feedback Exercises: Incorporating coaching and feedback exercises to encourage consistent health data input, providing valuable insights for users.
          </div>
          </div>
        </Card>
        <Card className="card-styles text-area" as="article">
          <div style={{marginLeft: "20px", marginRight: "20px", textAlign: "left"}}>
          <div style={{height: '20px'}}></div>
          <div className="title"><u style={{textDecorationColor: "gold"}}>Market Insights:</u></div>
          <div style={{height: '20px'}}></div>
          <div className="title" style={{fontSize: '12px'}}>
            The global brain and body data market is expanding rapidly, with an estimated worth of [insert relevant statistics here]. This underlines the significance of addressing challenges in data ownership and incentivizing user participation to unlock the full potential of this burgeoning market.
            </div>
          <div style={{height: '20px'}}></div>
          </div>
        </Card>
        <Card className="card-styles text-area" as="article">
          <div style={{marginLeft: "20px", marginRight: "20px", textAlign: "left"}}>
          <div style={{height: '20px'}}></div>
          <div className="title"><u style={{textDecorationColor: "cyan"}}>Conclusion:</u></div>
          <div style={{height: '20px'}}></div>
          <div className="title" style={{fontSize: '12px'}}>
            This user-owned IoT network marks a paradigm shift in health and fitness data management. By returning control to individuals, incentivizing data sharing, and leveraging blockchain technology, we aspire to dismantle data silos, ushering in an era of collaborative research, personalized health insights, and individual empowerment.
          </div>
          <div style={{height: '20px'}}></div>
          </div>
        </Card>
        <Card className="card-styles text-area" as="article">
          <div style={{marginLeft: "20px", marginRight: "20px", textAlign: "left"}}>
          <div style={{height: '20px'}}></div>
          <a className="title" href="https://github.com/blueberryxtech/ic-mind-body-canister" target="_blank" rel="noopener noreferrer">
            <Button variant="contained" color="primary">
              <img src="https://cdn.shopify.com/s/files/1/0304/7905/7027/files/github-logo-w.png?v=1704815042" width="32px" alt="github" />
              <div style={{width: '10px'}}></div>
              available on github
            </Button>
          </a>
          <div style={{height: '20px'}}></div>
          </div>
        </Card>
      </Container>
    </div>
  );
}
