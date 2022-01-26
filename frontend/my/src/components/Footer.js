import React from 'react'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer>
             <AppBar position="static" color="primary">
          <Container maxWidth="md-4">
            <Toolbar maxWidth="md-3">
              <Typography variant="body1" color="inherit">
                © essct 
                <br/>
              </Typography> 
              
              <Typography variant="body1" color="inherit">
              <i class="fab fa-facebook"></i>
              </Typography> 
              
            </Toolbar>
          </Container>
        </AppBar>
       
        </footer>
    )
}

export default Footer
