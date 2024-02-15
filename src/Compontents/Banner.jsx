import React from 'react';
import { Grid, Typography } from '@mui/material';
import './Banner.css'; // Import the external CSS file

const Banner = () => {
  return (
    <Grid container spacing={3} sx={{ marginTop: 2, marginBottom: 5 }}>
      <Grid item xs={12} md={6}>
        <div className='banner-item two'>
          <div className='banner-content'>
            <Typography variant="h5" color="gray">Mini backpack</Typography>
            <Typography variant="h4" color="gray">Bags & Accessories</Typography>
          </div>
        </div>
      </Grid>

      <Grid item xs={12} md={6}>
        <div className='banner-item one'>
          <div className='banner-content'>
            <Typography variant="h5" color="gray">Big Sale</Typography>
            <Typography variant="h4" color="gray">50% OFF</Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Banner;
