// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAciHUAtwIoZ0PA-CQrFUnvFMWUYPwNe3Q",
  authDomain: "viajafacil-d7038.firebaseapp.com",
  projectId: "viajafacil-d7038",
  storageBucket: "viajafacil-d7038.firebasestorage.app",
  messagingSenderId: "726876506354",
  appId: "1:726876506354:web:bd79fbf656f2d20c05e86b",
  measurementId: "G-7HQLGCLBFN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const loginWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);
const registerWithEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);
const logout = () => signOut(auth);

const googleProvider = new GoogleAuthProvider();
const loginWithGoogle = () => signInWithPopup(auth, googleProvider);

export {
  app,
  analytics,
  auth,
  loginWithEmail,
  registerWithEmail,
  logout,
  loginWithGoogle
};