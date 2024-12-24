import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import Toogle from "../ui/Toogle";

const Sidebar = () => {
  const [courseDetails, setCourseDetails] = useState([]);
  const [openIndex, setOpenIndex] = useState(null); // Tracks which dropdown is open
  const navigate = useNavigate();

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [query] = useSearchParams();
  const courseId = query.get("course");

  const getCurriculum = async (e) => {
    try {
      const result = await axios({
        url: `http://localhost:1111/curriculum?course=${courseId}`,
        method: "GET",
      });
      setCourseDetails(result.data);
    } catch (error) {}
  };

  useEffect(() => {
    getCurriculum();
  }, []);

  return (
    <aside className="h-screen shadow w-[35%] flex-col py-[20px] overflow-y-auto scroll-smooth ">
      <h1 className="text-center font-extrabold text-2xl text-blue-700 ">
        Course Overview
      </h1>
      <br />
      {courseDetails.map((value, index) => {
        return (
          <div key={index}>
            <h1
              className="center gap-2  font-bold text-xl cursor-pointer h-[50px] border border-transparent border-b-black"
              onClick={() => toggleDropdown(index)}
            >
              {value.title}
              <span
                className={
                  openIndex === index
                    ? "rotate-180 transition-all ease-linear duration-500 text-blue-500"
                    : "transition-all ease-linear duration-500 text-blue-500"
                }
              >
                <Toogle />
              </span>
            </h1>

            {openIndex === index && (
              <div>
                {value.content.map((value1, contentIndex) => {
                  return (
                    <div
                      key={contentIndex}
                      className="h-[50px] center w-full shadow hover:bg-slate-200 cursor-pointer text-gray-600"
                      onClick={() => {
                        navigate(
                          `/course?course=${courseId}&content=${value1._id}`
                        );
                      }}
                    >
                      <p>{value1.header}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;
