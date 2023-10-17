import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'
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

interface ProjectTemplateProps {
  mainCoverLink: string;
  coverVideoLink: string;
  subTitle: string;
  title: string;
  about: string;
  webLink: string;
  gitLink: string;
  badges: string[];
}

function ProjectTemplate({mainCoverLink, coverVideoLink, subTitle, title, about, webLink, gitLink, badges }: ProjectTemplateProps) {

  return (
    <Sheet>
      {/* PROJECT CONTAINER */}
      <SheetTrigger id="container" className='h-[350px] w-full rounded-xl'>
        <Image className='h-[50%] obl w-full border-none rounded-t-xl' src={mainCoverLink} alt={`${subTitle}`} width={450} height={145} />
        <div id="wrapper" className='p-3 bg-[#011221] h-[50%] border-t border-color border rounded-b-xl text-left'>
          <h1 className="text-[#41B673] uppercase text-[16px]">
            {title}
          </h1>
          <p className='mt-2 mb-3 text-[14px]'>{subTitle}</p>
          <Button className='bg-[#1C2B3A]' variant="outline">View More</Button>
        </div>
      </SheetTrigger>

      {/* SIDE OPEN PROJECT PAGE */}
      <SheetContent className='w-[90%] md:w-full px-4'>
        <ScrollArea className='h-full w-full'>
          <SheetHeader>
            <SheetTitle className='text-white text-right text-xs hover:text-[#41B673] hover:scale-105 duration-300 ease-in pr-4 font-normal'><Link href={'/work'}>back to all projects</Link></SheetTitle>
            {/* BORDER */}
            <div className="border-b border-color py-2 px-2"></div>

            {/* SUBTITLE (SHORT DESCRIPTION) */}
            <h1 className='font-bold text-[24px] text-[#41B673]'>{title}</h1>
            <p className='link-color text-[14px] leading-5'>{subTitle}</p>

            {/* COVER IMAGE */}
            <Image src={coverVideoLink} alt={`${subTitle}`} width={450} height={100} className='max-h-[250px] w-full rounded-2xl px-2' />

            <SheetDescription className="h-full text-left px-2">
              <div className="overflow-y-auto h-full">
                 {/* WEBSITE */}
                 <p className='text-base text-center cursor-pointer duration-300 ease-in-out hover:text-[#41B673]'>{webLink}</p>
                {/* ABOUT */}
                <h2 className='text-white text-base py-2 font-light'>About</h2>
                <p className='text-[14px] hover:text-white'>{about}</p>

                {/* BORDER */}
                <div className="border-b border-color py-2"></div>

                {/* TECHNOLOGY */}
                <h2 className='text-white text-base py-2 font-light'>Technologies</h2>
                <div id='Badges' className="flex items-center gap-4 py-2">
                  {
                    badges.map( (badge, index) => {
                      return (
                        <Button key={index} variant="outline">{badge}</Button>
                      )
                    
                    } )
                  }
                 
                </div>

                  {/* BORDER */}
            <div className="border-b border-color py-2"></div>

               
              </div>

            </SheetDescription>

            {/* VIEW WEBSITE */}
            <div className="flex w-full gap-8 pt-4 px-4">
              <Button className='w-full text-white' variant="outline"><Link href={`${webLink}`}>View Website</Link></Button>
              <Button className='w-full text-white' variant="outline"><Link href={`${gitLink}`}>Github</Link></Button>
            </div>
          </SheetHeader>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

export default ProjectTemplate;
