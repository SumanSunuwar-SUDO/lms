import React from "react";
import { Route, Routes } from "react-router-dom";

const myRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<div>Hi</div>}></Route>
      </Routes>
    </div>
  );
};

export default myRoutes;
