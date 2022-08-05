import styled from "styled-components";
import "@fontsource/roboto/500.css";
import { colors } from "../../../styles/GlobalColors.styles";
import {
  Typography,
  IconButton,
  Avatar,
  Badge,
  TextField,
  Button,
} from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import EditIcon from "@mui/icons-material/Edit";

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 1000;
`;

export const Head = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const Box = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: ${colors.ligthGrey};
  -webkit-box-shadow: 3px 3px 10px 3px #ddd;
  -moz-box-shadow: 3px 3px 10px 3px #ddd;
  box-shadow: 3px 3px 10px 3px #ddd;
  width: 100%;
  border-radius: 20px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
`;

export const HeadTypography = styled(Typography)`
  && {
    font-weight: 500;
  }
`;

export const PasswordHandler = styled(TextField)`
  && {
    width: 150px;
  }

  & .MuiInput-underline:after {
    border-color: orange;
  }
`;

export const CardButton = styled(Button)`
  &&,
  &&:focus {
    background-color: ${colors.orange};
  }
  &&:hover {
    background-color: ${colors.darkOrange};
  }
`;

export const LogoutButton = styled(Button)`
  &&,
  &&:focus,
  &&:hover {
    background-color: ${colors.darkGrey};
  }
`;

export const StyledAvatar = styled(Avatar)`
  && {
    width: 90px;
    height: 90px;
    border: 1px solid ${colors.ligthGrey};
  }
`;

export const StyledBadge = styled(Badge)`
  && :hover {
    cursor: pointer;
  }
`;

export const BackIconButton = styled(IconButton)`
  && {
    border-radius: 15px;
  }
  &&,
  &&:focus,
  &&:hover {
    background-color: ${colors.darkGrey};
  }
`;

export const EditAvatarIconButton = styled(IconButton)`
  && {
    width: 26px;
    height: 26px;
    background-color: ${colors.darkGrey};
  }

  && :hover {
    background-color: ${colors.ligthGrey};
    color: ${colors.darkGrey};
    transition: 0.25s;
  }
`;

export const StyledArrowIcon = styled(NavigateBeforeIcon)`
  && {
    color: white;
  }
`;

export const StyledBadgeEditIcon = styled(EditIcon)`
  && {
    width: 26px;
    height: 26px;
    color: white;
    padding: 3px;
    border-radius: 100px;
  }
`;

export const OrangeSpan = styled.span`
  color: ${colors.orange};
`;

export const DarkGreySpan = styled.span`
  color: ${colors.darkGrey};
`;
