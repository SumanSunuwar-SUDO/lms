import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
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
      <aside className="h-screen shadow w-[25%] flex-col py-[20px]">
        <h1 className="text-center font-bold text-xl">Course Overview</h1>
        {courseDetails.map((value, index) => {
          return (
            <div key={index} className="py-[10px] border-gray-400">
              <h2 className="font-semibold text-center ">{value.title}</h2>
              <br />
              <span className="text-lg font-bold">Course Description:</span>
              <p>{value.description}</p>
              <br />
              <ul className="flex flex-col justify-center items-center gap-2">
                {value.curriculum &&
                  value.curriculum.map((item, idx) => (
                    <li
                      key={idx}
                      className="h-[40px] w-full shadow flex items-center justify-center cursor-pointer hover:bg-slate-100"
                    >
                      {item.title}
                    </li>
                  ))}
              </ul>
            </div>
          );
        })}
      </aside>
      <main className="h-screen"></main>
    </div>
  );
}

export default App;
