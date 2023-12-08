import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';


function Appbar() {
  return (<div style={{background: 'linear-gradient(100deg, #3B53D6,#4AFAFA)',
    filter: 'blur(10px)'}}>
    <Box sx={{ flexGrow: 1  }}>
      <AppBar position="static" color='primary'  sx={{ borderRadius: 13 }} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"

            aria-label="menu"
            sx={{ mr: 2, }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight: 'bold' }}>
            Real-Time
          </Typography>
          <Button color="inherit" sx={{fontWeight: 'bold'}}>About</Button>
           <Button  color="inherit" sx={{fontWeight: 'bold'}}>Signup</Button> 
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}

export default Appbar;
