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

      <section className="flex-col relative w-full pt-5 md:pt-0 ">
        {/* TOPSIDE DESKTOP */}
        <section className="link-color flex items-center border-b border-r border-t border-color ">
          <div
            className='flex items-center px-4 h-full py-[4.20px] border-r border-color cursor-pointer gap-3'
            
          >
            filter 1
          </div>

          <div
            className='flex items-center px-4 h-full py-[4.20px] border-r border-color cursor-pointer gap-3'
            
          >
            filter 2
          </div>

        </section>

    

        {/* CONTENT */}
        <ScrollArea
          className="md:flex-[50%] px-7 py-4 max-h-[310px] md:max-h-[670px] md:overflow-y-hidden link-color"
          style={{
            overflowY: "auto",
          }}
        >
          
        </ScrollArea>
      </section>
    </section>
  );
};

export default WorkRightContainer;
