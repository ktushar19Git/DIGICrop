import { colors, Container } from '@material-ui/core'
import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { AddAlert, Email, RadioButtonUncheckedSharp } from '@material-ui/icons';
import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useHistory } from "react-router-dom";

import firebase from '../../services/firebase';




import Footer from '../Footer'
import ButtonAppBar from '../ButtonAppBar'
import Signup from '../register-page/Signup';
import TextField from "@material-ui/core/TextField";

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { isConstructorDeclaration } from 'typescript';

import { Alert, AlertTitle } from '@material-ui/lab';


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

class CreateAccount extends Component {
    
    
    constructor(props)
    {
        super(props);
        this.fnCreateAccount = this.fnCreateAccount.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
        this.fnShowError = this.fnShowError.bind(this);
        
        this.state = {
            Email :"",
            Password:"",
            strErrMessage:"",
            EmailError:"",
            PasswordError:""

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

    fnShowError(Error)
    {
        this.state.strErrMessage = Error;
                //this.ErrorBox.visible = true;     
        document.getElementById("DivErrorContainer").style.display = "block";


    }
    fnValidate= () =>
    {
        
        let EmailError= "";
        let PasswordError = "";

        if(this.state.Email=="")
        {
            EmailError = "Please enter Email"
            this.setState({EmailError});
        }
        if(this.state.Password=="")
        {
            PasswordError = "Please enter Password"
            this.setState({PasswordError});
        }

        if(EmailError+PasswordError);

        if(EmailError !="" || PasswordError!="")
        {
            return false;
        }
        return true;

    }    

    fnCreateAccount() {
        /*
        try {
          await signUp(
            "Tushar",
            "ktushar19@gmail.com",
            "Tushar@1909"
          );
          history.push("/");
        } catch (error) {
          alert(error.message);
        }
        */
       try
       {
        
        
        const isValid = this.fnValidate();
        if(!isValid)
        {
            //alert(strErr);

            //this.fnShowError(strErr);
            

        }
        else
        {
            firebase.auth().createUserWithEmailAndPassword(this.state.Email,this.state.Password);
            alert("User Added");
        }


        
       }
       catch (error) {
        alert(error.message);
      }

      }
      render()
      {

    return (

        <div>

            
            
            
            

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
                                    <React.Fragment>
                                        <h1>
                                            
        <React.Fragment>
                                            <div class='HeaderSection'>Sign up for your account
                                            </div>                                         
                                            <Container id="DivErrorContainer" style={{display:'none'}}>
                                                <Alert severity="error">{this.state.strErrMessage}</Alert>
                                            </Container>
                                            <div class='DetailsSection'>         
                                                <div>
                                                <TextField
                                                    label="First Name"
                                                    variant="outlined"
                                                    id='idFirstName'
                                                    value = {this.state.FirstName}
                                                    onChange={this.HandleChange}
                                                    name = "FirstName"
                                                    
                                                />
                                                </div>
                                                <div>
                                                <TextField
                                                    label="Last name"
                                                    variant="outlined"
                                                    id='idLastName'
                                                    name = "LastName"
                                                    value = {this.state.LastName}
                                                    onChange={this.HandleChange}
                                                />
                                                </div>
                                                <div>
                                                <TextField
                                                    label="Email Address"
                                                    variant="outlined"
                                                    id='idEmail'
                                                    value = {this.state.Email}
                                                    onChange={this.HandleChange}
                                                    name = "Email"
                                                />
                                                {this.state.EmailError ?
                                                <div class="DivErrorMessage">{this.state.EmailError}</div> :null}
                                                
                                                </div>
                                                <div>
                                                <TextField
                                                    label="Phone Number"
                                                    variant="outlined"
                                                    id='idPhone'
                                                    value = {this.state.Phone}
                                                    onChange={this.HandleChange}
                                                    name = "Phone"
                                                />
                                                </div>
                                                <div>
                                                <TextField
                                                    label="Password"
                                                    type="password"        
                                                    variant="outlined"
                                                    id='idPassword'
                                                    value = {this.state.Password}
                                                    onChange={this.HandleChange}
                                                    name = "Password"
                                                />
                                                {this.state.EmailError ? <div class="DivErrorMessage">{this.state.PasswordError}</div>:null}
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
                                        onClick={this.fnCreateAccount}
                                          

                                    >
                                        <ExitToAppIcon></ExitToAppIcon>Register
            </Button>
                                                </div>
                                                </div>

                                            </React.Fragment>

                                        </h1>
                                    </React.Fragment>
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
export default CreateAccount