import React from 'react';
import { Card } from "react-bootstrap";

export default function LearnMore() {
  return (
        <div>
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
              <ul className="title" style={{ listStylePosition: "outside", fontSize: '10px'}}> 
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
        </div>
    );
}