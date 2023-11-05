// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBxbBPHulVxvPiSeT_T_Fq7tI3ZLZeIWDQ",
  authDomain: "resto-fe8f1.firebaseapp.com",
  projectId: "resto-fe8f1",
  storageBucket: "resto-fe8f1.appspot.com",
  messagingSenderId: "698654582450",
  appId: "1:698654582450:web:ba2b95fba84feeffabcbab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
