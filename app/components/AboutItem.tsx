'use client'

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
    <section className="pt-4 gap-4">

      {/* MAIN ITEM NUMBER 1 */}
      <Accordion
        type="single"
        collapsible
        className="flex-col items-center gap-2"
      >
        <AccordionItem value="item-1" className="">
          <AccordionTrigger className="text-white text-base font-medium bg-gray-800 md:bg-transparent w-full border-b border-t border-color px-7">
            <Image
              src="/DownArrowFilled.png"
              width={12}
              height={12}
              alt="Down Arrow"
            />
            <h1>hobbies</h1>
          </AccordionTrigger>
          <AccordionContent className="">
            <div className="py-1 cursor-pointer">
              <div className="flex items-center pl-6 py-2 text-sm bg-white/5 rounded-xl hover:bg-red-500">
                <Image
                  className="mb-1 mr-2"
                  src="/OrangeFolder.png"
                  width={15}
                  height={15}
                  alt="Picture of the author"
                />
                hobby1
              </div>
            </div>

            <div className="py-1 cursor-pointer">
              <div className="flex items-center pl-6 py-2 text-sm bg-white/5 rounded-xl hover:bg-red-500">
                <Image
                  className="mb-1 mr-2"
                  src="/OrangeFolder.png"
                  width={15}
                  height={15}
                  alt="Picture of the author"
                />
                hobby2
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* MAIN ITEM NUMBER 2 */}
      <Accordion
        type="single"
        collapsible
        className="flex-col items-center gap-2 mb-4"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-white text-base font-medium bg-gray-800 md:bg-transparent w-full border-b border-color px-7">
            <Image
              src="/DownArrowFilled.png"
              width={12}
              height={12}
              alt="Down Arrow"
            />
            <h1>contacts</h1>
          </AccordionTrigger>
          <AccordionContent className="">
            <div className="py-1 cursor-pointer">
              <div className="flex items-center pl-6 py-2 text-sm bg-white/5 rounded-xl hover:bg-red-500">
                <Image
                  className="mb-1 mr-2"
                  src="/OrangeFolder.png"
                  width={15}
                  height={15}
                  alt="Picture of the author"
                />
                contact1
              </div>
            </div>

            <div className="py-1 cursor-pointer">
              <div className="flex items-center pl-6 py-2 text-sm bg-white/5 rounded-xl hover:bg-red-500">
                <Image
                  className="mb-1 mr-2"
                  src="/OrangeFolder.png"
                  width={15}
                  height={15}
                  alt="Picture of the author"
                />
                contact2
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default AboutItem;
