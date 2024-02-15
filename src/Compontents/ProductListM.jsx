
import React from 'react';
import { Grid } from '@mui/material';
import ProductMen from './ProductMen'; 
import productsMen from './ProductsMen';

const ProductListM = () => {
  return (
    <Grid container spacing={2}>

      {productsMen.map((product) => (
        <ProductMen key={product.id} product={product} />
      ))}
 
    </Grid>
  );
};

export default ProductListM;