
import React from 'react';
import { Grid } from '@mui/material';
import ProductMen from './ProductMen'; import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init();

import productsMen from './ProductsMen';

const ProductListM = () => {
  return (

    <Grid container spacing={2} data-aos="fade-up"  >

      {productsMen.map((product) => (
        <ProductMen key={product.id} product={product} />
      ))}
 
    </Grid>
    
  );
};

export default ProductListM;