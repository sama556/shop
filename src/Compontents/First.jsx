import React from 'react';
import { Grid, Typography, Divider } from '@mui/material';
import ProductList from './ProductList';

function First() {
  return (
    <Grid container spacing={2} sx={{ marginBottom: 5 }}>
      <Grid item lg={5} xl={5}>
        <img src='https://elessi2.myshopify.com/cdn/shop/files/h2-banner3_900x.jpg?v=1614392001' alt="Banner Image" style={{ width: '100%', height: '100%' }} />
      </Grid>
      <Grid item lg={7} xl={7}>
        <Typography variant="h3" component="h2" sx={{ padding: '20px', color: 'black' }}>
          For Her
        </Typography>
        <Divider sx={{ backgroundColor: 'gray', marginBottom: 5 }} />
        <ProductList />
      </Grid>
    </Grid>
  );
}

export default First;
