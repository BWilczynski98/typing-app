import React, { createContext, useState, useEffect } from "react";
import { auth, db, createUserDocument } from "../firebase/Config";
import { doc, setDoc, getDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
  updatePassword,
} from "firebase/auth";
export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;
  const [errorMessage, setErrorMessage] = useState(null);
  const [userStats, setUserStats] = useState(null);

  console.log(userIsLoggedIn);
  console.log(auth.currentUser);

  const singUp = async (email, password, name) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      const token = await user._tokenResponse.idToken;
      await localStorage.setItem("token", token);
      await updateProfile(auth.currentUser, { displayName: name });
      await createUserDocument(user.user);
      await setToken(true);
      console.log(user.user);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const singIn = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      const token = await user._tokenResponse.idToken;
      await localStorage.setItem("token", token);
      await setToken(true);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const resetPassword = (email) => {
    try {
      sendPasswordResetEmail(auth, email);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const logout = () => {
    try {
      signOut(auth);
      localStorage.removeItem("token");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const changePassword = (currentUser, newPassword) => {
    try {
      updatePassword(currentUser, newPassword);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const getCurrentStats = async () => {
    const userRef = doc(db, "users", auth.currentUser.uid);
    const userSnap = await getDoc(userRef);
    const userPersonalRecord = await userSnap.data().personalRecord;
    await setUserStats(userPersonalRecord);
  };

  const savePersonalRecord = async (stats) => {
    if (userIsLoggedIn) {
      const userRef = doc(db, "users", auth.currentUser.uid);
      const userSnap = await getDoc(userRef);
      const userPersonalRecord = await userSnap.data().personalRecord;

      userPersonalRecord.WPM < stats.WPM &&
        (await setDoc(userRef, {
          personalRecord: {
            WPM: stats.WPM,
            CPM: stats.CPM,
            ACC: stats.ACC,
          },
        }));
      getCurrentStats();
    }
  };

  useEffect(() => {
    getCurrentStats();
    return () => {
      getCurrentStats();
    };
  }, []);

  const STORAGE = {
    authenticator: {
      userIsLoggedIn,
      errorMessage,
      singUp,
      singIn,
      resetPassword,
      logout,
      changePassword,
    },
    user: {
      savePersonalRecord,
      userStats,
    },
  };

  return (
    <GlobalContext.Provider value={STORAGE}>{children}</GlobalContext.Provider>
  );
};

export default GlobalStorage;
