import React from "react";
import { CustomCounter } from "./Counters.style";
import { StyledTypography } from "../TypingTest.style";

export const Counter = (props) => {
  return (
    <>
      <CustomCounter>
        <StyledTypography variant="h4">{props.number}</StyledTypography>
        <StyledTypography variant="substitle1">{props.text}</StyledTypography>
      </CustomCounter>
    </>
  );
};
