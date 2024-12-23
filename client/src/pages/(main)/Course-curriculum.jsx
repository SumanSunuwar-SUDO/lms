import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player/youtube";

const Coursecurriculum = () => {
  const [content, setContent] = useState({});
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
                <li key={index} className="my-2 list-disc mx-5">
                  <p>{obj}</p>
                </li>
              ))}
            </ul>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Coursecurriculum;
