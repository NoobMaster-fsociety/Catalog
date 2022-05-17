import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import howtoorder from './assets/island2.png'
import { AppBar, Button, Toolbar, Collapse } from '@material-ui/core';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    background: 'rgba(0,0,0,0.4)',
    margin: '20px',
  },
  media: {
    height: 650,
  },
  title: {
 
    fontWeight: 'bold',
    fontSize: '1.5rem',
      color: '#ff9100',
  },
  desc: {
   
    fontSize: '1.1rem',
    color: "Transparent",
    },
    container: {
        textAlign: 'center',
    },
    button: {
        color: '#ff9100',
    },
});

export default function ImageCard({ place, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
                  image={howtoorder}
                  component="img"
                  height="140"

              />
          

              <div className={classes.container}>



                  <Scroll to="place-to-visit-T" smooth={true}>
                      <Button className={classes.button}>
                          <h5 className={classes.title}>
                              <span className={classes.colorTitle}>More</span>
                          </h5>
                          <ExpandMoreIcon className={classes.goDown} sx={{ fontSize: 40 }} />
                      </Button>
                  </Scroll>

              </div>
       
      </Card>
    </Collapse>
  );
}
