import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ScrollArea } from "@/components/ui/scroll-area";
import Comingsoon from "./Comingsoon";

// Define the prop type for selectedItem
type AboutRightContainerProps = {
  selectedItem: string;
};

const AboutRightContainer: React.FC<AboutRightContainerProps> = ({
  selectedItem,
}) => {
  let content = "";

  if (selectedItem === "bio") {
    content = `
    Lori lived her life through the lens of a camera. She never realized this until this very moment as she scrolled through thousands of images on your computer. She could remember the exact moment each photo was taken. She could remember where she had been, what she was thinking as she tried to get the shot, the smells of the surrounding area, and even the emotions that she felt taking the photo, yet she had trouble remembering what she had for breakfast.
The trees, therefore, must be such old and primitive techniques that they thought nothing of them, deeming them so inconsequential that even savages like us would know of them and not be suspicious. At that, they probably didn't have too much time after they detected us orbiting and intending to land. And if that were true, there could be only one place where their civilization was hidden.
The wave crashed and hit the sandcastle head-on. The sandcastle began to melt under the waves force and as the wave receded, half the sandcastle was gone. The next wave hit, not quite as strong, but still managed to cover the remains of the sandcastle and take more of it away. The third wave, a big one, crashed over the sandcastle completely covering and engulfing it. When it receded, there was no trace the sandcastle ever existed and hours of hard work disappeared forever.
I recently discovered I could make fudge with just chocolate chips, sweetened condensed milk, vanilla extract, and a thick pot on slow heat. I tried it with dark chocolate chunks and I tried it with semi-sweet chocolate chips. It's better with both kinds. It comes out pretty bad with just the dark chocolate. The best add-ins are crushed almonds and marshmallows -- what you get from that is Rocky Road. It takes about twenty minutes from start to fridge, and then it takes about six months to work off the twenty pounds you gain from eating it. All things in moderation, friends. All things in moderation.

  
    `;
  } else if (selectedItem === "interests") {
    content = "This is my interests for now.";
  } else if (selectedItem === "skills") {
    content = "This is my skills content.";
  }

  return (
    <section className="md:flex w-full">
      {/* LEFT SPLIT */}

      <section className="md:flex-[50%] flex flex-col relative">
        {/* TOPSIDE DESKTOP */}
        <section className="link-color hidden md:flex items-center border-b border-r border-color">
          <div className="flex items-center gap-6 px-4 h-full py-[4.20px] border-r border-color cursor-pointer">
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
          className="md:flex-[50%] px-7 py-4 max-h-[210px] md:max-h-[670px] md:overflow-y-hidden link-color"
          style={{
            overflowY: "auto",
          }}
        >
          <h1 className="text-[14px] md:text-[15px]">{content}</h1>
        </ScrollArea>
      </section>

      {/* RIGHT SPLIT */}
      <section className="md:flex-[50%] border-l border-color mt-4 md:mt-0 w-full ">
       
        {/* TOPSIDE DESKTOP */}
        <section className="link-color flex items-center md:border-b border-color ">
          <div className="flex items-center gap-6 px-7 h-full py-[5.4px] ">
            <h1 className="text-white text-[14px] md:text-[#011627]">
              &gt; code snippets showcase:
            </h1>
          </div>
        </section>
          
          {/*MOBILE CONTENT */}
        
          <ScrollArea className="block md:hidden justify-center items-center h-[225px] md:h-[670px] pt-2 px-6 link-color">
          <h1 className="text-4xl">COMING SOON</h1>
          <p className="text-[14px]">test</p>
          <p className="text-[14px]">test</p>
          <p className="text-[14px]">test</p>
          <p className="text-[14px]">test</p>
          <p className="text-[14px]">test</p>
          <p className="text-[14px]">test</p>
          <p className="text-[14px]">test</p>
          <p className="text-[14px]">test</p>
          <p className="text-[14px]">test</p>
          <p className="text-[14px]">test</p>
          <p className="text-[14px]">test</p>
          <p className="text-[14px]">test</p>
          <p className="text-[14px]">test</p>

        </ScrollArea>

         {/*DESKTOP CONTENT */}
        
         <section className="hidden md:flex justify-center items-center h-[225px] md:h-[670px] pt-2 px-6 text-center">
          <div className="flex-col ">
          <Comingsoon />
          </div>

        </section>
       
          
      </section>
      
    </section>
  );
};

export default AboutRightContainer;
