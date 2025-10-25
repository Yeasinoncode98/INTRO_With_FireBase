import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Firebase/FireBase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleRegsiter = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const terms = event.target.terms.checked;
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    console.log("Submitted", email, password, terms, name, photo);

    // Total REGx Together

    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

    // const length6Pattern = /^.{6,}$/;
    // const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    // const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

    // if (!length6Pattern.test(password)) {
    //   console.log("Password didnt matched");
    //   setError("Password Must Be 6 Character or longer");
    //   return;
    // } else if (!casePattern.test(password)) {
    //   setError(
    //     "Password must have at least one uppercase and one lower case character"
    //   );
    //   return;
    // } else if (!specialCharPattern.test(password)) {
    //   setError("Error: Password must contain at least one special character!");
    //   return;
    // }

    if (!pattern.test(password)) {
      setError(
        "Error: Password must be at least 6 characters long, include uppercase, lowercase, and a special character!"
      );
      return;
    }

    // Reset error or success registration

    setError("");
    setSuccess(false);

    if (!terms) {
      setError("please Accept our terms and conditions");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("After creation of a new user ", result.user);
        setSuccess(true);
        event.target.reset();

        // Update user profile
        const profile = {
          displayName: name,
          photoURL: photo,
        };

        updateProfile(result.user, profile)
          .then(() => {})

          .catch(() => {});

        // Send Verification Email here

        sendEmailVerification(result.user).then(() => {
          alert("Please login to your email and  Verify Your Email Address");
        });
      })
      .catch((error) => {
        console.log("Error Happened", error);
        setError(error.message);
      });
  };

  const handleTogglePasswordShow = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegsiter}>
              <fieldset className="fieldset">
                {/* User Name */}
                <label className="label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Your Name"
                />
                {/* User Photo url */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  className="input"
                  placeholder="PhotoUrl"
                />
                {/* user email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />

                {/* User Password */}
                <label className="label">Password</label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input"
                    placeholder="Password"
                    name="password"
                  />
                  <button
                    onClick={handleTogglePasswordShow}
                    className="btn btn-xs absolute top-2 right-5"
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </button>
                </div>

                <div>
                  <label class="label">
                    <input type="checkbox" name="terms" class="checkbox" />
                    Accept Our Term and Conditions
                  </label>
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              {success && (
                <p className="text-green-500">Account Created SucessFully</p>
              )}
              {error && <p className="text-red-500">{error}</p>}
            </form>
            <p>
              Already Have an Account ? Please{" "}
              <Link className="text-blue-500 underline" to="/login">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
