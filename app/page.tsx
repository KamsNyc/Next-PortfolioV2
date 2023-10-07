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
    <main className="relative w-full h-screen border border-color rounded-xl bg-[#011627] px-4">
      <Navbar />
      
  {/* BACKGROUND BLUR IMAGES */}
  <Image src="/Green.png" fill alt="green blur" className="absolute top-0 left-0 opacity-40 " />
  <Image src="/Blue.png" fill alt="blue blur" className="absolute top-0 right-0 opacity-60  " />

  {/* CONTAINER */}
  <section className="md:flex justify-center items-center text-white md:px-14 xl:px-32 pt-20 gap-4 md:gap-8 xl:gap-16">
    {/* LEFT SIDE */}
    <div className="w-full z-10">
      <p className="text-lg xl:text-xl">What&apos;s up!, I&apos;m </p>

      {/* HEADING/AVATAR WRAPPER */}
      <div id="wrapper" className="flex items-center w-full justify-between sm:gap-4">
        <h1 className="text-7xl md:text-7xl tracking-wide lg:tracking-tighter py-2 lg:py-0 font-base ml-[-.5rem]">Kamel Singh</h1>
        <Avatar className="w-32 h-32 lg:hidden">
          <AvatarImage className="" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <h3 className="text-xl xl:text-2xl text-[#43D9AD]">&gt; full-stack developer</h3>

      {/* DESKTOP SUBTITLE */}
      <div className="pt-10 hidden md:block text-[#607B96] tracking-wide ">
        <p className="">&gt; your future fullstack developer </p>
        <p className=" mb-4">&gt; designing and deploying websites </p>
        <div id="wrapper" className="flex">
          <p className="py-1 text-[#4D5BCE]">
            <span className="text-[#43D9AD]"><span className='text-[#607B96]'></span>const </span>contactButton <span className="text-[#607B96]">=</span>
          </p>
          <Button className="cursor-pointer ml-4 text-[#fff]" variant="outline">
            Let&apos;s talk
          </Button>
        </div>
      </div>

      {/* MOBILE SUBTITLE */}
      <div className="absolute bottom-[25%] md:hidden text-[#607B96] tracking-wide">
        <p className="py-1">&gt; your future fullstack developer </p>
        <p className="pb-4">&gt; designing and deploying websites </p>
        <div id="wrapper" className="flex">
          <p className="py-1 text-[#4D5BCE]">
            <span className="text-[#43D9AD]">const </span>contactButton <span className="text-white">=</span>
          </p>
          <Button className="cursor-pointer ml-2 text-[#fff]" variant="outline">
            Let&apos;s talk
          </Button>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="hidden md:flex items-center justify-center w-full pt-8 md:pt-0">
      <Comingsoon />
    </div>
  </section>

   {/* FOOTER */}
   <div className="absolute bottom-2 w-full left-0 px-2"><Footer /></div>
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
