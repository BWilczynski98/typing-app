import React, { useContext } from "react";
import { GlobalContext } from "./api/context/GlobalStorage";
import "./App.css";

const App = () => {
  const { words } = useContext(GlobalContext);
  console.log(words[10]);
  return <></>;
};

export default App;
