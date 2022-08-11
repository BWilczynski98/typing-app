import styled from "styled-components";
import Typography from "@mui/material/Typography";

export const PopUpWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: black;
`;
export const PopUpBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 650px;
  height: 400px;
  background-color: #f6f6f6;
  border-radius: 20px;
  border: 1px darkgrey solid;
`;

export const Animal = styled.div`
  background-image: url("https://cdn.pixabay.com/photo/2017/05/14/16/14/silver-octopus-2312413_960_720.png");
  background-size: 80% 80%;
  background-repeat: no-repeat;
  background-position: center;
  width: 50%;
  height: 60%;
  border-radius: 20px 0 0 0;
`;

export const TryAgain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40%;
  background-color: #fff;
  border-radius: 0 0 20px 20px;
  padding: 0 30px 7px 30px;
  text-align: center;
`;

export const BtnWrapper = styled.div`
  display: flex;
  height: 90%;
  flex-direction: column;
  justify-content: space-around;
  padding: 7px 0 7px 0;
`;

export const StyledText = styled(Typography)``;
