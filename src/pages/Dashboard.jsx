import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import LOGO from './first.png';


const Img = styled('img')({

  display: 'block',
  maxWidth: '125%',
  maxHeight: '50%',
});


export default function ComplexGrid() {
  return (
      <Paper
          sx={{

              maxWidth: "100%",
              maxHeight: "50%",
              flexGrow: 1,
              backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            
          }}
      >
          <Grid container spacing={2}>
              <Grid item xl={10}>
                  <Grid item>
                  
                          <Img alt="complex" src={LOGO} />
                      <Typography>Test</Typography>
                  </Grid>

              </Grid>

          </Grid>
      </Paper>
  );
}

  