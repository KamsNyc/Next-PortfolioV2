import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import Comingsoon from "./components/Comingsoon";
import BlueBlur from '/Blue.png'


export default function Home() {
  return (
    <main className="relative h-full w-full border border-color rounded-xl bg-[#011627]">
    {/* BACKGROUND BLUR IMAGES */}
    <Image src="/Green.png" fill={true} alt="green blur" className="absolute md:hidden top-0 left-0 opacity-100" />
    <Image src="/Blue.png" fill={true} alt="blue blur" className="absolute md:hidden top-0 right-0 opacity-80" />

    {/* CONTAINER */}
    <section className="md:flex justify-center items-center h-full text-white px-7 md:px-14 pt-20">
      {/* LEFT SIDE */}
      <div className="w-full">
        <p className="text-lg xl:text-xl">What's up!, I'm </p>

        {/* HEADING/AVATAR WRAPPER */}
        <div id="wrapper" className="flex items-center w-full justify-between sm:gap-4">
          <h1 className="text-7xl md:text-7xl xl:text-8xl tracking-wide lg:tracking-tighter py-2 lg:py-0 font-base spac">Kamel Singh</h1>
          <Avatar className="w-32 h-32 lg:hidden">
            <AvatarImage className="" src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <h3 className="text-xl xl:text-2xl text-[#43D9AD]"><span className=" text-3xl pr-4">></span>Full-stack developer</h3>

        {/* DESKTOP SUBTITLE */}
        <div className="pt-20 hidden md:block ">
          <p className="py-1">//your future fullstack developer </p>
          <p className="py-1">//designing and deploying websites </p>
          <p className="py-1 mb-4">//click on button to talk</p>
          <Button className=" text-[#43D9AD]" variant="outline">Let's talk</Button>
        </div>

        {/* MOBILE SUBTITLE */}
        <div className="absolute bottom-16 md:hidden text-[#607B96] tracking-wide">
          <p className="py-1">//your future fullstack developer </p>
          <p className="pb-4">//designing and deploying websites </p>
          <p className="pb-4">//click on button to talk</p>
          <Button className="text-[#43D9AD]" variant="outline">Let's talk</Button>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="w-full">
        1
      </div>
    </section>
  </main>
    // <main className="h-full w-full border border-color rounded-xl bg-[#011627]">
    //   {/* CONTAINER */}
    //   <section className="flex justify-center items-center h-full text-white">

    //     {/* LEFT SIDE */}
    //     <div className="w-full h-full flex items-center justify-center">

    //       <div id="wrapper">
    //         <div className="flex items-center"> 
              
    //           <div className=""> 
    //             <p className="text-lg">What's up!, I'm</p>
    //             <h1 className=" text-2xl md:text-4xl lg:text-6xl pt-2 tracking-tight font-bold">Kamel Singh</h1>
    //             <h2 className="text-2xl text-[#c2bf18] tracking-wide"><span className="text-4xl pr-[4px]">></span>FULLSTACK DEVELOPER</h2>
    //           </div>
    //           <Avatar className="ml-6 w-20 h-20">
    //             <AvatarImage src="https://github.com/shadcn.png" />
    //             <AvatarFallback>CN</AvatarFallback>
    //           </Avatar>
    //         </div>

    //         <p className="pt-10 pb">//your future fullstack developer </p>
    //         <p>//designing and deploying websites </p>
    //         <p className="pb-5">//click on button to talk</p>
    //         <Button className="" variant="outline">Let's talk</Button>
    //       </div>
    //     </div>

    //     {/* RIGHT SIDE */}
    //     <div className="w-full h-full flex items-center justify-center">
    //       <section className="w-[450px] h-[450px] border border-color rounded-xl flex items-center justify-center bg-gray-500 hover:bg-gray-400 duration-100 ease-in">
    //           <Comingsoon />
    //       </section>
    //     </div>
    //   </section>
    // </main>
  );
}
