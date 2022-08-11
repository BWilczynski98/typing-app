import React from "react";
import {
  AnimalName,
  BtnIcons,
  CustomText,
  Result,
  ShareScore,
  FbIcon,
  BtnWrapper,
  InstaIcon,
  GoogleIcon
} from "./Text.style";




export const Text = (props) => {
  return (
    <>
      <CustomText>
        <AnimalName variant="h5">You are {props.name}.</AnimalName>
        <Result variant="body1">
          Awesome! You type with the speed of{" "}
          <span
            style={{
              fontWeight: "bold",
              backgroundColor: "#f8502d",
              borderRadius: "4px",
            }}
          >
            {props.wpm} WPM{" "}
          </span>{" "}
          ({props.cpm} CPM). Your accuracy was{" "}
          <span style={{ fontWeight: "bold" }}>{props.accuracy}%</span>.
          Congratulations!
        </Result>
        <ShareScore variant="overline">Share your score</ShareScore>
        <BtnWrapper>
          <BtnIcons>
            <FbIcon fontSize="medium"></FbIcon>
          </BtnIcons>
          <BtnIcons>
            <InstaIcon fontSize="medium"></InstaIcon>
          </BtnIcons>
          <BtnIcons>
            <GoogleIcon fontSize="medium"></GoogleIcon>
          </BtnIcons>
        </BtnWrapper>
      </CustomText>
    </>
  );
};
