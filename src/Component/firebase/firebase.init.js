import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBwVkACmZHazrx3_QIG9tvwQJzbldDHNjU",
  authDomain: "assaignment-10-client-side.firebaseapp.com",
  projectId: "assaignment-10-client-side",
  storageBucket: "assaignment-10-client-side.firebasestorage.app",
  messagingSenderId: "290876440511",
  appId: "1:290876440511:web:b1422044a727bff535ab0a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
