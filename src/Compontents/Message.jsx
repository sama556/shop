import React from "react";
import { Typography } from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file if you're using it

// Initialize AOS
AOS.init();


const Message = () => {
  return (
    <Typography
      variant="body1"
      align="center"
      data-aos="zoom-out"
   
      sx={{
        color: "#fff",
        letterSpacing: "0.1em",
        fontWeight: "bold",
        lineHeight: 1.7,
        marginBottom: 3,
        hight:'100 px' ,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#f76b6a",
        marginTop:10,
      }}
    >
      UP TO 70% OFF THE ENTIRE STORE! – MADE WITH LOVE by{" "}
      <span style={{ textDecoration: "underline" }}>The4 studio</span>
    </Typography>
  );
};

export default Message;
