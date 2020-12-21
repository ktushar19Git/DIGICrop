import { colors } from '@material-ui/core'
import React,{Component} from 'react'
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

import firebase from '../../services/firebase';

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

class LoginPage extends Component {

    constructor(props)
    {
        super(props);
        this.fnLogin = this.fnLogin.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
        this.state = {
            Email :"",
            Password:""
        }
    }
    HandleChange(e)
    {
        this.setState(
            {
                [e.target.name] : e.target.value
            }
        )
    }
    
    fnLogin() 
    {
        
       try
       {
           //alert(this.state.Email)

           let strErr = "";   
        if(this.state.Email=="")
        {
            strErr = strErr + "Please enter Email Address\n";   

        }
        if(this.state.Password=="")
        {
            strErr = strErr + "Please enter Password\n";   

        }
        
        if(strErr!="")
        {
            alert(strErr);
        }
        else
        {
            firebase.auth().signInWithEmailAndPassword(this.state.Email,this.state.Password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
                });

        }

           

        
       }
       catch (error) 
       {
        alert(error.message);
        }

      }

    render()
    {
    return(

        <div  >

            <div class="divMainCurve">
                <Table  class="TableParent" >
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
                                                    name = "Email"
                                                    value = {this.state.Email}
                                                    onChange={this.HandleChange}
                                                />
                                                </div>
                                                <div>
                                                <TextField
                                                    label="Phone Number"
                                                    
                                                    variant="outlined"
                                                    name = "Phone"
                                                    value = {this.state.Phone}
                                                    onChange={this.HandleChange}
                                                />
                                                </div>
                                                <div>
                                                <TextField
                                                    label="Password"
                                                    type="password"        
                                                    variant="outlined"
                                                    name = "Password"
                                                    value = {this.state.Password}
                                                    onChange={this.HandleChange}
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
                                        onClick={this.fnLogin}

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

}
export default LoginPage