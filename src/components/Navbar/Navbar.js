import React, { useContext } from "react";
import { Wrapper, Container, NavButton } from "./styles/Navbar.styles";
import { GlobalContext } from "../../api/context/GlobalStorage";

const Navbar = ({ loginWindowOpen, singUpWindowOpen, accountWindowOpen }) => {
  const { authenticator, user } = useContext(GlobalContext);
  const { userIsLoggedIn, logout } = authenticator;
  return (
    <Wrapper>
      {!userIsLoggedIn && (
        <Container>
          <NavButton variant="outlined" onClick={loginWindowOpen}>
            Login
          </NavButton>
          <NavButton
            primary={+true}
            variant="outlined"
            onClick={() => {
              singUpWindowOpen();
            }}
          >
            Sing up
          </NavButton>
        </Container>
      )}
      {userIsLoggedIn && (
        <Container>
          <NavButton
            variant="outlined"
            onClick={() => {
              user.getUserStats();
              accountWindowOpen();
            }}
          >
            My account
          </NavButton>
          <NavButton primary={+true} variant="outlined" onClick={logout}>
            Logout
          </NavButton>
        </Container>
      )}
    </Wrapper>
  );
};

export default Navbar;
