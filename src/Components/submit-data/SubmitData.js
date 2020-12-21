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

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



import Footer from '../Footer'
import ButtonAppBar from '../ButtonAppBar'
import Signup from '../register-page/Signup';
import TextField from "@material-ui/core/TextField";
//import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { isConstructorDeclaration } from 'typescript';



const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

class SubmitData extends Component {
    
    
    
    constructor(props)
    {
        super(props);
        this.fnSubmitData = this.fnSubmitData.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
        this.state = {
            SoilMoisture :"",
            SoilTemperature:"",
            SoilpH:"",
            SunLight:"",
            EnvTemp:"",
            PlotNo:"1",
            PostedDateTime:Date.now()

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

    

    fnSubmitData() {
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

        let strErr = "";
        if (this.state.SoilMoisture == "") {
            strErr = strErr + "Please select Soil Moisture\n";

        }
        if (this.state.SoilTemperature == "") {
            strErr = strErr + "Please enter Soil Temperature\n";

        }
        if (this.state.SoilpH == "") {
            strErr = strErr + "Please enter Soil PH\n";

        }
        if (this.state.SunLight == "") {
            strErr = strErr + "Please select SunLight\n";

        }
        if (this.state.EnvTemp == "") {
            strErr = strErr + "Please enter Environmental Temperature\n";

        }

        if (strErr != "") {
            alert(strErr);
        }
        else {
            try {
                alert(this.state.SoilMoisture + "\n" + this.state.SoilTemperature + "\n" + this.state.SoilpH + "\n" + this.state.SunLight + "\n" + this.state.EnvTemp);
                //firebase.auth().createUserWithEmailAndPassword(this.state.Email,this.state.Password);
                const db = firebase.firestore();

                alert(db);
                // Add a new document in collection "cities"
                /*
                db.collection("Measurements").doc("Temperature").set({
                    SoilMoisture: this.state.SoilMoisture,
                    SoilTemperature: this.state.SoilTemperature,
                    SoilpH: this.state.SoilpH,
                    SunLight: this.state.SunLight,
                    EnvTemp: this.state.EnvTemp,
                })
                */

                alert(this.state.PlotNo);
                alert(this.state.PostedDateTime);

                db.collection("InputData").add({
                    PlotNo:this.state.PlotNo,
                    SoilMoisture: this.state.SoilMoisture,
                    SoilTemperature: this.state.SoilTemperature,
                    SoilpH: this.state.SoilpH,
                    SunLight: this.state.SunLight,
                    EnvTemp: this.state.EnvTemp,
                })

                db.collection("Users").add({
                    FirstName: "Tushar",
                    LastName:"Kashid",
                })




                alert(db.collection("Measurements").doc("Temperature").value);
            }
            catch (error) {
                alert(error.message);
            }
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
                            <TableCell>

                            <table class="TableParent">
                                <tr>
                                    <td>
                                    <div class="DivMarginSignUp">
                                <div class="DivMarginCreateAccount">
                        
                                            <div class='HeaderSection'>Measurement Parameters
</div>                                         
                                            <div class='DetailsSection'>         
                                            <div>

                                                <FormControl variant="outlined" >
                                                    <InputLabel htmlFor="outlined-PlotNo-native-simple">Plot No</InputLabel>
                                                    <Select
                                                    native
                                                    value={this.state.PlotNo}
                                                    onChange={this.HandleChange}
                                                    label="PlotNo"
                                                    inputProps={{
                                                        name: 'PlotNo',
                                                        id: 'outlined-PlotNo-native-simple',
                                                    }}
                                                    style={{
                                                        
                                                        height: "50px",
                                                        width:"225px",
                                                    }}
                                                    >
                                                    
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                    </Select>
                                                </FormControl>
                                                
                                                </div>

                                                <div>

                                                <TextField
                                                    label="Posted Date Time"
                                                    variant="outlined"
                                                    id='idPostedDateTime'
                                                    name = "PostedDateTime"
                                                    type = ""
                                                    value = {this.state.PostedDateTime}
                                                    onChange={this.HandleChange}
                                                />
                                                
                                                </div>

                                                <div>

                                                <FormControl variant="outlined" >
                                                    <InputLabel htmlFor="outlined-SoilMoisture-native-simple">Soil Moisture</InputLabel>
                                                    <Select
                                                    native
                                                    value={this.state.SoilMoisture}
                                                    onChange={this.HandleChange}
                                                    label="SoilMoisture"
                                                    inputProps={{
                                                        name: 'SoilMoisture',
                                                        id: 'outlined-SoilMoisture-native-simple',
                                                    }}
                                                    style={{
                                                        
                                                        height: "50px",
                                                        width:"225px",
                                                    }}
                                                    >
                                                    <option aria-label="None" value="" />
                                                    <option value={1}>Dry</option>
                                                    <option value={2}>Dry+</option>
                                                    <option value={3}>Nor</option>
                                                    <option value={4}>Wet</option>
                                                    <option value={5}>Wet+</option>
                                                    </Select>
                                                </FormControl>
                                                
                                                </div>
                                                <div>
                                                <TextField
                                                    label="Soil Temperature (-9~50°c)"
                                                    variant="outlined"
                                                    id='idSoilTemperature'
                                                    name = "SoilTemperature"
                                                    value = {this.state.SoilTemperature}
                                                    onChange={this.HandleChange}
                                                />
                                                </div>
                                                <div>
                                                <TextField
                                                    label="Soil pH (3.5~9)"
                                                    variant="outlined"
                                                    id='idSoilpH'
                                                    name = "SoilpH"
                                                    value = {this.state.SoilpH}
                                                    onChange={this.HandleChange}
                                                />
                                                </div>
                                                <div>
                                                
                                                <FormControl variant="outlined" >
                                                    <InputLabel htmlFor="outlined-SunLight-native-simple">SunLight</InputLabel>
                                                    <Select
                                                    native
                                                    value={this.state.SunLight}
                                                    onChange={this.HandleChange}
                                                    label="sunLight"
                                                    inputProps={{
                                                        name: 'SunLight',
                                                        id: 'outlined-SunLight-native-simple',
                                                    }}
                                                    style={{
                                                        
                                                        height: "50px",
                                                        width:"225px",
                                                    }}
                                                    >
                                                    <option aria-label="None" value="" />
                                                    <option value={1}>Low-</option>
                                                    <option value={2}>Low</option>
                                                    <option value={3}>Low+</option>
                                                    <option value={4}>Nor-</option>
                                                    <option value={5}>Nor</option>
                                                    <option value={6}>Nor+</option>
                                                    <option value={7}>High-</option>
                                                    <option value={8}>High</option>
                                                    <option value={9}>High+</option>
                                                    
                                                    </Select>
                                                </FormControl> 


                                                </div>
                                                <div>
                                                <TextField
                                                    label="Environmental Temperature (-9~50°c)"
                                                    variant="outlined"
                                                    id='idEnvTemp'
                                                    name = "EnvTemp"
                                                    value = {this.state.EnvTemp}
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
                                            width:"225px",
                                        }}
                                        onClick={this.fnSubmitData}
                                          

                                    >
                                        <ExitToAppIcon></ExitToAppIcon>Submit Data
            </Button>
                                                </div>
                                                </div>

                                                

                        
                                    </div>
                                    
                                </div>
                                    </td>
                                        <td class="tdHalf">

                                        <div class='GridSection'>         
                                                This is another Table

                                <div class='GridSection'>
                                                    Existing Data
                                                    <Grid container direction="row" justify="center" alignItems="center">
                                                        <Grid container item xs={12} spacing={3}>
                                                            <React.Fragment>
                                                                <Grid item xs={4}>
                                                                    <Paper >item</Paper>
                                                                </Grid>
                                                                <Grid item xs={4}>
                                                                    <Paper >item</Paper>
                                                                </Grid>
                                                                <Grid item xs={4}>
                                                                    <Paper >item</Paper>
                                                                </Grid>
                                                            </React.Fragment>
                                                        </Grid>
                                                    </Grid>
                                                </div>
                                            </div>

                                        </td>

                                </tr>
                            </table>


                                
                            
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
export default SubmitData