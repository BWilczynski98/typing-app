import styled from "styled-components";
import { colors } from "../../../styles/GlobalColors.styles";
import { Backdrop, IconButton, Button, Typography } from "@mui/material";
import {
  BlobAnimation,
  OpacityAnimation,
} from "../animation/PopupWithPlayerScore.animation";

export const Popup = styled.div`
  width: min(620px, 90vw);
  height: min(600px, 50vh);
  border-radius: 10px;
  background-color: #f6f6f6;
  display: grid;
  grid-template-rows: 0.1fr 1fr 1fr;
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  animation: ${OpacityAnimation} 1.5s ease;

  @media screen and (max-width: 768px) {
    height: 60vh;
    grid-template-rows: 10% 50% 40%;
  }
`;

export const StyledBackdrop = styled(Backdrop)`
  animation: ${OpacityAnimation} 2s;
`;

export const PopupContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0px 20px;
`;

export const Row = styled.div`
  width: 100%;
  height: 100%;
`;

export const Column = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Bar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
`;

export const Text = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const Blob = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 85%;
  background-color: orange;
  border-radius: 48% 52% 68% 32% / 42% 28% 72% 58%;
  animation: ${BlobAnimation} 30s linear infinite;
  border: 2px solid ${colors.darkGrey};
  @media screen and (max-width: 768px) {
    height: 50%;
  }

  @media screen and (max-width: 500px) {
    height: 40%;
  }
`;

export const Image = styled.img`
  width: 100%;
  transform: scaleX(-1);
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100%;
  gap: 10px;
`;

export const IconButtonComponent = styled(IconButton)`
  && {
    background-color: white;
    color: ${colors.darkGrey};
  }
`;

export const OrangeMarker = styled.span`
  background-color: #f7a325;
  border-radius: 5px;
  padding: 0px 5px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const BoldMarker = styled.span`
  font-weight: 700;
`;

export const StyledButton = styled(Button)`
  && {
    border: 1px solid ${colors.orange};
    color: ${({ variant }) =>
      variant == "contained" ? "white" : colors.orange};
    background-color: ${({ variant }) =>
      variant == "contained" && colors.orange};
  }

  &&:hover {
    border: 1px solid ${colors.orange};
    color: ${({ variant }) =>
      variant == "contained" ? "white" : colors.orange};
    background-color: ${({ variant }) =>
      variant == "contained" && colors.orange};
  }
`;
