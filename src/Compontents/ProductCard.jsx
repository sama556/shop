
import React, { useState } from "react";
import { ListItem, List, Box } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ProductPrice from "./ProductPrice"; 

const ProductCard = ({ product }) => {
  const { name, image, hoverImage, colors } = product;
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box 
      mr={2} // Add some margin between cards
      flex="1" // Each card takes equal space
      sx={{
        color: 'black',
        padding: '10px',
        height: '100%',
        width: '100%',
        transition: 'transform 0.3s ease-out',
        '&:hover': {
          transform: 'scale(1.05)',
        }
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src={isHovered ? hoverImage : image} 
        alt={name} 
        style={{
          marginBottom: '10px',
          maxHeight: '200px', 
          width: 'auto', 
        }} 
      />
      <h3>{name}</h3>
    
      <ProductPrice
        originalPrice={product.originalPrice}
        discountedPrice={product.discountedPrice}
        price={product.price}
      />  

      {colors && colors.length > 0 && (
        <List sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
          {colors.map((color, index) => (
            <ListItem key={index} sx={{ padding: 0, margin: '0 ' }}>
              <div style={{ minWidth: '10px', height: '10px', borderRadius: '50%', background: color }} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default ProductCard;
