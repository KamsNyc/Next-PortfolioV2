"use client";
import React, { useState } from "react";
import { AiFillCloseCircle, AiOutlineClose } from "react-icons/ai";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import Card from "./Card";
import AllReview from "./AllReview";
import AboutItem from "./AboutItem";

type AboutRightContainerProps = {
  selectedItem: string;
};

const AboutRightContainer: React.FC<AboutRightContainerProps> = ({
  selectedItem,
}) => {
  let content: React.ReactNode = null;

  if (selectedItem === "bio") {
    content = (
      <div>
        kamel singh this is my bio. kamel singh this is my bio. kamel singh this
        is my bio. kamel singh this is my bio. kamel singh this is my bio. kamel
        singh this is my bio. kamel singh this is. kamel singh this is my bio.
        kamel singh this is. kamel sing kamel singh this is my bio. kamel singh
        this is my bio. kamel singh this is my bio. kamel singh this is my bio.
        kamel singh this is my bio. kamel singh this is my bio. kamel singh this
        is. kamel singh this is my bio. kamel singh this is. kamel sing kamel
        singh this is my bio. kamel singh this is my bio. kamel singh this is my
        bio. kamel singh this is my bio. kamel singh this is my bio. kamel singh
        this is my bio. kamel singh this is. kamel singh this is my bio. kamel
        singh this is. kamel sing kamel singh this is my bio. kamel singh this
        is my bio. kamel singh this is my bio. kamel singh this is my bio. kamel
        singh this is my bio. kamel singh this is my bio. kamel singh this is.
        kamel singh this is my bio. kamel singh this is. kamel sing kamel singh
        this is my bio. kamel singh this is my bio. kamel singh this is my bio.
        kamel singh this is my bio. kamel singh this is my bio. kamel singh this
        is my bio. kamel singh this is. kamel singh this is my bio. kamel singh
        this is. kamel sing kamel singh this is my bio. kamel singh this is my
        bio. kamel singh this is my bio. kamel singh this is my bio. kamel singh
        this is my bio. kamel singh this is my bio. kamel singh this is. kamel
        singh this is my bio. kamel singh this is. kamel sing kamel singh this
        is my bio. kamel singh this is my bio. kamel singh this is my bio. kamel
        singh this is my bio. kamel singh this is my bio. kamel singh this is my
        bio. kamel singh this is. kamel singh this is my bio. kamel singh this
        is. kamel sing kamel singh this is my bio. kamel singh this is my bio.
        kamel singh this is my bio. kamel singh this is my bio. kamel singh this
        is my bio. kamel singh this is my bio. kamel singh this is. kamel singh
        this is my bio. kamel singh this is. kamel sing
      </div>
    );
  } else if (selectedItem === "interests") {
    content = "This is my interests for now.";
  } else if (selectedItem === "skills") {
    content = "This is my skills content.";
  } else if (selectedItem === "reviews") {
    content = <AllReview />;
  }

  const [showReviewBox, setShowReviewBox] = useState(false);

  return (
    <section className="md:flex w-full h-full">
      {/* LEFT SPLIT */}

      <section className="md:flex-[50%] flex flex-col relative ">
        {/* TOPSIDE DESKTOP */}
        <section className="link-color hidden md:flex items-center border-b border-r border-color ">
          <div className="flex items-center px-4 h-full py-[4.20px] border-r border-color cursor-pointer gap-3">
            {`${selectedItem}`}
            <AiOutlineClose size={16} />
          </div>
        </section>

        {/* TOPSIDE MOBILE */}
        <section className="flex md:hidden mt-2 px-7">
          <h1 className="text-[14px]">
            {/* personal-info */}
            &gt; personal-info
            <span className="text-[14px] link-color pl-2 tracking-tighter ">
              {`/ ${selectedItem}`}
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
          <h1 className="text-[14px] md:text-[15px]">{content}</h1>
        </ScrollArea>
      </section>

      {/* RIGHT SPLIT */}
      <section className="md:flex-[50%] border-l border-color mt-4 md:mt-0 w-full">
        {/* TOPSIDE DESKTOP */}
        <section className="link-color flex items-center md:border-b border-color ">
          <div className="flex items-center gap-6 px-7 h-full py-[5.4px] ">
            <h1 className="text-white text-[14px] md:text-[#011627]">
              <Link
                className="hover:scale-105 hover:bg-red-500 md:hover:bg-transparent duration-500 cursor-pointer md:cursor-default ease-in-out"
                href={"/work"}
              >
                &gt; click here to see all of my projects:
              </Link>
            </h1>
          </div>
        </section>

        {/*MOBILE CONTENT */}

        {/*DESKTOP CONTENT */}

        <section className="hidden md:flex justify-center items-center h-[670px] pt-2 px-6 text-center ">
          <ScrollArea className="w-full md:mb-14">
            {/* CONTENT */}
            <AllReview />

            {/* WRITE REVIEW CONTAINER (CLOSED) */}
            <div
              onClick={() => {
                setShowReviewBox(true);
              }}
              className="w-60 h-8 rounded-xl absolute bg-white/10 hover:bg-black/70 text-white/30 hover:text-white bottom-5 left-[50%] translate-x-[-50%] translate -y-[-50%] flex items-center justify-center cursor-pointer hover:scale-110 duration-300 ease-in"
            >
              Write Review
            </div>
          </ScrollArea>

          {/* WRITE REVIEW OPEN */}
          <section className="relative">
            {showReviewBox && (
              <div className="fixed top-1/2 left-1/2 transform w-[400px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-[2px] p-2 rounded-md shadow-lg">
                {/* OPEN CONTAINER CONTENT */}
                <section
                  id="open__main__container"
                  className="h-full w-full bg-[#011627] rounded-lg"
                >
                  {/* CONTAINER TOP MENU
                      <div id="topmenu">
                      <AboutItem />
                      </div> */}
                  {/* CONTAINER BOTTOM */}

                  {/* title,
                      body,
                      name,
                       date, */}

                  <form className="p-4 w-full text-left h-full" action="post">
                    {/* NAME */}
                    <h1 className="py-2 pl-1 link-color">_name:</h1>
                    <input
                      type="text"
                      name="name"
                      required
                      className="rounded-lg outline-[#607B96]border-none py-1 w-full bg-[#011221] text-[#465E77] pl-3"
                      
                    />

                    {/* DATE */}
                    <h1 className="py-2 pl-1 link-color">_date:</h1>
                    <input
                      type="date"
                      name="date"
                      className="rounded-lg outline-[#607B96] border-none py-1 w-full bg-[#011221] text-[#465E77] pl-3"
                      required
                    />

                    {/* TITLE */}
                   
                    <h1 className="py-2 pl-1 link-color">_review-title:</h1>
                    <input
                      type="text"
                      name="title"
                      placeholder="please keep this short"
                      required
                      className="rounded-lg outline-[#607B96] border-none py-1 w-full uppercase bg-[#011221] text-[#1F6048] font-medium pl-3 placeholder:text-[#465E77]/70 placeholder:text-[14px] placeholder:lowercase"
                    />
                

                    {/* MESSAGE */}

                    <h1 className="py-2 pl-1 link-color">_message:</h1>
                    <textarea
                      name="message"
                      className="rounded-lg outline-[#607B96] w-full max-h-[200px] border-none py-1 min-h-[100px] pl-3 bg-[#011221] text-[#1F6048]"
                    />

                    {/* SUBMIT BUTTON */}
                    <div className="pt-5">
                      <button
                        type="submit"
                        className="py-2 px-2 bg-[#1C2B3A] hover:bg-[#1F6048] hover:scale-105 duration-500 ease-in-out rounded-lg text-center w-full"
                      >
                        submit-message
                      </button>
                    </div>
                  </form>
                </section>
                {/* CLOSE BUTTON */}
                <button
                  className="absolute top-4 left-4 z-20 translate-x-[-50%] translate-y-[-50%] hover:scale-105 duration-500 ease-in-out"
                  onClick={() => {
                    setShowReviewBox(false);
                  }}
                >
                  <AiFillCloseCircle size={40} />
                </button>
              </div>
            )}
          </section>
        </section>
      </section>
    </section>
  );
};

export default AboutRightContainer;
