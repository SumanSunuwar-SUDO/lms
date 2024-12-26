import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import AddAssignments from "../components/AddAssignments";
import AddCourse from "../components/AddCourse";
import AddCurriculum from "../components/AddCurriculum";
import NavBar from "../layout/NavBar";
import Course from "../pages/(main)/Course";
import Coursecurriculum from "../pages/(main)/course-curriculum";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Verify from "../pages/Auth/Verify";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/Reset-password";
import { Routes, Route, Outlet } from "react-router-dom";
import Signup from "../pages/Signup";
import Verify from "../pages/Verify";
import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";
import ResetPassword from "../pages/Reset-password";
import Signup from "../pages/Signup";
import Verify from "../pages/Verify";
import Admin from "../pages/admin/Admin";
import Login from "../pages/Login";
import Course from "../pages/(main)/Course";
import Coursecurriculum from "../pages/(main)/course-curriculum";
import NavBar from "../layout/NavBar";
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
          <Route path={"/admin-dashboard"} element={<Outlet />}>
            <Route index element={<Admin />} />
            <Route path={"add-course"} element={<AddCourse />} />
            <Route path={"add-curriculum"} element={<AddCurriculum />} />
            <Route path={"add-assignments"} element={<AddAssignments />} />
          </Route>
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
