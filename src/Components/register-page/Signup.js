import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';



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

function Signup(){
    const classes = useStyles();
    return(
        <div class="DivMarginSignUpInner">
            <AppBar position="static" class="DivMarginSignUpInner">
                <Table className={classes.table} aria-label="simple table" class="TableContents" >
                    <TableBody>
                        <TableRow >
                            <TableCell >
                                <div class='DivGroup'>
                            <div class='HeaderRow'>
                            The Anatomy of a Letter in English
                            </div>
                            
                            
                            
                            
                            <div class='DetailsRow'>
                            Before starting a letter, you should know the fundamental features of a letter. Let’s see them. Remember, an email is a letter, too.
                            </div>
                            
                            <div class='DetailsRow'>
                            There are following types of Parts of the Speech
                            </div>
                            
                            <div >
                                <div class='Margin20px'>
                            <ul >
                            <li>
                                Nouns
                            </li>
                            <li>
                                Adjective
                            </li>
                            <li>
                                Verbs
                            </li>
                            <li>
                                Conjunctions
                            </li>
                            </ul>
                            </div>
                            </div>
                            </div>

                            <div class='HeaderRow'>
                            The Anatomy of a Letter in English
                            </div>
                            
                            
                            
                            
                            <div class='DetailsRow'>
                            Before starting a letter, you should know the fundamental features of a letter. Let’s see them. Remember, an email is a letter, too.
                            </div>
                            
                            <div class='DetailsRow'>
                            There are following types of Parts of the Speech
                            </div>
                            
                            <div >
                                <div class='Margin20px'>
                            <ul >
                            <li>
                                Nouns
                            </li>
                            <li>
                                Adjective
                            </li>
                            <li>
                                Verbs
                            </li>
                            <li>
                                Conjunctions
                            </li>
                            </ul>
                            </div>
                            </div>
                            <div class='HeaderRow'>
                            The Anatomy of a Letter in English
                            </div>
                            
                            
                            
                            
                            <div class='DetailsRow'>
                            Before starting a letter, you should know the fundamental features of a letter. Let’s see them. Remember, an email is a letter, too.
                            </div>
                            
                            <div class='DetailsRow'>
                            There are following types of Parts of the Speech
                            </div>
                            
                            <div >
                                <div class='Margin20px'>
                            <ul >
                            <li>
                                Nouns
                            </li>
                            <li>
                                Adjective
                            </li>
                            <li>
                                Verbs
                            </li>
                            <li>
                                Conjunctions
                            </li>
                            </ul>
                            </div>
                            </div>

                            
                            </TableCell>
                        </TableRow>
                        
                        
                    </TableBody>
                </Table>
            </AppBar>
        </div>
    );
};
export default Signup;