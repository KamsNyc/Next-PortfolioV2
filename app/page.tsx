import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import Comingsoon from "./components/Comingsoon";


export default function Home() {
  return (
    <main className="h-full w-full border border-color rounded-xl bg-[#011627]">
      {/* CONTAINER */}
      <section className="flex justify-center items-center h-full text-white">

        {/* LEFT SIDE */}
        <div className="w-full h-full flex items-center justify-center">

          <div id="wrapper">
            <div className="flex items-center"> 
              
              <div className=""> 
                <p className="text-lg">What's up!, I'm</p>
                <h1 className="text-6xl pt-2 tracking-tight font-bold">Kamel Singh</h1>
                <h2 className="text-2xl text-[#c2bf18] tracking-wide"><span className="text-4xl pr-[4px]">></span>FULLSTACK DEVELOPER</h2>
              </div>
              <Avatar className="ml-6 w-20 h-20">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>

            <p className="pt-10 pb">//your future fullstack developer </p>
            <p>//designing and deploying websites </p>
            <p className="pb-5">//click on button to talk</p>
            <Button className="" variant="outline">Let's talk</Button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full h-full flex items-center justify-center">
          <section className="w-[450px] h-[450px] border border-color rounded-xl flex items-center justify-center bg-gray-500 hover:bg-gray-400 duration-100 ease-in">
              <Comingsoon />
          </section>
        </div>
      </section>
    </main>
  );
}
