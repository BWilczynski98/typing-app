import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjoTxMLCSCC4g3swYQXHLKRGdjcC6v-78",
  authDomain: "typing-app-b583a.firebaseapp.com",
  projectId: "typing-app-b583a",
  storageBucket: "typing-app-b583a.appspot.com",
  messagingSenderId: "173863779676",
  appId: "1:173863779676:web:21c9129e7e19f2caa05599",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const createUserDocument = async (user, guestStats, setGuestStats) => {
  await setDoc(doc(db, "users", user.uid), {
    email: user.email,
    name: user.displayName,
    registerTime: serverTimestamp(),
    personalRecord: {
      WPM: guestStats.WPM ? guestStats.WPM : 0,
      CPM: guestStats.WPM ? guestStats.CPM : 0,
      ACC: guestStats.WPM ? guestStats.ACC : 0,
    },
  });
  await setGuestStats("");
};
