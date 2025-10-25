import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
githubProvider.addScope("user:email"); // 👈 THIS IS THE FIX!
const Login = () => {
  const [user, setUser] = useState(null);
  const handleGoogleSignIn = () => {
    // console.log("google");

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out done");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignInWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);

        const loggedInUser = result.user;
        if (!loggedInUser.email) {
          if (loggedInUser.providerData) {
            const gitProvider = loggedInUser.providerData.find(
              (p) => p.providerId === "github.com"
            );
            if (gitProvider && gitProvider.email) {
              //   console.log("github email", gitProvider.email);

              loggedInUser.email = gitProvider.email;
              //   setUser(loggedInUser);
            }
          }
        }

        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Please login </h1>
      {/* <button onClick={handleGoogleSignIn}>Sign in With Google</button>
      <button onClick={handleSignOut}>Sign Out</button> */}

      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Sign in With Google</button>
          <button onClick={handleSignInWithGithub}>Sign in With GitHub</button>
        </>
      )}

      {user && (
        <div>
          <h3>{user?.displayName}</h3>
          <h5>Email : {user?.email}</h5>
          {/* <img src={user.photoURL} alt="" /> */}
          <img
            src={user.photoURL}
            alt="User"
            width="80"
            height="80"
            style={{ borderRadius: "50%" }}
          />
        </div>
      )}
    </div>
  );
};

export default Login;
