import axios from "axios";
import { useDropzone } from "react-dropzone";
import React, { useState, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";

function Admin() {
  const [courseImage, setCourseImage] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [courseInstructor, setCourseInstructor] = useState("");
  const [courseCategory, setCourseCategory] = useState("");

  const category = [
    { name: "Designing", value: "designing" },
    { name: "Development", value: "development" },
    { name: "Marketing", value: "marketing" },
    { name: "Business", value: "business" },
    { name: "IT", value: "it" },
    { name: "Language", value: "language" },
  ];

  const onDrop = useCallback(async (acceptedFiles) => {
    try {
      const fileData = acceptedFiles[0];
      const data = new FormData();
      data.append("document", fileData);

      const result = await axios({
        method: "POST",
        url: "http://localhost:1111/file/single",
        data: data,
      });
      setCourseImage(result.data.result);
    } catch (error) {
      console.error("File upload failed:", error);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const courseData = {
      courseImage,
      courseTitle,
      courseDescription,
      courseDuration,
      coursePrice,
      courseInstructor,
      courseCategory,
    };

    try {
      const result = await axios({
        url: "http://localhost:1111/course/",
        method: "POST",
        data: courseData,
      });
      console.log("Course added successfully:", result);
      setCourseImage("");
      setCourseTitle("");
      setCourseDescription("");
      setCourseDuration("");
      setCoursePrice("");
      setCourseInstructor("");
      setCourseCategory("");
    } catch (error) {
      console.error("Failed to add course:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 text-white bg-blue-600">
        <h1 className="text-xl">Admin Panel</h1>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 p-4 text-white bg-gray-800">
          <nav>
            <ul>
              <li className="mb-2">
                <a href="/dashboard" className="hover:underline">
                  Dashboard
                </a>
              </li>
              <li className="mb-2">
                <a href="/admin-dashboard/users" className="hover:underline">
                  Users
                </a>
              </li>
              <li className="mb-2">
                <a href="/settings" className="hover:underline">
                  Settings
                </a>
              </li>
              <li className="mb-2">
                <a href="/courses" className="hover:underline">
                  See all Courses
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-4">
          <h2 className="mb-4 text-2xl font-bold">Dashboard</h2>
          <ToastContainer />
          <form
            className="flex flex-col gap-3 p-4 bg-white rounded shadow w-[500px]"
            onSubmit={handleSubmit}
          >
            <div
              {...getRootProps()}
              className="p-4 text-center border border-dashed"
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drag 'n' drop a file here, or click to select one</p>
              )}
              {courseImage && (
                <img src={courseImage} alt="course" className="mt-2" />
              )}
            </div>
            <input
              type="text"
              className="p-2 border border-gray-700"
              placeholder="Course Title"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
            />
            <input
              type="text"
              className="p-2 border border-gray-700"
              placeholder="Course Description"
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
            />
            <input
              type="text"
              className="p-2 border border-gray-700"
              placeholder="Course Duration"
              value={courseDuration}
              onChange={(e) => setCourseDuration(e.target.value)}
            />
            <input
              type="text"
              className="p-2 border border-gray-700"
              placeholder="Course Price"
              value={coursePrice}
              onChange={(e) => setCoursePrice(e.target.value)}
            />
            <input
              type="text"
              className="p-2 border border-gray-700"
              placeholder="Course Instructor"
              value={courseInstructor}
              onChange={(e) => setCourseInstructor(e.target.value)}
            />
            <select
              className="p-2 border border-gray-700"
              value={courseCategory}
              onChange={(e) => setCourseCategory(e.target.value)}
            >
              <option value="" disabled>
                Select Category
              </option>
              {category.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.name}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-cyan-700 hover:bg-cyan-800"
            >
              Add Course
            </button>
          </form>
        </main>
      </div>
      <footer className="p-4 text-center text-white bg-gray-800">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Admin;
