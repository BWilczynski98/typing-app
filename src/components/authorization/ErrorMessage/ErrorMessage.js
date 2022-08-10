import React from "react";
import { StyledAlert } from "../Styles/Error.styles";

const ErrorMessage = ({ errorMessage }) => {
  return <StyledAlert severity="error">{errorMessage}</StyledAlert>;
};

export default ErrorMessage;
