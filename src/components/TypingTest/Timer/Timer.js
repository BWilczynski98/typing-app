import React, { useEffect, useState } from "react";
import { CustomTimer } from "./Timer.style";
import { StyledTypography } from "../TypingTest.style";

const Timer = () => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <>
      <CustomTimer>
        <StyledTypography variant="h4">{seconds}</StyledTypography>
        <StyledTypography variant="substitle1">seconds</StyledTypography>
      </CustomTimer>
    </>
  );
};

export default Timer;
