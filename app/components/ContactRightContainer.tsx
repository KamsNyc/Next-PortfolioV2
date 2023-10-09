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

      <section className="flex-col relative w-full ">
        {/* TOPSIDE DESKTOP */}
        <section className="link-color hidden md:flex items-center border-b border-r border-color ">
          <div
            className='flex items-center px-4 h-full py-[4.20px] border-r border-color cursor-pointer gap-3'
            
          >
            this will be my filter
          </div>

        </section>

    

        {/* CONTENT */}
        <ScrollArea
          className="md:flex-[50%] px-7 py-4 max-h-[310px] md:max-h-[670px] md:overflow-y-hidden link-color"
          style={{
            overflowY: "auto",
          }}
        >
          dada
        </ScrollArea>
      </section>
    </section>
  );
};

export default WorkRightContainer;
