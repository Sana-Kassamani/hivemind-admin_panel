import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ text, onClick, isDisabled }) => {
  return (
    <Button
      variant="contained"
      disableElevation
      disabled={isDisabled}
      sx={{
        color: "secondary.main",
        textTransform: "none",
        borderRadius: "8px",
        paddingX: "20px",
        paddingY: "5px",
        fontSize: "16px",
        fontWeight: "bold",
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
