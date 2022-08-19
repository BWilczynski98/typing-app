import styled from "styled-components";
import { keyframes } from "styled-components";

const rotateAnimation = keyframes`
100% {
  transform: rotate(1turn);
}
`;

export const SpinnerContainer = styled.div`
  width: 24px;
  height: 24px;
  display: grid;
  border: 1.9px solid #0000;
  border-radius: 50%;
  border-right-color: white;
  animation: ${rotateAnimation} 1s infinite linear;

  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    margin: 1px;
    border: inherit;
    border-radius: 50%;
    animation: ${rotateAnimation} 2s infinite;
  }

  &::after {
    margin: 3.9px;
    animation-duration: 3s;
  }
`;
