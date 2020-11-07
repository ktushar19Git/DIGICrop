import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/database";
import { Form } from '../models/form';

const config = {
    apiKey: "AIzaSyAySOGLSCWXXV3XBKt-WpCBd5dHaDTvzfE",
    authDomain: "english-e0fda.firebaseapp.com",
    databaseURL: "https://english-e0fda.firebaseio.com",
    projectId: "english-e0fda",
    storageBucket: "english-e0fda.appspot.com",
    messagingSenderId: "360531084828",
    appId: "1:360531084828:web:6303d556b114458ac581d9",
    measurementId: "G-NCHK03DNHH"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.firestore();



export const AuthUserContext = React.createContext(firebase.User);

// login the user
// Parameters:
//  - Email: the email address of the user
//  - Password: the users password
export function login(username, password) {
  return auth.signInWithEmailAndPassword(username, password);
}

// logout logs the user out
export const logout = () => auth.signOut();

// Sign Up the user to the website
// Parameters:
//  - firstname: users first name
//  - username: desired users username
//  - password: desired password of the user
export async function signUp(
  firstname,
  username,
  password
) {
  await auth.createUserWithEmailAndPassword(username, password);
  if (auth.currentUser) {
    await auth.currentUser.updateProfile({
      displayName: firstname,
    });
  }
}

// Password Reset
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = async (password) => {
  if (auth.currentUser) {
    await auth.currentUser.updatePassword(password);
  }
  throw Error("No auth.currentUser!");
};

export function isInitialized() {
  return new Promise((resolve) => {
    auth.onAuthStateChanged(resolve);
  });
}

// Get Users first name
export const getCurrentFirstname = () =>
  auth.currentUser && auth.currentUser.displayName;

//   // gets all data from collection
export async function getForms() {


  
  return null;
}
