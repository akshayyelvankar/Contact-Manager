import React from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";


const Home=()=>{

   const contacts= useSelector(state=>state);

   const dispatch = useDispatch();
  const deleteContact=((id)=>{
     dispatch({type:"DELETE_CONTACT",payload:id});
     alert('Contact Deleted Successfully')
  })
   
    return(
    
    <div>   
     <TableContainer component={Paper}>
      <Table sx={{ Width: 650 }} aria-label="simple table">
        <TableHead className="display">
          <TableRow >
            <TableCell >Id</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Mobile</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Action</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
          {contacts.length>0?(contacts.map((contact,id)=>
            <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{contact.id}</TableCell>
              <TableCell >{contact.name}</TableCell>
              <TableCell >{contact.number}</TableCell>
              <TableCell >{contact.email}</TableCell>
             
               <TableCell>
                <Link to={`/edit/${contact.id}`} className="btn-edit">Edit</Link>
                <button onClick={()=>deleteContact(contact.id)} className="btn-delete">Delete</button>
               </TableCell> 
              </TableRow>
            )):(
              <TableRow>
                <TableCell>No contacts found</TableCell>
              </TableRow>
            )}
              
           </TableBody>
      </Table>
    </TableContainer>
      
      
    </div>
    )
}

export default Home;