import  React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Button, FormGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';



const Addcontactlist=()=> {

    const[name,setName]=useState("");
    const[number,setNumber]=useState("");
    const[email,setEmail]=useState("");

   const contacts= useSelector((state)=>state)
   const  dispatch= useDispatch();

   const handleSubmit=((e)=>{
     e.preventDefault();
     const checkEmail=contacts.find((contact)=>contact.email===email && email)
     const checkNumber=contacts.find((contact)=>contact.number===parseInt(number))
  
     if (!name || !number || !email)
     {
      alert("All Fields are Mandetory")
      return;
     }
     if(checkEmail)
     {
      alert("This email Allready Exit")
      return;
    }
     if(checkNumber)
     {
       alert("This number Allready Exit")
       return;
      }
      const data={
        id:contacts[contacts.length-1].id+1,
        name,
        number,
        email
      }
      dispatch({type:"ADD_CONTACT",payload:data})
      alert('Student Added Successfully')
       setName("")
       setNumber("")
       setEmail("")
  });
  
  return (
    <Box className='card'
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m:'0 auto',
          width: 500,
          height: 500,
        },
      }}>
      
      <Paper elevation={3}>
        <h2 className='text'>Add Student</h2>
           <from onSubmit={handleSubmit}>
          <FormGroup className='froms' >
           <div className='field'>
           <TextField id="standard-basic" type='name' label="Name" variant="standard" className='input-field' value={name}
           onChange={(e)=>setName(e.target.value)}/>
          </div> 
          <div className='field'>
           <TextField id="standard-basic"  type='number'label="Phone" variant="standard" className='input-field' value={number}
           onChange={(e)=>setNumber(e.target.value)}/>
          </div> 
          <div className='field'>
           <TextField id="standard-basic" type='email' label="Email" variant="standard" className='input-field' value={email} 
           onChange={(e)=>setEmail(e.target.value)}/>
          </div> 
            </FormGroup>
            <div className='btn'>
                <Button value="Add Student" variant="contained" onClick={(e)=>handleSubmit(e)}>Add</Button>
             </div>
            </from>  
             
        </Paper>
    </Box>
  );
}
export default Addcontactlist;