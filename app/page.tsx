import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Comingsoon from "./components/Comingsoon";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="relative w-full h-screen border border-color rounded-none md:rounded-xl bg-[#011627] px-4">
      {/* NAVBAR */}
      <div className="absolute top-0 left-0 w-full px- border-b border-color md:px-14 xl:px-32 2xl:px-60 z-40">
        <Navbar />
      </div>

      {/* CONTAINER */}
      <section className="md:flex justify-center h-[669px] items-center text-white md:px-14 xl:px-32 2xl:px-60 pt-32 md:pt-0 gap-4 md:gap-8 xl:gap-16 mt-[49px]">
        {/* LEFT SIDE */}
        <div className="w-full z-10">
          <p className="text-lg xl:text-xl z-30">What&apos;s up!, I&apos;m </p>

          {/* HEADING/AVATAR WRAPPER */}
          <div id="wrapper" className="flex items-center w-full justify-between sm:gap-4">
            <h1 className="text-7xl md:text-7xl tracking-wide lg:tracking-tighter py-2 lg:py-0 font-base ml-[-.5rem] z-30">Kamel Singh</h1>
            <Avatar className="w-32 h-32 lg:hidden">
              <AvatarImage className="" src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <h3 className="text-xl xl:text-2xl text-[#43D9AD] z-30">&gt; full-stack developer</h3>

          {/* DESKTOP SUBTITLE */}
          <div className="pt-10 hidden md:block text-[#607B96] tracking-wide z-30 ">
            <p className="">&gt; your future fullstack developer </p>
            <p className=" mb-4">&gt; designing and deploying websites </p>
            <div id="wrapper" className="flex">
              <p className="py-1 text-[#4D5BCE]">
                <span className="text-[#43D9AD]"><span className="text-[#607B96]"></span>const </span>contactButton <span className="text-[#607B96]">=</span>
              </p>
              <Button className=" z-30 cursor-pointer ml-4 text-[#fff]" variant="outline">
                Let&apos;s talk
              </Button>
            </div>
          </div>

          {/* MOBILE SUBTITLE */}
          <div className="absolute bottom-[25%] md:hidden text-[#607B96] tracking-wide z-30">
            <p className="py-1">&gt; your future fullstack developer </p>
            <p className="pb-4">&gt; designing and deploying websites </p>
            <div id="wrapper" className="flex">
              <p className="py-1 text-[#4D5BCE]">
                <span className="text-[#43D9AD]">const </span>contactButton <span className="text-white">=</span>
              </p>
              <Button className="z-30 cursor-pointer ml-2 text-[#fff]" variant="outline">
                Let&apos;s talk
              </Button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center justify-center w-full pt-8 md:pt-0 z-30">
          
          {/* CONTENT */}
          <Card />

        </div>
      </section>

      {/* NEXT PAGE TOOL TIP */}
      <div className="absolute bottom-20 md:bottom-1 left-1/2 translate-x-[-50%] z-30 text-white bg-[#607B96]/20 py-1 px-[.25rem] rounded-xl cursor-pointer hover:scale-105 duration-300 ease-in-out text-[14px] md:text-base">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger><Link href={'/about'}>About Me &gt;</Link></TooltipTrigger>
            <TooltipContent>
              <p>check out about me</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 w-full left-0 px-2 border-t border-color md:px-14 xl:px-32 2xl:px-60 z-20 ">
        <Footer />
      </div>

      {/* BACKGROUND BLUR IMAGES */}
      <Image src="/Green.png" fill alt="green blur" className="absolute top-0 left-0 opacity-40 z-[1]" />
      <Image src="/Blue.png" fill alt="blue blur" className="absolute top-0 right-0 opacity-60 z-[1]" />
    </main>
  );
}
