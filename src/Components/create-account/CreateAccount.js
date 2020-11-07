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
import { useHistory } from "react-router-dom";



import Footer from '../Footer'
import ButtonAppBar from '../ButtonAppBar'
import Signup from '../register-page/Signup';
import TextField from "@material-ui/core/TextField";

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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

function CreateAccount() {
    const classes = useStyles();

    const history = useHistory();

    async function onCreateAccount() {
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
      }

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
                                    <React.Fragment>
                                        <h1>
                                            
        <React.Fragment>
                                            <div class='HeaderSection'>Sign up for your account
</div>                                         
                                            <div class='DetailsSection'>         
                                                <div>
                                                <TextField
                                                    label="First Name"
                                                    variant="outlined"
                                                    id='idFirstName'
                                                    
                                                    
                                                />
                                                </div>
                                                <div>
                                                <TextField
                                                    label="Last name"
                                                    variant="outlined"
                                                    id='idLastName'
                                                />
                                                </div>
                                                <div>
                                                <TextField
                                                    label="Email Address"
                                                    variant="outlined"
                                                    id='idEmail'
                                                />
                                                </div>
                                                <div>
                                                <TextField
                                                    label="Phone Number"
                                                    variant="outlined"
                                                    id='idPhone'
                                                />
                                                </div>
                                                <div>
                                                <TextField
                                                    label="Password"
                                                    type="password"        
                                                    variant="outlined"
                                                    id='idPassword'
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
                                        onClick={() => {
                                            onCreateAccount();
                                          }}

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
export default CreateAccount