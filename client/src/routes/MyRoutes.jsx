import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Verify from "../pages/Auth/Verify";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/Reset-password";
const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/signup"} element={<Signup />}></Route>
        <Route path={"/verify"} element={<Verify />}></Route>
        <Route path={"/forgot-password"} element={<ForgotPassword />}></Route>
        <Route path={"/reset-password"} element={<ResetPassword />}></Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
