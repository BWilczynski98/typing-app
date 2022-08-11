import styled from "styled-components";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export const CustomText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 50%;
  height: 60%;
  border-radius: 20px;
  padding: 10px 20px 10px 10px;
`;

export const AnimalName = styled(Typography)`
  padding: 10px 0 10px 0;
`;
export const Result = styled(Typography)`
  padding-bottom: 10px;
`;
export const ShareScore = styled(Typography)`
  padding-bottom: 10px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 10px;
  width: 60%;
  height: 100%;
`;

export const BtnIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  background-color: #1565c0;
`;
export const FbIcon = styled(FacebookIcon)`
  color: white;
`;
export const InstaIcon = styled(InstagramIcon)`
  color: white;
`;
export const GoogleIcon= styled(MailOutlineIcon)`
  color: white;
`;