import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from './places';
import useWindowPosition from './useWindowPosition';
import { AppBar, Button, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@mui/icons-material/Sort';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
        },
    },
    goDown: {
        color: '#000000',
        fontSize: '4rem',
    },
    container: {
        textAlign: 'center',
    },
    button: {
        color: '#ff9100',
    },



}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="place-to-visit">
    
          <Collapse
                    in={checked}
                    {...(checked ? { timeout: 1000 } : {})}
                    collapsedHeight={50}
          >
              <ImageCard place={places[0]} checked={checked} />
          
                </Collapse>
          <Toolbar/>
        
      </div>



  );

}
