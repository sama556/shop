
import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard'; 
import products from './products';

const ProductList = () => {
  return (
    <Grid container spacing={2}>

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
 
    </Grid>
  );
};

export default ProductList;
