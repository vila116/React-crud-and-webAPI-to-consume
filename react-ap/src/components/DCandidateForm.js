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
                onChange={handleInputChange}
                />
                <TextField
                name ="email"
                label="Email"
                variant="outlined"
                value ={values.email}
                onChange={handleInputChange}
                />
                <div>bloodGroup</div>
            </Grid>
            <Grid item xs={6}></Grid>
            <TextField
                name ="mobile"
                label="Mobile"
                variant="outlined"
                value ={values.mobile}
                onChange={handleInputChange}
                />
                <TextField
                name ="age"
                label="Age"
                variant="outlined"
                value ={values.age}
                onChange={handleInputChange}
                />
                <TextField
                name ="address"
                label="Address"
                variant="outlined"
                value ={values.address}
                onChange={handleInputChange}
                />
           </Grid>
        </form>
    );
}
export default DcandidatesFrom;