import {
    Typography,
    IconButton,
    Toolbar,
    Drawer,
    Grid,
    Box,
    ButtonGroup,
    Button,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    CssBaseline,
    ButtonBase,
    Slide,
    Dialog,
    AppBar,
    List,
    Tooltip,
    Alert,

  
} from '@mui/material';

import React, { useContext, useEffect, useState, } from 'react'
import {
    styled, alpha
} from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';
import { Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
///ICONS

import LOGO from './icons/user.png';

import InfoIcon from '@mui/icons-material/Info';
import SortIcon from '@mui/icons-material/Sort';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link as Scroll } from 'react-scroll';


///Messenger
import MessengerCustomerChat from 'react-messenger-customer-chat';

import axios from 'axios';


const drawerWidth = 150;
// Custom Header


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

/********************************************************* */
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2)
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1)
    }
}));
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    appbar: {
        background: 'none',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    icon: {
        color: '#000',
        fontSize: '2rem',
    },
    colorText: {
        color: '#000',
    },
    colorsubText: {
        color: '#fff',
    },
    colorTitle: {
        color: '#ff9100',
    },

    container: {
        textAlign: 'center',
    },
    title: {
        color: '#000',
        fontSize: '4.5rem',
    },
    goDown: {
        color: '#ff9100',
        fontSize: '4rem',
    },

}));


//*******************************************************************

const Mainpage = () => {

   

    const [auth, setAuth] =useState(true);
    const [anchorEl, setAnchorEl] =useState(null);
    const [anchordt, setAnchordt] = useState(null);
    const [anchormenu, setAnchormenu] = useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handledetails = (event) => {
        setAnchordt(event.currentTarget);
    };

    const handleClose = () => {
        setAnchordt(null);
        setAnchorEl(null);
        setAnchormenu(null);
    };
    

    const openmenu = Boolean(anchormenu);
    const handleClickmenu = (event) => {
        setAnchormenu(event.currentTarget);
        
    };

    //***************************************************
  


    const [opensesame, setopensesame] = useState(false);

    const handleClickOpen = () => {
        setopensesame(true);
    };

    const handleClose1 = () => {
        setopensesame(false);
    };


    // const [drawerWidth,setdrawerWidth] = useState(240)



    // NAVIGATION TO ANOTHER PAGE
    let nv = useNavigate()


    //Hook for sidebar true or false
    const [open, setOpen] = useState(true)



    // CUSTOM BUTTON
    const buttons = [

        // Button Dashboard
    

        // // Button Stocks
        // <IconButton fullwidth color="secondary" onClick={(e) => { e.preventDefault(); nv("/Mainpage/Stocks") }}>
        //     <CheckroomIcon fontSize='large' />
        //     <Typography variant='h6' marginX={3} >Tshirts</Typography>
        // </IconButton>,


        // // Button Products
        // <IconButton fullwidth color="secondary" onClick={(e) => { e.preventDefault(); nv("/Mainpage/Products") }}>
        //     <CreditCardIcon margin='dense' fontSize='large' />
        //     <Typography variant='h6' marginX={3.5} >Cards</Typography>
        // </IconButton>,

        // // Button Sales Report
        // <IconButton fullwidth color="secondary" onClick={(e) => { e.preventDefault(); nv("/Mainpage/Salesreport") }}>
        //     <AutoGraphOutlinedIcon margin='dense' fontSize='large' />
        //     <Typography noWrap variant='h6' marginX={3.7}  >Test</Typography>
        // </IconButton>,

        // // Button Invoice
        // <IconButton fullwidth color="secondary" onClick={(e) => { e.preventDefault(); nv("/Mainpage/Invoice") }}>
        //     <FeedOutlinedIcon margin='dense' fontSize='large' />
        //     <Typography variant='h6' marginX={3.5} >test1</Typography>
        // </IconButton>,

    ];




    // Fetch data from database
    const [data,setData] = useState([])

    useEffect(() => {
        let isCancel = true
        // Update the document title using the browser API
        axios.get('http://localhost/REACTJS/cognate1%20api/category.php')
        .then(
            res=>{
               if(isCancel)
                {
                    setData(res.data)
                }
            }
        )
        // axios.get('http://localhost/REACTJS/cognate1%20api/ProductdataAPI.php')
        // .then(
        //     res=>{
        //        if(isCancel)
        //         {
        //             setData(res.data)
        //         }
        //     }
        // )

        return () => isCancel = false

      });
    
    // categort image
    const [category,setCategory] = useState([])
    const [item,setitem] = useState([])
    //   show image by category
    const category_function = (adas) => {
        axios.get('http://localhost/REACTJS/cognate1%20api/ProductdataAPI.php')
        .then(
            res=>setCategory(
                res.data.filter(e=>e.Product_category === adas)
            )
        )
    // console.log(adas)
    }




    const [state, setState] = useState({
        top: false,
       
    });

    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);

    const homePageStyle = theme => ({
        root: {
            width: "300px"
        },
        selected: {
            backgroundColor: "red !important",
            color: "white",
            fontWeight: 600
        }
    });

    const colors = () => {
       
    


            if ('Product_Status' == 'Not_Available')
                return ('green');
            else
                return ('gray');


       

    };
  


    
    return (
        <div>
            <div className={classes.root} id="header">
                <AppBar className={classes.appbar} elevation={0} color="transparent">
                    <Toolbar variant='dense'>
                    <Toolbar className={classes.appbarWrapper}>



                            <Scroll to="header" smooth={true}>
                                <Button>
                                  
                       

                            <Box
                                fixed
                                component='img'
                                marginY={2}

                                sx={{
                                    width: 65,
                                    height: 65,
                                }}
                                        src={LOGO} />




                                </Button>
                            </Scroll>
                          
                            <Toolbar />
                         
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                            >

                                <Button
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleClickmenu}
                                    color="inherit"
                                    endIcon={<KeyboardArrowDownIcon color="orange" />}
                                >
                                    <h3 className={classes.appbarTitle}>
                                        <span className={classes.colorText}>Products.</span>
                                    </h3>
                                </Button>
                             
                                <Menu
                                  
                                    id="menu-appbar"
                                    anchorEl={anchormenu}
                                    color="warning"
                                    classes={{ paper: classes.menuPaper }}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchormenu)}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem>

                                        <ButtonGroup
                                        fullWidth
                                        alignItems='flex-start'
                                        orientation="vertical"
                                        aria-label="vertical contained button group"
                                        variant="outlined">

                                        {data.map(e =>
                                        (
                                            <Button key={e.Cat_ID} variant='text' size="large" color="secondary"
                                                onClick={ea => {
                                                    ea.preventDefault()
                                                    // console.log(e.Product_category)
                                                    category_function(String(e.category))
                                                    handleClickOpen()
                                                    handleClose()
                                                }}

                                            >

                                                <Typography color="Black">   {e.category}</Typography>
                                            </Button>




                                        ))}

                                    </ButtonGroup>
                                    </MenuItem>

                                </Menu>


                            </Grid>


                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                            >


                                {/* Account circile */}


                                {auth && (
                                    <div>
                                        <Scroll to="footer" smooth={true}>
                                        <Button
                                        
                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            onClick={handleMenu}
                                            color="inherit"
                                        >
                                            <h3 className={classes.appbarTitle}>
                                                <span className={classes.colorText}>About Us</span>
                                            </h3>
                                        </Button>

                                    
                                        </Scroll>
                                    </div>
                                )}
                                <Scroll to="place-to-visit" smooth={true}>
                                    <Button
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"

                                        color="inherit"

                                    >
                                        <h3 className={classes.appbarTitle}>
                                            <span className={classes.colorText}>How to Order</span>
                                        </h3>
                                    </Button>
                                </Scroll>





                            </Grid>
                  



                        </Toolbar>
                    </Toolbar>
                </AppBar>

                <Collapse
                    in={checked}
                    {...(checked ? { timeout: 1000 } : {})}
                    collapsedHeight={50}
                >
                    <div className={classes.container}>

                        <Toolbar />
                        <Toolbar />
                        <h1 className={classes.title}>
                            Welcome to <br />
                            <span className={classes.colorTitle}>High Resolution.</span>
                        </h1>
                        <Scroll to="place-to-visit" smooth={true}>
                            <IconButton>
                                <ExpandMoreIcon className={classes.goDown} sx={{ fontSize: 40 }} />
                            </IconButton>
                        </Scroll>

                    </div>
                </Collapse>

            </div>
                
             
        

            <br />
            <br />
            <br />
            <br />

            <div className="App">

                <MessengerCustomerChat
                    pageId="101610252070213"
                    appId="557250899413123"
                />
            </div>

           


            <Dialog
                fullScreen
                open={opensesame}
                onClose={handleClose1}
                TransitionComponent={Transition}
                PaperProps={{
                    style: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                    },
                }}
            >
           

          
                <AppBar xs={{ position: 'fixed' }}>
                  
                    <Toolbar variant="dense">




                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose1}
                            aria-label="close"
                        >


                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                             Menu
                        </Typography>

                    

                    </Toolbar>

                   

                </AppBar>

                
                <Toolbar />
                <Toolbar variant="dense">


                 
                   

                    <ImageList sx={{ width: 1800, height: 800 }} cols={6} rowHeight={500} gap={20}>
                        {/* Mapping image */}

                        {category.map(

                            // For each process
                            item => (
                                <ImageListItem key={item.Product_ID}>

                                    {/* Image property */}
                                    <img
                                        src={item.Product_image}
                                        alt={item.Product_name}
                                        loading="lazy"
                                    />


                                    <ImageListItemBar
                                        title={<Typography variant="h4" color="White">{item.Product_name} </Typography>}
                                        subtitle={<Typography variant="h6" color="White">₱ {item.Product_price}   <br />
                                            {item.Product_category} <br />

                                            <Typography variant="h6" color={item.Product_Status === 'Available' ? ('green') : ('red')}> {item.Product_Status} </Typography>



                                        </Typography>}
                                        actionIcon={

                                            // pwede ka mag lagay ng onClick function dito men 

                                            <div>
                                                <IconButton
                                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                    onClick={handledetails}
                                                >
                                                    <InfoIcon />
                                                </IconButton>
                                                <Menu
                                                    id="ImageListItemBar"
                                                    anchorEl={anchordt}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'right',
                                                    }}
                                                    keepMounted
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'right',
                                                    }}
                                                    open={Boolean(anchordt)}
                                                    onClose={handleClose}
                                                >
                                                    <MenuItem onClick={handleClose}>
                                                        Sample details of the Item and it's materials
                                                        <Button size="small">Learn More</Button>


                                                    </MenuItem>

                                                </Menu>

                                            </div>


                                        }
                                    />








                                </ImageListItem>

                            )

                        )}

                    </ImageList>
                  
                </Toolbar>







            </Dialog>







        
        
                            </div>
         


        
        )
            
}
       

export default Mainpage