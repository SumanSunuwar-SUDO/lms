import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player/youtube";
import Like from "../../ui/Like";
import Dislike from "../../ui/Dislike";
import Like1 from "../../ui/Like1";
import Dislike1 from "../../ui/Dislike1";

const Coursecurriculum = () => {
  const [content, setContent] = useState({});
  const [test, setTest] = useState(true);
  const [test1, setTest1] = useState(true);
  const [query] = useSearchParams();
  const contentId = query.get("content");

  const getContent = async () => {
    try {
      const result = await axios({
        url: `http://localhost:1111/curriculum/content/${contentId}`,
        method: "GET",
      });
      console.log(result.data);
      setContent(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getContent();
  }, [contentId]);

  console.log("Video URL:", content.videoUrl);

  return (
    <div className="flex">
      <Sidebar />
      <section className="w-full">
        <h1 className="center my-5 text-2xl font-bold">{content.header}</h1>
        <div className="flex mx-[30px] justify-between">
          <div className="relative w-[420px] h-[250px] rounded-xl overflow-hidden">
            <ReactPlayer
              url={content.videoUrl}
              width="100%"
              height="100%"
              className="absolute top-0 left-0"
            />
          </div>
          <span className="w-[50%]">
            <p>{content.context}</p>
            <ul className="my-10 flex flex-col">
              <h2 className="font-bold">Course Objectives</h2>
              {content.objective?.map((obj, index) => (
                <li key={index} className="my-1 list-disc mx-5">
                  <p>{obj}</p>
                </li>
              ))}
            </ul>
          </span>
        </div>
        <div
          className="flex justify-between w-[50%] 
        "
        >
          <span className="mx-[30px] flex gap-7">
            <div
              onClick={() => {
                setTest(!test);
              }}
            >
              {test ? <Like1 /> : <Like />}
            </div>

            <div
              onClick={() => {
                setTest1(!test1);
                setTest(!test);
              }}
            >
              {test1 ? <Dislike1 /> : <Dislike />}
            </div>
          </span>

          <span className="mx-[20px]">
            <p>Instructor: Aaryan Sharma</p>
          </span>
        </div>

        <div className="flex items-center justify-center  w-full">
          <form className="w-full  bg-white rounded-lg px-4 pt-2">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-full px-3 mb-2 mt-2">
                <textarea
                  className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                  name="body"
                  placeholder="Type Your Comment"
                  required
                ></textarea>
              </div>
              <div className="w-full flex items-start md:w-full px-3">
                <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                  <svg
                    fill="none"
                    className="w-5 h-5 text-gray-600 mr-1"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-xs md:text-sm pt-px">This is a test</p>
                </div>
                <div className="-mr-1">
                  <input
                    type="submit"
                    className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                    value="Post Comment"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Coursecurriculum;
