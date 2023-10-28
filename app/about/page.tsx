import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Link from 'next/link'

const about = () => {
  return (
    <main className="relative w-full h-full border border-color rounded-xl bg-[#011627] ">
      {/* HEADER */}
<div className="absolute left-0 w-full px-4 border-b border-color md:px-14 xl:px-32 2xl:px-60 z-40 "><Navbar /></div>
    
    {/* CONTAINER */}
    <section className='w-full h-full '>
      <div className="pt-[49px] pb-[41px] w-full h-full flex">
        <div className="absolute w-full border-b border-color flex">
          
          
        </div>
        <Sidebar />

        {/* NEXT PAGE TOOL TIP */}
  <div className="absolute bottom-1 left-1/2 translate-x-[-50%] z-10 text-white bg-[#607B96]/20 py-1 px-[.25rem] rounded-xl cursor-pointer hover:scale-105 duration-300 ease-in-out text-[14px] md:text-base">
  <TooltipProvider>
  <Tooltip>
    <TooltipTrigger><Link href={'/work'}>Project &gt;</Link></TooltipTrigger>
    <TooltipContent>
      <p>check out my projects</p>
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

export default about
