import styled from "styled-components";
import { colors } from "../../../styles/GlobalColors.styles";
import { Button } from "@mui/material";
import { opacityTransitions } from "../../../animation/Animation";

export const Wrapper = styled.div`
  width: 100vw;
  height: 50px;
  border-bottom: 1px solid ${colors.ligthGrey};
  -webkit-box-shadow: 3px 3px 10px 3px #ddd;
  -moz-box-shadow: 3px 3px 10px 3px #ddd;
  box-shadow: 3px 3px 10px 3px #ddd;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  margin-bottom: 20px;
  animation: ${opacityTransitions} 4s ease;
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavButton = styled(Button)`
  && {
    color: ${({ primary }) => (primary ? colors.orange : "white")};
    background-color: ${({ primary }) => (primary ? "white" : colors.orange)};
    border-color: ${colors.orange};
  }

  &&:hover {
    background-color: ${({ primary }) =>
      primary ? "white" : colors.darkOrange};
    border-color: ${colors.darkOrange};
  }
`;
