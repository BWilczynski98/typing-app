import styled from "styled-components";
import { colors } from "../.././styles/GlobalColors.styles";
import { TextField, Typography } from "@mui/material";
import { keyframes } from "styled-components";

const borderShadow = ` 0 0 0.1vw 0.4vw ${colors.orange},
        0 0 0.4vw 0.6vw ${colors.white},
        0 0 2vw 0.2vw ${colors.orange},
        inset 0 0 1vw 0.4vw ${colors.white},
        inset 0 0 0.4vw 0.2vw ${colors.white},
        inset 0 0 0.5vw 0.2vw ${colors.orange};`;

const borderGlow = keyframes`
 0%  { box-shadow: none; }
 30% { box-shadow: none; }
 35% { box-shadow: ${borderShadow}; }
 37% { box-shadow: none; }
 45% { box-shadow: ${borderShadow}; }
 47% { box-shadow: none; }
 49% { box-shadow: ${borderShadow}; }
 100% { box-shadow: ${borderShadow}; }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  max-height: 100vh;
  margin-top: 3%;
  font-family: "Text Me One", sans-serif;
`;

export const NeonWrapper = styled.div`
  border: solid 2px ${colors.orange};
  border-radius: 1.5rem;
  animation: ${borderGlow} 3s linear forwards;
`;

export const Header = styled.div`
  padding: 0 3.5rem 0 3.5rem;
  font-size: 3.5rem;
  color: ${colors.orange};
  font-family: "Text Me One", sans-serif;
  box-shadow: ${borderShadow};
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
  width: 40%;
  height: 40%;
  justify-content: space-around;
  align-items: center;
  font-size: small;
  margin-top: 30px;
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
  height: 20vh;
  margin: 6vh 0 10vh 0;
`;

export const StyledTypography = styled(Typography)`
  color: ${colors.darkGrey};
`;

export const Input = styled(TextField)`
  background-color: #fff;
  display: flex;
  width: 50vw;
  & .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border: solid 1px;
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: orange;
    border: solid 2px;
  }
`;
