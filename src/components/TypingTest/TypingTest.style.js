import styled, { keyframes } from "styled-components";
import { colors } from "../.././styles/GlobalColors.styles";
import { TextField, Typography } from "@mui/material";
import {
  opacityTransitions,
  typing,
  blink,
  slideIn,
  Levitation,
} from "../../animation/Animation";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  max-height: 100vh;
  margin-top: 3%;
  overflow: hidden;
`;

export const Header = styled.div`
  width: 100vw;
  padding: 0 3.5rem 0 3.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const Title = styled(Typography)`
  width: 18ch;
  animation: ${typing} 2s steps(22), ${blink} 0.5s step-end infinite alternate,
    ${slideIn} 3s ease;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid ${colors.orange};

  && {
    font-size: 70px;
  }

  @media screen and (max-width: 768px) {
    && {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 500px) {
    && {
      font-size: 26px;
    }
  }
`;

export const Subtitle = styled.div`
  margin-top: 20px;
  color: ${colors.darkGrey};
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2px;
`;

export const CounterWrapper = styled.div`
  display: flex;
  width: 50%;
  height: 40%;
  justify-content: space-around;
  align-items: center;
  font-size: small;
  margin-top: 30px;
  animation: ${opacityTransitions} 4s ease;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: solid 1px #555;
  background-color: #fff;
  border-radius: 10px;
  width: 50vw;
  min-height: 20vh;
  margin: 6vh 0 10vh 0;
  flex-wrap: wrap;
  overflow: hidden;
  animation: ${opacityTransitions} 4s ease;
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 50vw;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

export const WortToTranscribe = styled(Typography)`
  color: ${({ status }) =>
    (status == "true" && "green") ||
    (status == "false" && "red") ||
    (status == "null" && "black")};
  background-color: ${({ tracked }) => tracked == "true" && colors.ligthGrey};
  background-color: ${({ iscorrect }) => iscorrect == "false" && "red"};
  border-radius: 10px;

  && {
    letter-spacing: 3px;
    padding: 3px;
  }
`;

export const InputContainer = styled.div`
  animation: ${opacityTransitions} 4s ease;
  position: relative;
  width: 50vw;

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

export const Input = styled(TextField)`
  position: relative;
  background-color: #fff;
  display: flex;
  width: 100%;
  & .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border: solid 1px;
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: orange;
    border: solid 2px;
  }
`;

export const OrangeSpan = styled.span`
  color: ${colors.orange};
`;

export const StartMark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -70px;
  background-color: ${colors.orange};
  width: 100px;
  height: 40px;
  color: white;
  border-radius: 10px;
  z-index: 0;
  animation: ${Levitation} 2.2s ease infinite;
  transition: 0.5s ease;
  opacity: ${({ view }) => (!view ? 1 : 0)};
`;

export const StartMarkArrow = styled.div`
  position: absolute;
  background-color: ${colors.orange};
  width: 20px;
  height: 20px;
  bottom: -5px;
  transform: rotate(45deg);
  z-index: -1;
`;

