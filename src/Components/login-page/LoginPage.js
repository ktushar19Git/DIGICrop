import { colors } from '@material-ui/core'
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { RadioButtonUncheckedSharp } from '@material-ui/icons';
import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import DoneIcon from '@material-ui/icons/Done';


import Footer from '../Footer'
import ButtonAppBar from '../ButtonAppBar'
import Signup from '../register-page/Signup';
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function LoginPage() {
    const classes = useStyles();
    return (

        <div className="App" >

            <div class="divMainCurve">
                <Table className={classes.table} aria-label="simple table" class="TableParent" >
                    <TableBody>
                        <TableRow>
                            <TableCell >
                                <div class="DivMarginHeader">
                                    <ButtonAppBar></ButtonAppBar>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell >
                                <div class="DivMarginSignUp">
                                <div class="DivMarginCreateAccount">
                                    
                                        <h1>
                                            
        
                                            <div class='HeaderSection'>Log in to your account</div>
                                            <div class='DetailsSection'>
                                                <div>
                                                <TextField
                                                    label="Email Address"
                                                    
                                                    variant="outlined"
                                                />
                                                </div>
                                                <div>
                                                <TextField
                                                    label="Phone Number"
                                                    
                                                    variant="outlined"
                                                />
                                                </div>
                                                <div>
                                                <TextField
                                                    label="Password"
                                                    type="password"        
                                                    variant="outlined"
                                                />
                                                </div>
                                                
                                                <div>
                                                <Button
                                        variant="outlined"
                                        style={{
                                            border: "1px solid #2d70d8",
                                            color: "black",
                                            height: "50px",
                                            backgroundColor: "goldenrod",
                                            fontWeight: "bolder",
                                            marginBottom: "10px",
                                        }}

                                    >
                                        <DoneIcon></DoneIcon>Login
            </Button>
                                                </div>
                                                </div>        

                                        </h1>
                                    </div>
                                    
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell >
                                <div class="DivMarginFooter">
                                    <Footer></Footer>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>







        </div>
    );

}
export default LoginPage