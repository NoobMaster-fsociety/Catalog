import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import background from "./back.png"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as serviceWorker from './serviceWorker';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';




const theme = createTheme({
  palette: {
    primary: {
      main: '#9B3C21',
    },
    secondary: {
      main: '#000000',
    },
    text:{
      disabled: '#000000'
    }
  },
});
const myStyle = {
    backgroundImage:
        `url(${background})`,
    height: "100ch",
    width: "100%",
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

ReactDOM.render(
  <React.StrictMode>
        <ThemeProvider theme={theme}>
       

<BrowserRouter>
        <App/>
</BrowserRouter>
</ThemeProvider>


    
  </React.StrictMode>,
  document.getElementById('root')
);


