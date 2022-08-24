import React, { useState } from "react";
import { Wrapper } from "./Main.styles";
import { TypingTest } from "../components/TypingTest/TypingTest";
import { Navbar } from "../components/Navbar";
import { Login } from "../components/authorization/Login/index";
import { SingUp } from "../components/authorization/SingUp/index";
import { ResetPassword } from "../components/authorization/ResetPassword/index";
import { AccountProfile } from "../components/AccountProfile/index";

const Main = () => {
  const [loginWindow, setLoginWindow] = useState(false);
  const [singUpWindow, setSingUpWindow] = useState(false);
  const [resetPasswordWindow, setResetPasswordWindow] = useState(false);
  const [accountWindow, setAccountWindow] = useState(false);

  const loginWindowOpen = () => setLoginWindow(true);
  const singUpWindowOpen = () => setSingUpWindow(true);
  const resetPasswordOpen = () => setResetPasswordWindow(true);
  const accountWindowOpen = () => setAccountWindow(true);
  const accountWindowClose = () => setAccountWindow(false);

  return (
    <Wrapper>
      <Navbar
        loginWindowOpen={loginWindowOpen}
        singUpWindowOpen={singUpWindowOpen}
        accountWindowOpen={accountWindowOpen}
      />

      <TypingTest
        loginWindowOpen={loginWindowOpen}
        singUpWindowOpen={singUpWindowOpen}
      />

      {accountWindow && (
        <AccountProfile accountWindowClose={accountWindowClose} />
      )}
      {loginWindow && (
        <Login
          loginWindow={loginWindow}
          setLoginWindow={setLoginWindow}
          singUpWindowOpen={singUpWindowOpen}
          resetPasswordOpen={resetPasswordOpen}
        />
      )}
      {singUpWindow && (
        <SingUp
          singUpWindow={singUpWindow}
          setSingUpWindow={setSingUpWindow}
          loginWindowOpen={loginWindowOpen}
        />
      )}
      {resetPasswordWindow && (
        <ResetPassword
          resetPasswordWindow={resetPasswordWindow}
          setResetPasswordWindow={setResetPasswordWindow}
          loginWindowOpen={loginWindowOpen}
          singUpWindowOpen={singUpWindowOpen}
        />
      )}
    </Wrapper>
  );
};

export default Main;
