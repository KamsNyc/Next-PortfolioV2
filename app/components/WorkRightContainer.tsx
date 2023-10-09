'use client'

import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ScrollArea } from "@/components/ui/scroll-area";

const WorkRightContainer = () => {
  const [selectedTab, setSelectedTab] = useState<string>("projects"); // Specify the type as string

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <section className="md:flex w-full h-full">
      {/* LEFT SPLIT */}

      <section className="flex flex-col relative w-full ">
        {/* TOPSIDE DESKTOP */}
        <section className="link-color flex items-center border-b border-r border-color ">
          <div
            className={`flex items-center px-4 h-full py-[4.20px] border-r border-color cursor-pointer gap-3 ${
              selectedTab === "projects" ? "font-bold" : ""
            }`}
            onClick={() => handleTabClick("projects")}
          >
            projects
            {selectedTab === "projects" && <AiOutlineClose size={16} />}
          </div>

          <div
            className={`flex items-center px-4 h-full py-[4.20px] border-r border-color cursor-pointer gap-3 ${
              selectedTab === "OLIPOP" ? "font-bold" : ""
            }`}
            onClick={() => handleTabClick("OLIPOP")}
          >
            OLIPOP
            {selectedTab === "OLIPOP" && <AiOutlineClose size={16} />}
          </div>

          <div
            className={`flex items-center px-4 h-full py-[4.20px] border-r border-color cursor-pointer gap-3 ${
              selectedTab === "SUNPOWER" ? "font-bold" : ""
            }`}
            onClick={() => handleTabClick("SUNPOWER")}
          >
            SUNPOWER
            {selectedTab === "SUNPOWER" && <AiOutlineClose size={16} />}
          </div>
        </section>

        {/* TOPSIDE MOBILE */}
        <section className="flex md:hidden mt-2 px-7">
          <h1 className="text-[14px]">
            {/* personal-info */}
            &gt; personal-info
            <span className="text-[14px] link-color pl-2 tracking-tighter ">
              ops
            </span>
          </h1>
        </section>

        {/* CONTENT */}
        <ScrollArea
          className="md:flex-[50%] px-7 py-4 max-h-[310px] md:max-h-[670px] md:overflow-y-hidden link-color"
          style={{
            overflowY: "auto",
          }}
        >
          {selectedTab === "projects" && <h1 className="text-[14px] md:text-[15px]">explain my project how my tabs work and my main project</h1>}
          {selectedTab === "OLIPOP" && <h1 className="text-[14px] md:text-[15px]">this is my content for olipop</h1>}

          {selectedTab === "SUNPOWER" && <h1 className="text-[14px] md:text-[15px]">this is my content for sunpower</h1>}
        </ScrollArea>
      </section>
    </section>
  );
};

export default WorkRightContainer;
