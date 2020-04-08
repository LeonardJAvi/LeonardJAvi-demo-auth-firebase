import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBlVw-tevfxNeHbDxFd841VGH1uL1Ozvbk",
  authDomain: "leonardjavilas.firebaseapp.com",
  databaseURL: "https://leonardjavilas.firebaseio.com",
  projectId: "leonardjavilas",
  storageBucket: "leonardjavilas.appspot.com",
  messagingSenderId: "9071395882",
  appId: "1:9071395882:web:73d765a2fadb1c2446af53",
  measurementId: "G-7BWVNV3SRY"
});

export default app;
