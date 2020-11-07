import { colors } from '@material-ui/core'
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import NestedList from './NestedList'
import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import label from '@material-ui/core/FormLabel'


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

function Contents() {
  const classes = useStyles();
  return (

    <div className={classes.root}>
      <AppBar position="static" class="DivMarginContentInner">

        <Table >
          <TableBody>
            <TableRow>
              <TableCell  >
                <div >
                  <NestedList></NestedList>
                </div>
              </TableCell>
              <TableCell >
                <div className="DivContents">
                  <div className="DivContentsInner">
                    <br>
                    </br>
                    <label class="ContentMainLable">
                      PROPER Nouns
              </label>
                    <br>
                    </br>
              This is contents Page.This is contents Page.This is contents Page.This is contents Page.This is contents Page
              <br>
                    </br>
              This is contents Page.This is contents Page.This is contents Page.This is contents Page.This is contents Page
              <br>
                    </br>
              This is contents Page.This is contents Page.This is contents Page.This is contents Page.This is contents Page
              <br>
                    </br>
              This is contents Page.This is contents Page.This is contents Page.This is contents Page.This is contents Page
              <br>
                    </br>
              This is contents Page.This is contents Page.This is contents Page.This is contents Page.This is contents Page
              <br>
                    </br>
              This is contents Page.This is contents Page.This is contents Page.This is contents Page.This is contents Page
              <br>
                    </br>
              This is contents Page.This is contents Page.This is contents Page.This is contents Page.This is contents Page


              </div>
                </div>
              </TableCell>

            </TableRow>

          </TableBody>
        </Table>









      </AppBar>
    </div>
  )
}
export default Contents