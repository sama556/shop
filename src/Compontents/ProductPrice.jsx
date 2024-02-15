import React from 'react';
import { Typography } from '@mui/material';

const ProductPrice = ({ originalPrice, discountedPrice,price }) => {
  return (
    <>
      {originalPrice && (
        <Typography
          component="p"
          sx={{ textDecoration: discountedPrice ? 'line-through' : 'none' }}
        >
           ${originalPrice}
        </Typography>
      )}
      {discountedPrice && <p> ${discountedPrice}</p>}
      {price && <p> ${price}</p>}

    </>
  );
};

export default ProductPrice;
