import React from "react";
import { Typography } from "@mui/material";

const Message = () => {
  return (
    <Typography
      variant="body1"
      align="center"
      sx={{
        color: "#fff",
        letterSpacing: "0.1em",
        fontWeight: "bold",
        lineHeight: 1.7,
        marginBottom: 0,
        hight:50 ,
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
