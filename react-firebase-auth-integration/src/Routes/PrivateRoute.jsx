// import React, { use } from "react";
// import { AuthContext } from "../Context/AuthContext/AuthContext";
// import { Navigate } from "react-router";

// const PrivateRoute = ({ children }) => {
//   const { user } = use(AuthContext);
//   if (user) {
//     return children;
//   }

//   return <Navigate to="/login"></Navigate>;
// };

// export default PrivateRoute;

import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  const location = useLocation();
  console.log(location);

  if (loading) {
    return <span className="loading loading-spinner text-success"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
