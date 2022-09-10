import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from 'react-router-dom';


const Navbar=()=>{

    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to='/' className='nav-list'>Contact List</NavLink>
          </Typography>
          <NavLink  variant="h6" to='/addcontact'className='nav-btn'>Add Contact</NavLink>
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    )
}
export default Navbar;