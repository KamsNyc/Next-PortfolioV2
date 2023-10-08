import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutItem = () => {
  return (
    <>

    {/* MAIN ITEM NUMBER 1 */}
      <Accordion
        type="single"
        collapsible
        className="flex-col items-center gap-2"
      >
        <AccordionItem value="item-1" className="">
          <AccordionTrigger className="text-white text-base font-medium bg-gray-800 w-full">
            <Image
              src="/DownArrowFilled.png"
              width={12}
              height={12}
              alt="Down Arrow"
            />
           <h1>hobbies</h1> 
          </AccordionTrigger>
          <AccordionContent className="">
            <div className="py-1">
              <div className="flex items-center pl-6 py-2 text-sm bg-white/5 rounded-xl hover:bg-red-500">
                <Image
                  className="mb-1 mr-2"
                  src="/OrangeFolder.png"
                  width={15}
                  height={15}
                  alt="Picture of the author"
                />
                bio
              </div>
            </div>

            <div className="py-1">
              <div className="flex items-center pl-6 py-2 text-sm bg-white/5 rounded-xl hover:bg-red-500">
                <Image
                  className="mb-1 mr-2"
                  src="/OrangeFolder.png"
                  width={15}
                  height={15}
                  alt="Picture of the author"
                />
                bio
              </div>
            </div>

            
          </AccordionContent>
          
        </AccordionItem>
        
      </Accordion>


      {/* MAIN ITEM NUMBER 2 */}

      <Accordion
        type="single"
        collapsible
        className="flex-col items-center gap-2"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-white text-base font-medium bg-gray-800 w-full">
            <Image
              src="/DownArrowFilled.png"
              width={12}
              height={12}
              alt="Down Arrow"
            />
            <h1>contacts</h1>
          </AccordionTrigger>
          <AccordionContent className="">
            <div className="py-1">
              <div className="flex items-center pl-6 py-2 text-sm bg-white/5 rounded-xl hover:bg-red-500">
                <Image
                  className="mb-1 mr-2"
                  src="/OrangeFolder.png"
                  width={15}
                  height={15}
                  alt="Picture of the author"
                />
                bio
              </div>
            </div>

            <div className="py-1">
              <div className="flex items-center pl-6 py-2 text-sm bg-white/5 rounded-xl hover:bg-red-500">
                <Image
                  className="mb-1 mr-2"
                  src="/OrangeFolder.png"
                  width={15}
                  height={15}
                  alt="Picture of the author"
                />
                bio
              </div>
            </div>

            
          </AccordionContent>
          
        </AccordionItem>
        
      </Accordion>

      
    </>
  );
};

export default AboutItem;
