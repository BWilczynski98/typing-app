import React from "react";
import { SingUp } from "./components/authorization/SingUp";
import { Login } from "./components/authorization/Login";
import { ResetPassword } from "./components/authorization/ResetPassword";
import { AccountProfile } from "./components/AccountProfile";
import { TypingTest } from "./components/TypingTest/TypingTest";

const App = () => {
  return (
    <div>
      <TypingTest />
      <SingUp />
      <Login />
      <ResetPassword />
      <AccountProfile />
    </div>
  );
};


export default App;
