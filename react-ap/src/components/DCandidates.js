import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions/dCandidate";
const Dcandidates =(props)=>{
    useEffect(()=>{

        props.fetchAllDcandidates();
    },[])//component did mount
    return(<div>
        <h2>DCandidates from src/components/dca.js</h2>
        <p>This is a simple component.</p>
    </div>);
}

const mapStateToProps = state =>({ 
    dCandidatelist : state.dCandidate.list
})
// map action creator 
const mapActionToProps = {
    fetchAllDcandidates : actions.fetchAll
}
export default connect(mapStateToProps,mapActionToProps)(Dcandidates);