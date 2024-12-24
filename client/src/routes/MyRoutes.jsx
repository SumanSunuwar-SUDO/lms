import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Signup from "../pages/Signup";
import Verify from "../pages/Verify";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/Reset-password";
import Home from "../components/Home";
import Admin from "../pages/admin/Admin";
import Login from "../pages/Login";
const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/signup"} element={<Signup />}></Route>
        <Route path={"/verify"} element={<Verify />}></Route>
        <Route path={"/forgot-password"} element={<ForgotPassword />}></Route>
        <Route path={"/reset-password"} element={<ResetPassword />}></Route>
        <Route path={"/admin-dashboard"} element={<Admin />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
