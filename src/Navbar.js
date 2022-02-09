     
      import * as React from 'react';
      import AppBar from '@mui/material/AppBar';
      import Box from '@mui/material/Box';
      import Toolbar from '@mui/material/Toolbar';
      import Typography from '@mui/material/Typography';
      import Button from '@mui/material/Button';
      import IconButton from '@mui/material/IconButton';
      import MenuIcon from '@mui/icons-material/Menu';
      import { Link } from 'react-router-dom';
      
      export default function ButtonAppBar() {


const linkStyle = {textDecoration: "none"}

        return (
          <Box sx={{ flexGrow: 2 }}>
            <AppBar position="fixed">
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


                  <Link to="/home" style={linkStyle}> Home </Link>    
                  <Link to="/movies" style={linkStyle}> Movie </Link>    
                  <Link to="/color" style={linkStyle}> Color </Link> 


             
                </Typography>
                <Button color="inherit">Login</Button>
      
               
      
              </Toolbar>
            </AppBar>
          </Box>
        );
      }
      
      
      
      