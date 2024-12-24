import React from "react";
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Verify from "../pages/Auth/Verify";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/Reset-password";
=======
import { Routes, Route, Outlet } from "react-router-dom";
import Signup from "../pages/Signup";
import Verify from "../pages/Verify";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/Reset-password";
import Home from "../components/Home";
import Admin from "../pages/admin/Admin";
import Login from "../pages/Login";
import Course from "../pages/(main)/Course";
import Coursecurriculum from "../pages/(main)/course-curriculum";
import NavBar from "../layout/NavBar";
>>>>>>> ab40b6f0383c19a13daf7191ea26da3efbea9fec
const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path={"/"}
          element={
            <div>
              <NavBar />
              <Outlet />
            </div>
          }
        >
          <Route path={"courses"} element={<Course />}></Route>
          <Route path={"course"} element={<Coursecurriculum />} />
          <Route path={"reset-password"} element={<ResetPassword />}></Route>
          <Route path={"admin-dashboard"} element={<Admin />} />
        </Route>
        <Route path={"/forgot-password"} element={<ForgotPassword />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/signup"} element={<Signup />}></Route>
        <Route path={"/verify"} element={<Verify />}></Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
