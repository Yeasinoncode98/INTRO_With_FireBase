// import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
// import { auth } from "../../Firebase/firebase.init";

const Register = () => {
  //   const useInfo = use(AuthContext);
  //   console.log("in registration", useInfo);

  const { createUser } = use(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  //   const handleRegister = (event) => {
  //     event.preventDefault();
  //     const email = event.target.email.value;
  //     const password = event.target.password.value;
  //     console.log(email, password);

  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then((result) => {
  //         console.log(result);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  return (
    <div className="card bg-base-100 mt-50 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Please Register!</h1>

        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* Name field */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Your Name"
            />

            {/* Email field */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
            />
            {/* Password field */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p>
          Already Have an account ? Please
          <Link className="text-blue-500 hover:text-blue-900 ml-2" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
