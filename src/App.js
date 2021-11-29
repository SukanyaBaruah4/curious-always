
import React,{ useState} from 'react';
import {Navigate} from 'react-router-dom';


import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import './App.css';

export default function Login()  {
 
    const [values,setValues] = useState({
      name:'',
      password:'',
    });

    const [submitted, setSubmitted] =useState(false);
    const [valid,setValid]=useState(false);
    
    
    
    const handleNameChange =(event) => {
      event.persist();
      setValues((values) => ({
        ...values,
        name: event.target.value,
       }));  
    }
     
    const handlePasswordChange =(event) =>{
      event.persist();
      setValues((values) =>({
        ...values,
        password: event.target.value,
      }));
    };
   
    const handleSubmit = (e) =>  {
      e.preventDefault();
      setSubmitted(true);
      if(values.name && values.password){
       setValid(true);
      }
     
    }
    
   
    
   
    const avatarStyle={backgroundColor:'#4CAF50',padding:'10px',margin:'10px'}
    
    
        return(
          <Grid
           container
           direction='column'
           justify='center'
           alignItems='center'
           style={{ width:'100vw',height:'100vh',backgroundColor:'rgba(0, 128, 128, 5)',color:'white'}}
           
            >

              <Grid align='center'>
              <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
              <h1>Deloitte.</h1>
              <p>Sign in to continue and explore!</p>
              </Grid>
            
             
            
            
            
             <form class="form-field" onSubmit={handleSubmit}>
             {valid && <Navigate to='/Product'/>}
               
             <Grid  item class='one' >
             <TextField  variant="outlined"
             label='Username' placeholder='Enter username' type='text' disabled={valid} value={values.name}  onChange={handleNameChange} fullWidth  background-color="white"/></Grid>
              {submitted && !values.name && <span id="user-name-error">Please enter username</span>}
              
              <Grid item class='two'>
              <TextField  variant="outlined"
              label='Password' placeholder='Enter password' type='password' disabled={valid}  value={values.password}  onChange={handlePasswordChange} fullWidth background-color="white" /></Grid>
              {submitted && !values.password && <span id="password-error">Please enter password</span>}

                <Grid item class='three' >
                <Button class='button1' 
                variant="contained" color="primary" type="submit">
                  Log in  
                </Button>
                </Grid>
               
             </form>
     
           
           </Grid>
          
         );
      
       
    }


;
 