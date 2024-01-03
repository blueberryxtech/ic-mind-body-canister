//process
import * as React from 'react';
import { useState, useEffect } from "react";
import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent } from "@dfinity/agent";
import { mind_body, createActor } from "../../../../declarations/mind_body"

//UI
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { alpha, useTheme } from '@mui/material/styles';
import { bgGradient } from '../../theme/css';
import Logo from '../../components/logo';
import AppWidgetSummary from '../../modules/app-widget-summary';

// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();

  const [icpId, setIcpId] = React.useState("");
  const [ethereumId, setEthereumId] = React.useState("");

  const loginAction = async () => {
    // create an auth client
    let authClient = await AuthClient.create();

    // start the login process and wait for it to finish
    await new Promise((resolve) => {
        authClient.login({
            identityProvider: process.env.II_URL,
            onSuccess: resolve,
        });
    });

    // At this point you're authenticated, and you can get the identity from the auth client:
    const identity = authClient.getIdentity();
    // Using the identity obtained from the auth client, you can create an agent to interact with the IC.
    const agent = new HttpAgent({identity});
    // Using the interface description of our webapp, you create an actor that you use to call the service methods.
    actor = createActor("pvznn-pyaaa-aaaan-qlljq-cai", {
        agent,
    });

    loadICPid();

    return false;
  };

  const loadICPid = async () => {
    // get ICP-ID
    const icpIdValue = await mind_body.getIcpId();
    window.$icpId = icpIdValue;
    setIcpId(icpIdValue);
  }

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">connect</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Don’t have an ICP account?
            <Link variant="subtitle2" href="https://identity.ic0.app/" sx={{ ml: 0.5 }}>
              Get started
            </Link>
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              onClick={loginAction}
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Typography variant="subtitle2" sx={{ ml: 0.5 }}>
                ICP
              </Typography>
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Typography variant="subtitle2" sx={{ ml: 0.5 }}>
                ethereum
              </Typography>
            </Button>
          </Stack>
        </Card>
        <Card sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
            marginTop: 10
          }}>
          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            icp identity: 
            <AppWidgetSummary
              title={window.$icpId}
              color="success"
            />
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            ethereum identity: 
            <AppWidgetSummary
              title={window.$ethereumId}
              color="success"
            />
          </Typography>
        </Card>
      </Stack>
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        
      </Stack>
    </Box>
  );
}
