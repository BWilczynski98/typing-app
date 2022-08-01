import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [words, setWords] = useState();
  const generateRandomWords = async () => {
    const response = await axios.get(
      "https://random-word-api.herokuapp.com/all"
    );
    const words = await response.data;
    await setWords(words);
  };

  useEffect(() => {
    generateRandomWords();
  }, []);

  const STORAGE = {
    words: words,
  };

  return (
    <GlobalContext.Provider value={STORAGE}>{children}</GlobalContext.Provider>
  );
};

export default GlobalStorage;
