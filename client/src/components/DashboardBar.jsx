import React from "react";
import "../index.css";

const DashboardBar = () => {
  return (
    <div>
      <aside className="h-screen bg-gray-300">
        <div>
          <h1 className="text-[40px] font-bold ">Admin panel </h1>
        </div>
        <div>
          <ul className="flex flex-col items-start justify-center gap-6 mt-4">
            <li className="w-full px-1 py-3 transition-all hover:bg-gray-600">
              <a href="" className="text-[20px] font-semibol ">
                Add course
              </a>
            </li>
            <li className="w-full px-1 py-3 transition-all hover:bg-gray-600">
              <a href="" className="text-[20px] font-semibold">
                Update Course
              </a>
            </li>
            <li className="w-full px-1 py-3 transition-all hover:bg-gray-600">
              <a href="" className="text-[20px] font-semibold">
                Delete course
              </a>
            </li>
            <li className="w-full px-1 py-3 transition-all hover:bg-gray-600">
              <a href="" className="text-[20px] font-semibold">
                User
              </a>
            </li>
            <li className="w-full px-1 py-3 transition-all hover:bg-gray-600">
              <a href="" className="text-[20px] font-semibold">
                Settings
              </a>
            </li>
            <li className="w-full px-1 py-3 transition-all hover:bg-gray-600">
              <a href="" className="text-[20px] font-semibold">
                Settings
              </a>
            </li>
            <li className="w-full px-1 py-3 transition-all hover:bg-gray-600">
              <a href="" className="text-[20px] font-semibold">
                Settings
              </a>
            </li>
            <li className="w-full px-1 py-3 transition-all hover:bg-gray-600">
              <a href="" className="text-[20px] font-semibold">
                Settings
              </a>
            </li>
            <li className="w-full px-1 py-3 transition-all hover:bg-gray-600">
              <a href="" className="text-[20px] font-semibold">
                Settings
              </a>
            </li>
            <li className="w-full px-1 py-3 transition-all hover:bg-gray-600">
              <a href="" className="text-[20px] font-semibold">
                Settings
              </a>
            </li>
            <li className="w-full px-1 py-3 transition-all hover:bg-gray-600">
              <a href="" className="text-[20px] font-semibold">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default DashboardBar;
