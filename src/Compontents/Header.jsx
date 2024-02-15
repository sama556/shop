import React, { useState } from 'react';
import { Container, AppBar, Toolbar, Typography, } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', width: '100%' }}>
      <Container width="lg">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
          <Typography  sx={{ color: 'black', textDecoration: 'none' ,marginRight: 5   }}>
            Elissi
          </Typography>
      
   
          <Typography onClick={handleClose} sx={{ fontSize: '1.2rem', color: 'black', textDecoration: 'none', marginLeft: 'auto', marginRight: 5 }}>Home</Typography>
         
          <Typography onClick={handleClose} sx={{ fontSize: '1.2rem', color: 'black', textDecoration: 'none', marginRight: 5 }}>Product</Typography>
          <Typography onClick={handleClose} sx={{ fontSize: '1.2rem', color: 'black', textDecoration: 'none', marginRight: 5 }}>Element</Typography>
          
          {/* Shopping Bag */}
          <Typography onClick={handleClose} sx={{ fontSize: '1.2rem', color: 'black', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <ShoppingBag />
            Shop
          </Typography>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
