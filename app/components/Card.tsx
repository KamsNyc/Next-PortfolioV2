import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

interface CardProps {
  title: string;
  body: string;
  name: string;
  date: number;
}

const Card: React.FC<CardProps> = ({ title, body, name, date }) => {
  return (
    <section className="w-full rounded-xl px-0 xl:px-3">
      <section className="w-full rounded-xl px-0 xl:px-3" >
  {/* TOPSIDE */}
  <div className="flex justify-between px-2 pt-2 pb-4 gap-4">
    {/* LEFT SIDE */}
    <div className="flex gap-2 items-center">
      <Avatar className="">
        <AvatarImage className="" src="" />
        <AvatarFallback className="bg-[#4D5BCE] text-white border-2 border-color font-bold">
          name
        </AvatarFallback>
      </Avatar>

      <div id="wrapper" className="">
        <div className="">
        <h1 className="text-[14px] tracking-wide">{name}</h1>
        </div>
        <div className="">
        <p className="text-[12px]">{date}</p>
        </div>
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

        <span className="text-[14px] link-color hover-text-white">
          star
        </span>
      </div>
    </div>
  </div>

  {/* BOTTOMSIDE */}
  <ScrollArea className="bg-[#011221] flex justify-center px-5 md:px-10 tracking-tight py-6 text-[14px] border border-color rounded-xl mb-4 link-color">
    <div className="py-2 font-bold text-center uppercase">
      {title}
    </div>
    <div className="max-h-full md:max-h-[150px] text-[#41B673]">
      {body}
    </div>
  </ScrollArea>
</section>
    </section>
  );
};

export default Card;
