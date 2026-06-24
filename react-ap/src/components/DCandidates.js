import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions/dCandidate";
import { Grid,Paper, Table, TableContainer, TableHead,TableRow,TableCell, TableBody}  from '@mui/material';
import {withStyles} from '@mui/styles';
import DcandidatesFrom from './DCandidateForm';

const styles = theme =>({
    paper :{
    //     margin: theme.spacing(2),
    //     padding: theme.spacing(2)
    }
})
const Dcandidates =(props)=>{
    useEffect(()=>{

        props.fetchAllDcandidates();
    },[])//component did mount
    return(
        <Paper sx={{m:2,p:2}} elevation={3}>
            <Grid container >
                <Grid size={6}>
                    <DcandidatesFrom/>
                </Grid>
                <Grid size={6}>
                    <TableContainer>
                        <Table>
                           <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Mobile</TableCell>
                                <TableCell>BloodGroup</TableCell>                               
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.dCandidatelist.map((record,index)=>{
                                        return(
                                            <TableRow key={index} >
                                                <TableCell>{record.fullName}</TableCell>
                                                <TableCell>{record.mobile}</TableCell>
                                                <TableCell>{record.bloodGroup}</TableCell>
                                            </TableRow>

                                        );

                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    );
}

const mapStateToProps = state =>({ 
    dCandidatelist : state.dCandidate.list
})
// map action creator 
const mapActionToProps = {
    fetchAllDcandidates : actions.fetchAll
}
export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(Dcandidates));