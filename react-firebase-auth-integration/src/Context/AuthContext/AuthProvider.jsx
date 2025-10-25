import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  const createUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setloading(true);
    return signOut(auth);
  };

  const signInWithGoogle = () => {
    setloading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // useEffect(()=>{},[])

  //   useEffect(() => {
  // step 1 : Observer set
  // step 2 : set in  a variable
  // step 3 : return and call the variable so that you can clear the ref

  //   }, []);

  useEffect(() => {
    // Mount the observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user in authstagechanged", currentUser);
      setUser(currentUser);
      setloading(false);
    });
    // clear the observer on unMount
    return () => {
      unsubscribe();
    };
  }, []);

  // get current user info like an observer

  //   onAuthStateChanged(auth, (currenUser) => {
  //     if (currenUser) {
  //       console.log("Inside observer : if", currenUser);
  //     } else {
  //       console.log("Inside observer : else", currenUser);
  //     }
  //   });

  const authInfo = {
    // createUser: createUser,
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
  };

  return (
    <div>
      <AuthContext value={authInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;

/**
 * 1.create a context and export to use from anywhere
 * 2.Create a provider -- so that you can reuse the context
 * 3.ensure you use the children prop
 * 4.and make sure use the auth provider in the router
 * 5.Make the create user with email and password shared via provider
 * 6.set createuser in the authInfo object to share via context
 */
