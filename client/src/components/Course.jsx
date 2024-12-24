import axios from "axios";
import React, { useEffect, useState } from "react";

const Course = () => {
  const [courseDetails, setCourseDetails] = useState([]);
  const getCourse = async () => {
    try {
      const result = await axios({
        url: "http://localhost:1111/course/",
        method: "GET",
      });
      console.log(result);
      setCourseDetails(result.data);
    } catch (error) {
      console.error(error);
      return;
    }
  };

  useEffect(() => {
    getCourse();
  }, []);
  return (
    <div className="flex ">
      <main className="h-screen"></main>
    </div>
  );
};

export default Course;
