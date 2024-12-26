import axios from "axios";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
import DashboardBar from "../../components/DashboardBar";
import MainDashboard from "../../components/MainDashboard";

function Admin() {
  return (
    <>
      <section className="flex w-full h-screen py-10 bg-gray-50 sm:py-0 lg:py-0">
        <div className="overflow-y-auto w-[30%]">
          <DashboardBar />
        </div>
        <div className="w-[70%] ">
          <MainDashboard />
        </div>
      </section>
    </>
  );
}

export default Admin;
