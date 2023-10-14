
import { AiOutlineClose } from "react-icons/ai";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import Card from "./Card";
import AllReview from "./AllReview";

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
        is. kamel singh this is my bio. kamel singh this is my bio. kamel singh this
        is my bio. kamel singh this is my bio. kamel singh this is my bio. kamel
        singh this is my bio. kamel singh this is. kamel singh this is my bio.
        kamel singh this is. kamel sing kamel singh this is my bio. kamel singh
        this is my bio. kamel singh this is my bio. kamel singh this is my bio.
        kamel singh this is my bio. kamel singh this is my bio. kamel singh this
        is. kamel singh this is my bio. kamel singh this is my bio. kamel singh this
        is my bio. kamel singh this is my bio. kamel singh this is my bio. kamel
        singh this is my bio. kamel singh this is. kamel singh this is my bio.
        kamel singh this is. kamel sing kamel singh this is my bio. kamel singh
        this is my bio. kamel singh this is my bio. kamel singh this is my bio.
        kamel singh this is my bio. kamel singh this is my bio. kamel singh this
        is. kamel singh this is my bio. kamel singh this is my bio. kamel singh this
        is my bio. kamel singh this is my bio. kamel singh this is my bio. kamel
        singh this is my bio. kamel singh this is. kamel singh this is my bio.
        kamel singh this is. kamel sing kamel singh this is my bio. kamel singh
        this is my bio. kamel singh this is my bio. kamel singh this is my bio.
        kamel singh this is my bio. kamel singh this is my bio. kamel singh this
        is.
      </div>
    );
  } else if (selectedItem === "interests") {
    content = "This is my interests for now.";
  } else if (selectedItem === "skills") {
    content = "This is my skills content.";
  } else if (selectedItem === "reviews") {
    content = <AllReview />
  }


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

        {/* DYNAMIC HOBBY/CONTENT CLICKS */}
        <div className="w-full h-20 bg-red-500"></div>
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

         
          </ScrollArea>

        </section>
      </section>
    </section>
  );
};

export default AboutRightContainer;
