import React from "react";
import { AiOutlineClose } from "react-icons/ai";

// Define the prop type for selectedItem
type AboutRightContainerProps = {
  selectedItem: string;
};

const AboutRightContainer: React.FC<AboutRightContainerProps> = ({ selectedItem }) => {
  let content = "";

  if (selectedItem === "bio") {
    content = `
      lorem ipsum dolor sit amet, consectetur adip. lore lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum d lorem ipsum dolor sit amet lorem ipsum d lr     lorem ipsum d lorem ipsum d lorem ipslorem ipsum d lorem ipsum d lore lorem legend lorem ipsum d lorem ipsum d lorem ips
    `;
  } else if (selectedItem === "interests") {
    content = "This is my interests for now.";
  } else if (selectedItem === "learning") {
    content = "This is my learning content.";
  }

  return (
    <section className="md:flex w-full">
      {/* LEFT SPLIT */}
      <section className="md:flex-[50%] flex flex-col">
        {/* TOPSIDE DESKTOP */}
        <section className="link-color hidden md:flex items-center border-b border-r border-color">
          <div className="flex items-center gap-6 px-4 h-full py-[4.20px] border-r border-color ">
            personal-info
            <AiOutlineClose size={16} />
          </div>
        </section>

        {/* TOPSIDE MOBILE */}
        <section className="flex md:hidden">
          <h1>
            {/* personal-info */}
            <span className="text-[14px] link-color px-4">
              {`// personal-info / ${selectedItem}`}
            </span>
          </h1>
        </section>

        {/* CONTENT */}
        <section className="md:flex-[50%] mt-7 md:mt-4 px-4">
          <h1 className="text-[14px] md:text-[15px]">{content}</h1>
        </section>
      </section>

      {/* RIGHT SPLIT */}
      <section className="md:flex-[50%]">2</section>
    </section>
  );
};

export default AboutRightContainer;
