import React from 'react';
import { Grid, Typography, Divider } from '@mui/material';
import ProductListM from './ProductListM';


function Second(){
  return (
    <Grid container spacing={2} sx={{ marginBottom: 5 }}>
     
      <Grid item lg={7} xl={7} >
        <Typography variant="h3" component="h2" sx={{ padding: '20px', color: 'black' }}>
          For Him
        </Typography>
        <Divider sx={{ backgroundColor: 'gray', marginBottom: 5 }} />
        <ProductListM />
      </Grid> 
      <Grid item lg={5} xl={5}>
        <img src='https://elessi2.myshopify.com/cdn/shop/files/h2-banner41_900x.jpg?v=1614392006' alt="Banner Image" style={{ width: '100%', height: '100%' }} />
      </Grid>

    </Grid>
  );
}

export default Second;
