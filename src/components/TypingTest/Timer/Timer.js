import React, { useEffect, useState } from "react";
import { CustomTimer } from "./Timer.style";
import { StyledTypography } from "../TypingTest.style";


const Timer = ({ seconds, isRunning }) => {
  return (
    <>
      <CustomTimer>
        <StyledTypography variant="h4">
          {isRunning ? seconds : "60"}
        </StyledTypography>
        <StyledTypography variant="substitle1">seconds</StyledTypography>
      </CustomTimer>
    </>
  );
};

export default Timer;
