import React, { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const STORAGE = {
    word: "word",
  };

  return (
    <GlobalContext.Provider value={STORAGE}>{children}</GlobalContext.Provider>
  );
};

export default GlobalStorage;
