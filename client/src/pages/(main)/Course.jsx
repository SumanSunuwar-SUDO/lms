import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const [course, setCourse] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      const result = await axios({
        url: `http://localhost:1111/course`,
        method: "GET",
      });
      setCourse(result.data);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <div className="center h-screen w-full">
      {course.map((value, index) => {
        return (
          <div
            key={index}
            className="h-[360px] w-[270px] shadow-xl rounded-lg self-center cursor-pointer overflow-hidden"
            onDoubleClick={() => {
              navigate(`/course?course=${value._id}`);
            }}
          >
            <div className="h-[150px] w-full overflow-hidden ">
              <img src={value.image} />
            </div>
            <span className="flex justify-between mx-[5px] my-[10px]">
              <h2 className="font-bold">{value.title}</h2>
              <p className="bg-blue-500 text-white w-[100px] center font-semibold">
                {value.level}
              </p>
            </span>
            <p className="mx-[5px] my-[20px] text-gray-600 tracking-wide">
              {value.courseDescription}
            </p>

            <span className="flex justify-between mx-[5px]">
              <p className="bg-gray-300  flex justify-center items-center w-[120px] text-[12px]">
                {value.instructor}
              </p>
              <p className="bg-gray-300  center w-[120px] text-[12px]">
                Duration: {value.duration}{" "}
              </p>
            </span>

            <div className="flex justify-center my-[15px]">
              <button className="bg-blue-500 text-white center w-[100px] h-[25px] rounded-sm">
                Enroll now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Course;
