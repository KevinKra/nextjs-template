import { ButtonBase, styled, Button } from "@mui/material";
import React from "react";

const CustomButton = () => {
  return <StyledButton>CustomButton</StyledButton>;
};

export default CustomButton;

const StyledButton = styled(Button)`
  border: 2px solid green;
`;
