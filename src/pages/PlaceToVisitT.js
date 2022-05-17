import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Details from './Details';
import places from './places';
import useWindowPosition from './useWindowPosition';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
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
        color: '#5AFF3D',
        fontSize: '4rem',
    },


}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="place-to-visit-T">
          <Details place={places[0]} checked={checked} />
        

          <Toolbar/>
     
      </div>



  );

}
