import styled from "styled-components";
import { colors } from "../../../styles/GlobalColors.styles";
import { TextField, Typography, Button, IconButton } from "@mui/material";

export const Container = styled.div`
  width: min(500px, 90%);
  /* height: min(500px, 70%); */
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  gap: 20px;
  background-color: white;
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ exit }) => (exit ? "flex-end" : "center")};
  padding-right: ${({ exit }) => exit && "10px"};
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const StyledTypography = styled(Typography)`
  color: ${colors.darkGrey};
  text-align: center;
`;

export const Span = styled.span`
  color: ${colors.orange};
  cursor: ${(props) => props.clicked && "pointer"};
`;

export const AnimationSpan = styled.span`
  display: inline-block;
  position: relative;
  color: ${colors.orange};
  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${colors.orange};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const StyledInput = styled(TextField)`
  width: 80%;

  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${colors.darkGrey};
    color: orange;
  }

  & .MuiInputLabel-root.Mui-focused {
    color: ${colors.darkGrey};
  }
`;

export const RegisterButton = styled(Button)`
  width: 60%;
  && {
    font-weight: 600;
  }

  &&,
  &&:focus {
    background-color: ${colors.orange};
  }

  &&:hover {
    background-color: ${colors.darkOrange};
  }
`;

export const ExitButton = styled(IconButton)``;
