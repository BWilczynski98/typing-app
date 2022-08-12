import React from "react";
import { CustomTimer } from "./Timer.style";
import { Typography, useMediaQuery } from "@mui/material";

const Timer = ({ seconds, isRunning }) => {
  const breakPoint = useMediaQuery("(max-width:768px )");

  return (
    <>
      <CustomTimer>
        <Typography variant={breakPoint ? "h5" : "h4"}>
          {isRunning ? seconds : "60"}
        </Typography>
        <Typography variant="substitle1">seconds</Typography>
      </CustomTimer>
    </>
  );
};

export default Timer;
