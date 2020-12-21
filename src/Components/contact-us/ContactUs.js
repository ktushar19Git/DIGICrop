import { colors } from '@material-ui/core'
import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { Email, RadioButtonUncheckedSharp } from '@material-ui/icons';
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

class ContactUs extends Component {
    
    
    constructor(props)
    {
        super(props);
        this.fnCreateAccount = this.fnCreateAccount.bind(this);
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
           alert(this.state.Email)
        firebase.auth().createUserWithEmailAndPassword(this.state.Email,this.state.Password);
        alert("User Added");
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
                                            <div class='HeaderSection'>Contact Information
</div>                                         
                                            <div class='ContactUsSection'>         
                                                <div>
                                                    Office : Digi-Crop Agriculture Solution Pvt. Ltd. -(CIN : U01400KA2020PTC138207)
                                                </div>
                                                <div>
                                                #33, 2nd Floor,1st Cross Road, Behind Bhanu Nursing Home Road,
                                                </div>
                                                <div>
                                                Bommanahalli, Bangalore Karanataka-560068 | INDIA 
                                                </div>
                                                <div>
                                                www.digi-crop.com
                                                </div>
                                                <div>
                                                +91 88 67 498 767  | +91 91 48 705 605
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
export default ContactUs