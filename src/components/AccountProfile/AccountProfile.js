import React, { useState, useContext } from "react";
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
  PasswordHandler,
  OrangeSpan,
  DarkGreySpan,
} from "./Styles/AccountProfile.styles";

import { Typography, Divider } from "@mui/material";

const AccountProfile = () => {
  const { authenticator, user } = useContext(GlobalContext);
  const { logout } = authenticator;
  const { userStats } = user;
  const [password, setPassword] = useState("password");
  const [passwordHandler, setPasswordHandler] = useState(true);

  console.log(userStats);

  return (
    <Wrapper>
      <Container>
        <Head>
          <BackIconButton>
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
              <StyledAvatar
                alt="user"
                src="https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              />
            </StyledBadge>
          </div>
          <div>
            <div>
              <Typography variant="h5">Jane Doe</Typography>
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
                <Typography variant="body1">Jane Doe</Typography>
              </div>
            </CardItem>
            <CardItem>
              <div>
                <Typography variant="body2">
                  <DarkGreySpan>Email</DarkGreySpan>
                </Typography>
                <Typography variant="body1">jane.doe@gmail.com</Typography>
              </div>
            </CardItem>
            <CardItem>
              <div>
                <Typography variant="body2">
                  <DarkGreySpan>Password</DarkGreySpan>
                </Typography>
                <PasswordHandler
                  type={passwordHandler && "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  size="small"
                  disabled={passwordHandler}
                  variant="standard"
                  InputProps={{ disableUnderline: passwordHandler }}
                />
              </div>
              <div>
                <div>
                  <CardButton
                    variant="contained"
                    onClick={() =>
                      setPasswordHandler((prevState) => !prevState)
                    }
                    size="small"
                  >
                    Change
                  </CardButton>
                </div>
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
                <Typography variant="body2">Rank</Typography>
                <Typography variant="body1">
                  <OrangeSpan>1</OrangeSpan>
                </Typography>
              </div>
            </CardItem>
            <CardItem>
              <div>
                <Typography variant="body2">Words</Typography>
                <Typography variant="body1">
                  <OrangeSpan></OrangeSpan>/min
                </Typography>
              </div>
            </CardItem>
            <CardItem>
              <div>
                <Typography variant="body2">Chars</Typography>
                <Typography variant="body1">
                  <OrangeSpan>201</OrangeSpan>/min
                </Typography>
              </div>
            </CardItem>
            <CardItem>
              <div>
                <Typography variant="body2">Accuracy</Typography>
                <Typography variant="body1">
                  <OrangeSpan>92.63</OrangeSpan>%
                </Typography>
              </div>
            </CardItem>
          </Card>
        </Box>
        <Box>
          <LogoutButton variant="contained" onClick={logout}>
            Logout
          </LogoutButton>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default AccountProfile;
