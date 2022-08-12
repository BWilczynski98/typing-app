import React from "react";
import { CustomCounter } from "./Counters.style";
import { Typography, useMediaQuery } from "@mui/material";

export const Counter = (props) => {
  const breakPoint = useMediaQuery("(max-width:768px )");
  return (
    <>
      <CustomCounter>
        <Typography variant={breakPoint ? "h5" : "h4"}>
          {props.number}
        </Typography>
        <Typography variant="substitle1">{props.text}</Typography>
      </CustomCounter>
    </>
  );
};
