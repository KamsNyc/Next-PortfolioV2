import Image from 'next/image'
import React from 'react'
import AboutItem from './AboutItem'

const Sidebar = () => {
  return (
    <aside className='md:flex w-full text-white z-10'>
        
        {/* LEFT SIDE */}
      <section className="flex-[20%] ">

        {/* SMALL MENU ITEM */}
        <section className='flex items-center gap-2 py-1 pl-4 bg-gray-800'>
        <Image
      src="/DownArrowFilled.png"
      width={12}
      height={12}
      alt="Picture of the author"
    />
            personal-info
        </section>

        {/* ITEMS 1 */}
        <div className="">

            <div className="flex items-center pl-4 py-1">
            <Image className='mb-1 mr-3'
      src="/ArrowRightOl.png"
      width={10}
      height={10}
      alt="Picture of the author"
    />
                <Image className='mb-1 mr-2'
      src="/OrangeFolder.png"
      width={15}
      height={15}
      alt="Picture of the author"
    />
    bio
            </div>
        </div>

         {/* ITEMS 2 */}
         <div className="mt-1">

<div className="flex items-center pl-4 py-1 text-[#607B96]">
<Image className='mb-1 mr-3'
src="/ArrowRightOl.png"
width={10}
height={10}
alt="Picture of the author"
/>
    <Image className='mb-1 mr-2'
src="/GreenFolder.png"
width={15}
height={15}
alt="Picture of the author"
/>
interests
</div>
</div>


<AboutItem />

      </section>


        {/* RIGHT SIDE */}
      <section className="flex-[80%] md:flex">
        {/* LEFT SPLIT */}
        <div className="flex-[50%] ">left split</div>

         {/* RIGHT SPLIT */}
         <div className="flex-[50%] ">right split</div>
      </section>

    </aside>
  )
}

export default Sidebar
