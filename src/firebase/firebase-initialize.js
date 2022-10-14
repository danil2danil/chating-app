import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEpvoSV__n0BUQlvTFX0QN0wtmN-T2LQI",
  authDomain: "messenger-app-aca67.firebaseapp.com",
  projectId: "messenger-app-aca67",
  storageBucket: "messenger-app-aca67.appspot.com",
  messagingSenderId: "743569536046",
  appId: "1:743569536046:web:90b918221ab1a7580e5bbf"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);