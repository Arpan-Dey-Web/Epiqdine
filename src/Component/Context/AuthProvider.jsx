import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init";
const googleProvider = new GoogleAuthProvider();
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const logInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInuser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };
  const updataUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    // console.log(user);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => { 
      unsubscribe();
    };
  }, []);

  const context = {
    logInWithGoogle,
    createUser,
    signInuser,
    signOutUser,
    updataUserProfile,
    user,
    setUser,
    loading,
    setLoading,
  };
  return <AuthContext value={context}>{children}</AuthContext>;
};

export default AuthProvider;
