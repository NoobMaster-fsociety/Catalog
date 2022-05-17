import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Mainpage from './pages/Mainpage';
import PlaceToVisit from './pages/PlaceToVisit';
import PlaceToVisitT from './pages/PlaceToVisitT';
import background from "./back1.png"
import { FooterContainer } from './pages/footer'


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));
export default function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Mainpage />
            <PlaceToVisit />
            <PlaceToVisitT />
            <FooterContainer />
        </div>
    );
}
