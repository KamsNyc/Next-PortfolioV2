import React from 'react'
import Navbar from '../components/Navbar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Link from 'next/link'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import AboutItem from '../components/AboutItem'
import Image from 'next/image'
import ContactRightContainer from '../components/ContactRightContainer'

const page = () => {
  return (
    <main className="relative w-full h-screen border border-color rounded-xl bg-[#011627] ">
    {/* HEADER */}
<div className="absolute left-0 w-full px-4 border-b border-color md:px-14 xl:px-32 2xl:px-60 z-40 "><Navbar /></div>
  
  {/* CONTAINER */}
  <section className='w-full h-full '>
    <div className="pt-[49px] pb-[41px] w-full h-full flex">
      
    <aside className="md:flex w-full text-white z-10">
      {/* LEFT SIDE */}
      <section className="flex-[20%] border-r border-color">
        {/* SMALL MENU ITEM */}
        <section
          className={`flex items-center gap-2 py-1 px-7 bg-gray-800 md:bg-transparent border-b border-color link-color'
          }`}
        >
          <Image
            src="/DownArrowFilled.png"
            width={12}
            height={12}
            alt="Picture of the author"
          />
          contact
        </section>
        
          {/* CONTENT */}
          <section className=''>
            <p className='py-1 border-b border-color px-7 hover:bg-gray-800 cursor-pointer'>1</p>
            <p className='py-1 border-b border-color px-7 hover:bg-gray-800 cursor-pointer'>1</p>
            <p className='py-1 border-b border-color px-7 hover:bg-gray-800 cursor-pointer'>1</p>
          </section>

   
      </section>

      {/* RIGHT SIDE */}
      <section className="flex-[80%] md:flex">
        <ContactRightContainer />
      </section>
    </aside>

      {/* NEXT PAGE TOOL TIP */}
<div className="absolute bottom-1 left-1/2 translate-x-[-50%] z-10 text-white bg-[#607B96]/20 py-1 px-[.25rem] rounded-xl cursor-pointer hover:scale-105 duration-300 ease-in-out text-[14px] md:text-base">
<TooltipProvider>
<Tooltip>
  <TooltipTrigger><Link href={'/contact'}>Contact &gt;</Link></TooltipTrigger>
  <TooltipContent>
    <p>contact me</p>
  </TooltipContent>
</Tooltip>
</TooltipProvider>
</div>

    </div>
    
  </section>

{/* FOOTER */}
<div className="absolute bottom-0 w-full left-0 px-2 border-t border-color md:px-14 xl:px-32 2xl:px-60 "><Footer /></div>
</main>
  )
}

export default page
