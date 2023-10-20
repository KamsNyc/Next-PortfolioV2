'use client'

import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProjectTemplate from "../work/ProjectTemplate";

const WorkRightContainer = () => {
  const [selectedTab, setSelectedTab] = useState<string>("projects"); 

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const projects = [
    {title: 'Sunpower Estimates', subTitle: 'Empowering Pharmacies Toward a Healthier Africa.', coverVideoLink: '/sunpowercover.png', about:'this project is this project is this project is this project is this project is this project is this project is this project is this project isthis project isthis project isthis project isthis project isthis project isthis project is this project isthis project is this project is this project is this project is this project is this project is this project is this project is this project is this project isthis project isthis project isthis project isthis project isthis project isthis project is this project isthis project is', webLink:'www.sunpowerestimate.com', gitLink:'www.github.com/KamsNyc/Next-PortfolioV2', mainCoverLink:'/sunpower.gif', badges: ['Wordpress',  'Javascript', 'Firebase', 'Branding'],},

    {title: 'Sunpower Estimates', subTitle: 'Empowering Pharmacies Toward a Healthier Africa.', coverVideoLink: '/project2.png', about:'this project is this project is this project is this project is this project is this project is this project is this project is this project isthis project isthis project isthis project isthis project isthis project isthis project is this project isthis project is this project is this project is this project is this project is this project is this project is this project is this project is this project isthis project isthis project isthis project isthis project isthis project isthis project is this project isthis project is', webLink:'www.youtube.com', gitLink:'link not found', mainCoverLink:'/project2.png', badges: ['Nextjs', 'React', 'Node.js'],},

    {title: 'Sunpower Estimates', subTitle: 'Empowering Pharmacies Toward a Healthier Africa.', coverVideoLink: '/project2.png', about:'this project is this project is this project is this project is this project is this project is this project is this project is this project isthis project isthis project isthis project isthis project isthis project isthis project is this project isthis project is this project is this project is this project is this project is this project is this project is this project is this project is this project isthis project isthis project isthis project isthis project isthis project isthis project is this project isthis project is', webLink:'www.youtube.com', gitLink:'link not found', mainCoverLink:'/project2.png', badges: ['Nextjs', 'React', 'Node.js'],},

    {title: 'Sunpower Estimates', subTitle: 'Empowering Pharmacies Toward a Healthier Africa.', coverVideoLink: '/project2.png', about:'this project is this project is this project is this project is this project is this project is this project is this project is this project isthis project isthis project isthis project isthis project isthis project isthis project is this project isthis project is this project is this project is this project is this project is this project is this project is this project is this project is this project isthis project isthis project isthis project isthis project isthis project isthis project is this project isthis project is', webLink:'www.youtube.com', gitLink:'link not found', mainCoverLink:'/project2.png', badges: ['Firebase', 'Javascript', 'Wordpress', 'Tailwind'],},
  ]

  return (
    <section className="md:flex w-full h-full">
      {/* LEFT SPLIT */}
      <section className="flex flex-col relative w-full">
        {/* TOPSIDE DESKTOP */}
        <section className="link-color flex items-center border-b border-r border-color">
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
              selectedTab === "casestudy" ? "font-bold" : ""
            }`}
            onClick={() => handleTabClick("casestudy")}
          >
            casestudy
            {selectedTab === "casestudy" && <AiOutlineClose size={16} />}
          </div>
        </section>

        {/* TOPSIDE MOBILE */}
        <section className="flex md:hidden mt-2 px-7">
          <h1 className="text-[14px]">
            {/* personal-info */}
            &gt; personal-info
            <span className="text-[14px] link-color pl-2 tracking-tighter">
              ops
            </span>
          </h1>
        </section>

        {/* CONTENT */}
        <ScrollArea
          className="md:flex-[50%] mt-4 px-7 py-4 max-h-[280px] md:max-h-[670px] md:overflow-y-hidden link-color"
          style={{
            overflowY: "auto",
          }}
        >
          {selectedTab === "projects" && (
            <section className="h-full w-full">
              {/* PROJECT GRID */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full h-full ">
                {/* PROJECT GRID 1 */}
                
                {/* NEED TO MAP INTO A COL-SPAN-1 */}
                {
                  projects.map( (project) => {
                    return (
                      <>
                      <div className="col-span-1 mb-4 md:mb-0 hover:scale-95 duration-300 ease-in ">
                <ProjectTemplate title={project.title} subTitle={project.subTitle} coverVideoLink={project.coverVideoLink} about={project.about} webLink={project.webLink} gitLink={project.gitLink} mainCoverLink={project.mainCoverLink} badges={project.badges}/>
                </div>
                
                </>
                    )
                    
                  })
                }
                
                
              
              </div>
            </section>
          )}
          {selectedTab === "casestudy" && (
            <h1 className="text-[14px] md:text-[15px]">this is my content for olipop</h1>
          )}
        </ScrollArea>
      </section>
    </section>
  );
};

export default WorkRightContainer;