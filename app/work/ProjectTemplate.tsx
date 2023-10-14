
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
      <SheetTitle>Test</SheetTitle>
      <SheetDescription>
        yest
      </SheetDescription>
    </SheetHeader>
  </SheetContent>

    
    </Sheet>
  )
}

export default ProjectTemplate
