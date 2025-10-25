import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link } from "react-router";
import { auth } from "../../Firebase/FireBase.init";

const Login = () => {
  const [error, setError] = useState("");

  const emailRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if (!result.user.emailVerified) {
          alert("Please Verify Your Email Adress");
        }
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    console.log("forget pass", email);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please chck your email");
      })
      .catch((error) => {
        console.log("Errror Happened", error);
      });
  };

  return (
    <div className="card bg-base-100  mt-10 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className="text-5xl font-bold">Login now!</h2>

        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
              ref={emailRef}
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
            />
            <div onClick={handleForgetPassword}>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>

        {error && <p className="text-red-500">{error}</p>}
        <p>
          New to Our Website? Please{" "}
          <Link className="text-blue-500 underline" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
