import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";

import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Avatar from '@material-ui/core/Avatar';


import './Styles.css';
import './ProfileStyles.css';


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

export default function ButtonAppBar() {
  const classes = useStyles();

  const history = useHistory();

  async function onRegister() {
    
      history.push("/CreateAccount");
    
  }
  async function onLoginPage() {
    
	history.push("/LoginPage");
  
}

  return (
    <div className={classes.root}>
      <AppBar position="static" class="DivMarginHeaderInner" >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <div class="menu-bar">
		<ul>
			<li class="active"><a href="#">Home</a></li>
			
			<li><a href="#">Farmers</a>

				<div class="sub-menu-1">
					<ul>
						<li><a href="#">Nouns</a></li>
						<li><a href="#">Adjectives</a></li>
						<li><a href="#">Verbs</a></li>
						<li><a href="#">Adverbs</a></li>
						<li><a href="#">Conjunctions</a></li>
						<li><a href="#">Prepositions</a></li>
						<li><a href="#">Interjections</a></li>
					</ul>
					
				</div>

			</li>
			
			<li><a href="#">Customers</a>
				<div class="sub-menu-1">
					<ul>
						<li><a href="#">Full Stops</a></li>
						<li><a href="#">Capital Letters</a></li>
						<li><a href="#">Question Marks</a></li>
						<li><a href="#">Exclamation Marks</a></li>
						<li><a href="#">Commas</a></li>
						<li><a href="#">Colons</a></li>
						<li><a href="#">Semicolons</a></li>
					</ul>
					
				</div>
			</li>
			<li><a href="#">Contact Us</a></li>
			<li><a href="#">Career</a></li>
		</ul>
	</div>
          </Typography>
		  
          <Button color="primary" variant="outlined"
                                        style={{
                                            border: "1px solid #2d70d8",
                                            color: "black",
                                            height: "50px",
                                            backgroundColor: "goldenrod",
                                            fontWeight: "bolder",
											margin: "10px",
											padding:"10px",
                                        }} onClick={() => {
                onRegister();
              }}
			  ><GroupIcon></GroupIcon>Register</Button>
          <Button color="primary" variant="outlined"
                                        style={{
                                            border: "1px solid #2d70d8",
                                            color: "black",
                                            height: "50px",
                                            backgroundColor: "goldenrod",
                                            fontWeight: "bolder",
											margin: "10px",
											padding:"10px",
                                        }} onClick={() => {
                onLoginPage();
              }}><ExitToAppIcon></ExitToAppIcon>Login</Button>
            <div class="menu-bar_Profile">
             <ul>
                <li><a href="#"><Avatar alt="Tushar Kashid" src='/images/Avatar.jpeg' /></a>

                  <div class="sub-menu-1">
                    <ul>
                      <li><a href="#">Update your personal details</a></li>
                      <li><a href="#">Profile Settings</a></li>
                      <li><a href="#">Sign Out</a></li>
                      
                    </ul>
                    
                  </div>

                  </li>
              </ul>   
              </div>

		  
        </Toolbar>
      </AppBar>
    </div>
  );
}