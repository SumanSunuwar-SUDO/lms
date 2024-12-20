import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/login"} element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
