import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import Verify from "../pages/Verify";
import Login from "../pages/Login";
const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/signup"} element={<Signup />}></Route>
        <Route path={"/verify"} element={<Verify />}></Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
