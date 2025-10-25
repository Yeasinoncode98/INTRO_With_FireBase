import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Components/NavBar/NavBar";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
