import React, { useEffect,useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Button, FormGroup } from '@mui/material';
import {useNavigate,useParams} from 'react-router';
import { useSelector,useDispatch } from "react-redux";

   const Editcontact=()=>{
    const[name,setName]=useState("");
    const[number,setNumber]=useState("");
    const[email,setEmail]=useState("");
   
    const {id}=useParams();
    const history= useNavigate();
    const dispatch=useDispatch()

   const contacts= useSelector(state=>state);
   const currentContact= contacts.find(contacts=>contacts.id===parseInt(id))

   useEffect(()=>{
      if(currentContact)
      {
        setName(currentContact.name)
        setNumber(currentContact.number)
        setEmail(currentContact.email)
      }
   },[currentContact])
   

   const handleSubmit=((e)=>{
    e.preventDefault();
    const checkEmail= contacts.find((contact)=>contact.id!==parseInt(id)&& contact.email===email);
    const checkNumber= contacts.find((contact)=>contact.id!==parseInt(id)&& contact.number===parseInt(number))
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
       id:parseInt(id),
       name,
       number,
       email
     }
     dispatch({type:"UPDATE_CONTACT",payload:data})
     alert('Student Updated Successfully')
      setName("")
      setNumber("")
      setEmail("")
  });
    return(
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

          {currentContact?(
            <>
             <h2 className='text'>Edit Student{id}</h2>
          
             <FormGroup className='froms' >
              <div className='field'>
              <TextField id="standard-basic" label="Name" variant="standard" className='input-field' value={name}
              onChange={(e)=>setName(e.target.value)} />
             </div> 
             <div className='field'>
              <TextField id="standard-basic" label="Phone" variant="standard" className='input-field' value={number}
              onChange={(e)=>setNumber(e.target.value)}/>
             </div> 
             <div className='field'>
              <TextField id="standard-basic" label="Email" variant="standard" className='input-field' value={email}
              onChange={(e)=>setEmail(e.target.value)}/>
             </div> 
               </FormGroup>  
                <div className='btn'>
                   <Button variant="contained" onClick={(e)=>handleSubmit(e)}>Update</Button>
                   <Button onClick={()=>history('/')} variant="contained" style={{marginLeft:'10px'}}>Cancle</Button>
               </div>
               </>
          ):(
            <h2 className='text'>Student Contact id{id} is not exist</h2>
          )}
         
          </Paper>
      </Box>
    )
}
export default Editcontact;