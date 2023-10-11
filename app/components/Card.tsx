import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <section className=" w-full rounded-xl px-0 xl:px-6]">
      {/* TOPSIDE */}
      <div className="flex justify-between px-2 pt-2 pb-4">
        {/* LEFT SIDE */}
        <div className="flex gap-4  items-center ">
          <Avatar className="">
            <AvatarImage className="" src="" />
            <AvatarFallback className="bg-black">?</AvatarFallback>
          </Avatar>

          <div id="wrapper" className="text-left">
            <h1 className="text-[14px] tracking-wide">@NAME</h1>

            <p className="text-[12px]">Created 10/23/14</p>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-4">
          {/* CONTAINER */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/DetailsIcon.png"
              width={15}
              height={15}
              alt="Details Icon"
            />

            <span className="text-[14px] link-color hover:text-white">
              details
            </span>
          </div>

          {/* CONTAINER */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/StarIcon.png"
              width={16}
              height={16}
              alt="Details Icon"
            />

            <span className="text-[14px] link-color hover:text-white">
              star
            </span>
          </div>
        </div>
      </div>

      {/* BOTTOMSIDE */}

      <div className="bg-[#011221] flex justify-center px-20 tracking-tight py-4 text-[14px] max-h-[150px] overflow-y-auto border border-color rounded-xl mb-4">
        <h2>
          THIS IS A REVIEW, THIS IS A REVIEW, THIS IS A REVIEW, THIS IS A
          REVIEW, THIS IS A REVIEW, THIS IS A REVIEW, THIS IS A REVIEW, THIS IS
          A REVIEW, THIS IS A REVIEW, THIS IS A REVIEW, THIS IS A REVIEW, THIS
          IS A REVIEW, THIS IS A REVIEW, THIS IS A REVIEW, THIS IS A REVIEW,
          THIS IS A REVIEW, THIS IS A REVIEW, THIS IS A REVIEW, THIS IS A
          REVIEW, THIS IS A REVIEW, THIS IS A REVIEW, THIS IS A REVIEW, THIS IS
          A REVIEW, THIS IS A REVIEW, THIS IS A REVIEW, THIS IS A REVIEW, THIS
          IS A REVIEW, THIS IS A REVIEW, THIS IS A REVIEW, THIS IS A REVIEW,
          THIS IS A REVIEW, THIS IS A REVIEW, THIS IS A REVIEW, THIS IS A
          REVIEW, THIS IS A REVIEW, THIS IS A REVIEW,
        </h2>
      </div>

     
    </section>
  );
};

export default Card;
