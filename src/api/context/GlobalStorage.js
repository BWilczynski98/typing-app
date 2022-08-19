import React, { createContext, useState, useEffect } from "react";
import { auth, db, createUserDocument } from "../firebase/Config";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
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
  const [loading, setLoading] = useState(false);
  const [userStats, setUserStats] = useState(null);
  const [guestStats, setGuestStats] = useState(null);

  const clearErrorAlert = () => setErrorMessage("");

  const singUp = async (email, password, name, closeWindow, guestStats) => {
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      const token = await user._tokenResponse.idToken;
      await localStorage.setItem("token", token);
      await updateProfile(auth.currentUser, { displayName: name });
      await createUserDocument(user.user, guestStats, setGuestStats);
      await setToken(true);
      await clearErrorAlert();
      await closeWindow();
    } catch (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);
  };

  const singIn = async (email, password, closeWindow) => {
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      const token = await user._tokenResponse.idToken;
      await localStorage.setItem("token", token);
      await setToken(true);
      await clearErrorAlert();

      await closeWindow();
    } catch (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);
    savePersonalRecord(guestStats);
  };

  const resetPassword = async (email, closeWindow) => {
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      await clearErrorAlert();
      await closeWindow();
    } catch (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);
  };

  const logout = async () => {
    try {
      await signOut(auth);
      await localStorage.removeItem("token");
      await clearErrorAlert();
      await setToken("");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const changePassword = async (currentUser, newPassword) => {
    try {
      await updatePassword(currentUser, newPassword);
      await clearErrorAlert();
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const savePersonalRecord = async (stats) => {
    if (userIsLoggedIn || stats) {
      const userRef = doc(db, "users", auth.currentUser.uid);
      const userSnap = await getDoc(userRef);
      const userPersonalRecord = await userSnap.data().personalRecord;

      userPersonalRecord.WPM < stats.WPM &&
        (await updateDoc(userRef, {
          personalRecord: {
            WPM: stats.WPM,
            CPM: stats.CPM,
            ACC: stats.ACC,
          },
        }));
    }
  };

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
      setGuestStats,
      guestStats,
    },
    status: {
      loading,
      clearErrorAlert,
    },
  };

  return (
    <GlobalContext.Provider value={STORAGE}>{children}</GlobalContext.Provider>
  );
};

export default GlobalStorage;
