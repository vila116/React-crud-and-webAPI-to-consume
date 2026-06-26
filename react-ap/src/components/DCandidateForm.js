import React , { useState } from 'react'; 
import {Grid, TextField} from '@mui/material';
const initalFieltValues={
    fullname :'',
    mobile:'',
    email:'',
    age:'',
    bloogGroup:'',
    address:'',
}

const DcandidatesFrom=(props)=>{
    
    const[values,setvalues]=useState(initalFieltValues);
    const handleInputChange =e=>{
    const{name,value} = e.target
    setvalues({
        ...values,
        [name]:value,

    })
}
    return(
        <form autoComplete="off" noValidate>
           <Grid container>
            <Grid item xs={6}>
                <TextField
                name ="fullname"
                label="Full Name"
                variant="outlined"
                value ={values.fullname}
                onchange={handleInputChange}/>
            </Grid>
            <Grid item xs={6}></Grid>
           </Grid>
        </form>
    );
}
export default DcandidatesFrom;