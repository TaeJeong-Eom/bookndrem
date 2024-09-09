// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7Cr2wHVLZ7pOpQ34dWw3T2p4An73R-jE",
  authDomain: "personal-project-b5c2b.firebaseapp.com",
  projectId: "personal-project-b5c2b",
  storageBucket: "personal-project-b5c2b.appspot.com",
  messagingSenderId: "186854477794",
  appId: "1:186854477794:web:0b6de561f168acdfe073bb",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
