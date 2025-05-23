import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBwVkACmZHazrx3_QIG9tvwQJzbldDHNjU",
  authDomain: "assaignment-10-client-side.firebaseapp.com",
  projectId: "assaignment-10-client-side",
  storageBucket: "assaignment-10-client-side.firebasestorage.app",
  messagingSenderId: "290876440511",
  appId: "290876440511:web:b1422044a727bff535ab0a",
};

// VITE_apiKey=AIzaSyBwVkACmZHazrx3_QIG9tvwQJzbldDHNjU
// VITE_authDomain=assaignment-10-client-side.firebaseapp.com
// VITE_projectId=assaignment-10-client-side
// VITE_storageBucket=assaignment-10-client-side.firebasestorage.app
// VITE_messagingSenderId=290876440511
// VITE_appId=1:290876440511:web:b1422044a727bff535ab0a


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
