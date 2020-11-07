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

function Footer(){
    const classes = useStyles();
    return(
    
        <div className={classes.root}>
      <AppBar position="static" class="DivMarginFooterInner" >
            
            This is Footer<br>
            </br>
            <br>
            </br>
            <br>
            </br>
            This site is produced and maintained by Tushar Kashid
            
            <br>
            </br>
            <div class="DivFooterCopyright">
                @copyright: 2020-2021

            </div>
            

        
            
          
        </AppBar>
        </div>
    )
}
export default Footer