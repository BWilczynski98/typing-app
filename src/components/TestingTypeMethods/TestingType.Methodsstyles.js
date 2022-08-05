import styled from "styled-components";
import { colors } from "../../styles/GlobalColors.styles";
import { TextField, Typography } from "@mui/material";

export const UserInputTestingType = styled(TextField)`
  width: 500px;
`;

export const BoxWithWordsToTranscribedByUser = styled.div`
  width: 80vw;
  height: 150px;
  border: 1px solid ${colors.darkGrey};
  overflow: hidden;
`;

export const BoxParagraph = styled.div`
  width: 100%;
  height: 50%;
`;

export const StyledTypography = styled(Typography)`
  color: ${({ status }) =>
    (status == true && "green") ||
    (status == false && "red") ||
    (status == null && "black")};
  background-color: ${({ tracked }) => tracked == "true" && colors.ligthGrey};
  background-color: ${({ iscorrect }) => iscorrect == "false" && "red"};
`;
