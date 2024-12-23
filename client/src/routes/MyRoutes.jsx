import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import Verify from "../pages/Verify";
import Login from "../pages/Login";
import Course from "../pages/(main)/Course";
import Coursecurriculum from "../pages/(main)/course-curriculum";
const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/signup"} element={<Signup />}></Route>
        <Route path={"/verify"} element={<Verify />}></Route>
        <Route path={"/courses"} element={<Course />}></Route>
        <Route path={"/course"} element={<Coursecurriculum />}></Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
