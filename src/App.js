import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Box from '@material-ui/core/Box';
import Footer from './Components/Footer'



import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Contents from './Components/Contents'

import TextField from '@material-ui/core/TextField'
import ButtonAppBar from './Components/ButtonAppBar'
import { Container } from '@material-ui/core';
import { BorderAll } from '@material-ui/icons';
import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

import Signup from './Components/register-page/Signup';
import HomePage from './Components/home-page/HomePage';
import CreateAccount from './Components/create-account/CreateAccount';
import LoginPage from './Components/login-page/LoginPage';
import ContactUs from './Components/contact-us/ContactUs';
import SubmitData from './Components/submit-data/SubmitData';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useHistory,
} from "react-router-dom";


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

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/CreateAccount" exact component={CreateAccount} />
          <Route path="/LoginPage" exact component={LoginPage} />
          <Route path="/ContactUs" exact component={ContactUs} />
          <Route path="/SubmitData" exact component={SubmitData} />
        </Switch>
      </BrowserRouter>
  );
  
    
}

export default App;
