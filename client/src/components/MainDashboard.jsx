import React, { useState } from "react";
import "../index.css";

const MainDashboard = () => {
  const [activeTab, setActiveTab] = useState("addCourse");
  const [isCourseSubmitted, setIsCourseSubmitted] = useState(false);
  const [isCurriculumSubmitted, setIsCurriculumSubmitted] = useState(false);

  let levels = [
    { level: "Beginner", value: "Beginner" },
    { level: "Intermediate", value: "Intermediate " },
    { level: "Advanced", value: "Advanced" },
  ];
  const handleSbmit = (tabName) => {
    if (tabName === "addCourse") {
      setIsCourseSubmitted(true);
      setActiveTab("addCurriculum");
    } else if (tabName === "addCurriculum") {
      setIsCurriculumSubmitted(true);
      setActiveTab("addAssignment");
    } else if (tabName === "addAssignment") {
      alert("Everything id done..");
      setActiveTab("addCourse");
    }
  };

  return (
    <>
      <section className="flex flex-col items-center justify-start w-full h-screen gap-5">
        <div className="flex items-center justify-center gap-5">
          <button
            type="submit"
            className={`p-5 ${
              activeTab === "addCourse" ? "bg-blue-300" : "bg-gray-300"
            }`}
            disabled={activeTab !== "addCourse"}
            onClick={() => setActiveTab("addCourse")}
          >
            Add Course
          </button>

          <button
            className={`p-5  ${
              activeTab === "addCurriculum" ? "bg-blue-300" : "bg-gray-300"
            }`}
            disabled={!isCourseSubmitted}
            onClick={() => setActiveTab("addCurriculum")}
          >
            Add Curriculum
          </button>

          <button
            className={`p-5 ${
              activeTab === "addAssignment" ? "bg-blue-300" : "bg-gray-300"
            }`}
            disabled={!isCurriculumSubmitted}
            onClick={() => setActiveTab("addAssignment")}
          >
            Add Assignment
          </button>
        </div>

        <div className="mt-5">
          {activeTab === "addCourse" && (
            <div className="p-5 bg-gray-100 border rounded">
              <h3 className="mb-3 text-xl font-bold">Add Course</h3>
              <input
                type="text"
                required
                placeholder="Course Name"
                className="w-full p-2 mb-3 border"
              />
              <textarea
                required
                placeholder="Course Description"
                className="w-full p-2 mb-3 border"
              />
              <input
                type="file"
                placeholder="Course Image"
                className="w-full px-3 py-4 mb-3 border border-gray-500 border-dashed"
              />
              <input
                type="text"
                required
                placeholder="Duration"
                className="w-full p-2 mb-3 border"
              />{" "}
              <input
                type="text"
                required
                placeholder="Instructor"
                className="w-full p-2 mb-3 border"
              />
              <select className="w-full p-2 mb-3 border">
                {levels.map((level, index) => {
                  return <option key={index}>{level.level}</option>;
                })}
              </select>
              <button
                className="w-full p-2 text-white bg-blue-500"
                onClick={() => {
                  handleSbmit("addCourse");
                }}
              >
                Next
              </button>
            </div>
          )}

          {activeTab === "addCurriculum" && (
            <div className="p-5 bg-gray-100 border rounded">
              <h3 className="mb-3 text-xl font-bold">Add Curriculum</h3>
              <input
                type="text"
                required
                placeholder="Curriculum Name"
                className="w-full p-2 mb-3 border"
              />

              <textarea
                placeholder="Curriculum Description"
                className="w-full p-2 mb-3 border"
                required
              />
              <button
                className="p-2 text-white bg-blue-500"
                onClick={() => {
                  handleSbmit("addCurriculum");
                }}
              >
                Submit
              </button>
            </div>
          )}

          {activeTab === "addAssignment" && (
            <div className="p-5 bg-gray-100 border rounded">
              <h3 className="mb-3 text-xl font-bold">Add Assignment</h3>
              <input
                type="text"
                placeholder="Assignment Title"
                required
                className="w-full p-2 mb-3 border"
              />
              <textarea
                placeholder="Assignment Details"
                className="w-full p-2 mb-3 border"
                required
              />
              <button
                className="p-2 text-white bg-blue-500"
                onClick={() => {
                  handleSbmit("addAssignment");
                }}
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default MainDashboard;
