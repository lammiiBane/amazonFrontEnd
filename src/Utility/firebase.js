import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiRNxcIOZsJOlmeVyi6yue8QeMKB8lzpg",
  authDomain: "clone-50ee4.firebaseapp.com",
  projectId: "clone-50ee4",
  storageBucket: "clone-50ee4.appspot.com",
  messagingSenderId: "937713083036",
  appId: "1:937713083036:web:863e6dcf5e3b8f23c4c359"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();

