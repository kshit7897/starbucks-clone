import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBarrmzZkwDcmCKboEw6Cr3h9hD5VLht54",
  authDomain: "starbucks-c10c7.firebaseapp.com",
  projectId: "starbucks-c10c7",
  storageBucket: "starbucks-c10c7.appspot.com",
  messagingSenderId: "45581894696",
  appId: "1:45581894696:web:1e83dc563436d08bd3611d",
  measurementId: "G-ERXK7QV0DZ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;