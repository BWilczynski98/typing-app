import React, { useState, useContext, useEffect } from "react";
import { auth } from "../../api/firebase/Config";
import { GlobalContext } from "../../api/context/GlobalStorage";
import {
  Wrapper,
  Container,
  Card,
  CardItem,
  CardButton,
  LogoutButton,
  Box,
  Head,
  BackIconButton,
  EditAvatarIconButton,
  StyledAvatar,
  StyledBadge,
  StyledArrowIcon,
  StyledBadgeEditIcon,
  HeadTypography,
  OrangeSpan,
  DarkGreySpan,
} from "./Styles/AccountProfile.styles";
import { Typography, Divider } from "@mui/material";

const AccountProfile = ({ accountWindowClose }) => {
  const { authenticator, user } = useContext(GlobalContext);
  const { logout } = authenticator;
  const { userStats } = user;
  const userName = auth.currentUser.displayName;
  const userEmail = auth.currentUser.email;
  console.log(auth);

  return (
    <Wrapper>
      <Container>
        <Head>
          <BackIconButton onClick={accountWindowClose}>
            <StyledArrowIcon />
          </BackIconButton>
          <HeadTypography variant="h5">My Account</HeadTypography>
        </Head>
        <Head>
          <div>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              badgeContent={
                <EditAvatarIconButton>
                  <StyledBadgeEditIcon />
                </EditAvatarIconButton>
              }
            >
              <StyledAvatar alt="user" />
            </StyledBadge>
          </div>
          <div>
            <div>
              <Typography variant="h5">{userName}</Typography>
            </div>
            <div>
              <Typography variant="body2">
                <OrangeSpan>Keyboard master</OrangeSpan>
              </Typography>
            </div>
          </div>
        </Head>
        <Divider />
        <div>
          <Typography variant="h6">
            <OrangeSpan>Account information</OrangeSpan>
          </Typography>
        </div>
        <Box>
          <Card>
            <CardItem>
              <div>
                <Typography variant="body2">
                  <DarkGreySpan>Display Name</DarkGreySpan>
                </Typography>
                <Typography variant="body1">{userName}</Typography>
              </div>
            </CardItem>
            <CardItem>
              <div>
                <Typography variant="body2">
                  <DarkGreySpan>Email</DarkGreySpan>
                </Typography>
                <Typography variant="body1">{userEmail}</Typography>
              </div>
            </CardItem>
          </Card>
        </Box>
        <div>
          <Typography variant="h6">
            <OrangeSpan>Personal record</OrangeSpan>
          </Typography>
        </div>
        <Box>
          <Card>
            <CardItem>
              <div>
                <Typography variant="body2">Words</Typography>
                <Typography variant="body1">
                  <OrangeSpan>{userStats.WPM}</OrangeSpan>/min
                </Typography>
              </div>
            </CardItem>
            <CardItem>
              <div>
                <Typography variant="body2">Chars</Typography>
                <Typography variant="body1">
                  <OrangeSpan>{userStats.CPM}</OrangeSpan>/min
                </Typography>
              </div>
            </CardItem>
            <CardItem>
              <div>
                <Typography variant="body2">Accuracy</Typography>
                <Typography variant="body1">
                  <OrangeSpan>{userStats.ACC}</OrangeSpan>%
                </Typography>
              </div>
            </CardItem>
          </Card>
        </Box>
        <Box>
          <LogoutButton
            variant="contained"
            onClick={() => {
              accountWindowClose();
              logout();
            }}
          >
            Logout
          </LogoutButton>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default AccountProfile;
