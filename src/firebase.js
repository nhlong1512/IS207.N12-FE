// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { useState } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBysSsI4c3kJBlEuBeuNXME1Q25z5cSVI",
  authDomain: "moriicoffee.firebaseapp.com",
  projectId: "moriicoffee",
  storageBucket: "moriicoffee.appspot.com",
  messagingSenderId: "281244301873",
  appId: "1:281244301873:web:27334f9f426be81c8f3310",
  measurementId: "G-N3YF3E150R",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const ggprovider = new GoogleAuthProvider();
export const fbprovider = new FacebookAuthProvider();
// const analytics = getAnalytics(app);
export const signInWithGoogle = (e) => {
  signInWithPopup(auth, ggprovider)
    .then((result) => {
      e.preventDefault();
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const signInWithFacebook = (e) => {
  signInWithPopup(auth, fbprovider)
    .then((result) => {
      e.preventDefault();
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
