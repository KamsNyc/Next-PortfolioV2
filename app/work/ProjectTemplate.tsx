
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ScrollArea } from '@/components/ui/scroll-area'



const ProjectTemplate = () => {

  return (
    <Sheet>
      {/* PROJECT CONTAINER */}
      <SheetTrigger id="container" className='h-[320px] w-full rounded-xl'>
    
        <Image className='h-[50%] object-fill w-full border-none' alt='project picture' width={450} height={145}  src={'/projectpic.png'} />
        
        <div id="wrapper" className='p-3 bg-[#011221] h-[50%] border-t border-color border items-center justify-center '>
        <h1 className="">
        title
        </h1>
        <p className='mt-2 mb-3'>Duis aute irure dolor in velit esse cillum dolore.</p>

        <Button className='bg-[#1C2B3A]' variant="outline">view-project</Button>
        </div>

      
        </SheetTrigger>

      {/* SIDE OPEN PROJECT PAGE */}
      
  <SheetContent>
    <SheetHeader>
    <SheetTitle className='text-white'>Project Name</SheetTitle>
    {/* BORDER */}
      <div className="border-b border-color py-1"></div>

      <div className="text-white hover:scale-110 duration-500 cursor-pointer ease-in-out"><ProjectTemplate /></div>

      <div id='Badges' className="flex items-center justify-center gap-4 py-4 ">
      <Badge variant="outline">Badge</Badge>
      <Badge variant="outline">Badge</Badge>
      <Badge variant="outline">Badge</Badge>
      <Badge variant="outline">Badge</Badge>
      </div>
      
      <SheetDescription >
        <ScrollArea className=" overflow-auto max-h-[200px]">
        <h2 className='text-white text-[12px] underline pb-2'>About</h2>
         <p>this project is this project is this project is this project is this project is this project is this project is this project is this project isthis project isthis project isthis project isthis project isthis project isthis project is this project isthis project is this project is this project is this project is this project is this project is this project is this project is this project is this project isthis project isthis project isthis project isthis project isthis project isthis project is this project isthis project is</p>
         </ScrollArea>
      </SheetDescription>

    {/* VIEW WEBSITE */}
    <div className="flex w-full gap-8 pt-4">
    <Button className='w-full text-white' variant="outline">View Website</Button>
    <Button className='w-full text-white' variant="outline">Github</Button>
    </div>
    
    </SheetHeader>
  </SheetContent>

    
    </Sheet>
  )
}

export default ProjectTemplate
