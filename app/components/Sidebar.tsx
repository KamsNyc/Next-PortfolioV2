'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import AboutItem from './AboutItem';
import AboutRightContainer from './AboutRightContainer';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState('bio'); // Initialize with 'bio'

  // Function to handle item selection
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <aside className="md:flex w-full text-white z-10">
      {/* LEFT SIDE */}
      <section className="flex-[20%] border-r border-color">
        {/* SMALL MENU ITEM */}
        <section
          className={`flex items-center gap-2 py-1 px-7 bg-gray-800 md:bg-transparent border-b border-color ${
            selectedItem === 'bio' ? 'bg-gray-800' : ''
          }`}
          onClick={() => handleItemClick('bio')}
        >
          <Image
            src="/DownArrowFilled.png"
            width={12}
            height={12}
            alt="Picture of the author"
          />
          personal-info
        </section>

        {/* ITEMS 1 */}
<div
  className={`${
    selectedItem === 'bio' ? 'bg-gray-800' : ''
  }`}
  onClick={() => handleItemClick('bio')}
>
  <div className={`flex items-center px-7 py-1 mt-1 cursor-pointer ${selectedItem === 'bio' ? 'text-white' : ''}`}>
    <Image
      className="mb-1 mr-3"
      src="/ArrowRightOl.png"
      width={10}
      height={10}
      alt="Picture of the author"
    />
    <Image
      className="mb-1 mr-2"
      src="/OrangeFolder.png"
      width={15}
      height={15}
      alt="Picture of the author"
    />
    bio
  </div>
</div>

{/* ITEMS 2 */}
<div
  className={`${
    selectedItem === 'interests' ? 'bg-gray-800' : ''
  }`}
  onClick={() => handleItemClick('interests')}
>
  <div className={`flex items-center px-7 py-1 text-[#607B96] cursor-pointer ${selectedItem === 'interests' ? 'text-white' : ''}`}>
    <Image
      className="mb-1 mr-3"
      src="/ArrowRightOl.png"
      width={10}
      height={10}
      alt="Picture of the author"
    />
    <Image
      className="mb-1 mr-2"
      src="/GreenFolder.png"
      width={15}
      height={15}
      alt="Picture of the author"
    />
    interests
  </div>
</div>

{/* ITEMS 3 */}
<div
  className={`${
    selectedItem === 'skills' ? 'bg-gray-800' : ''
  }`}
  onClick={() => handleItemClick('skills')}
>
  <div className={`flex items-center px-7 py-1 text-[#607B96] cursor-pointer ${selectedItem === 'skills' ? 'text-white' : ''}`}>
    <Image
      className="mb-1 mr-3"
      src="/ArrowRightOl.png"
      width={10}
      height={10}
      alt="Picture of the author"
    />
    <Image
      className="mb-1 mr-2"
      src="/PurpleFolder.png"
      width={15}
      height={15}
      alt="Picture of the author"
    />
    skills
  </div>
</div>

{/* ITEMS 4 */}
<div
  className={`${
    selectedItem === 'reviews' ? 'bg-gray-800' : ''
  }`}
  onClick={() => handleItemClick('reviews')}
>
  <div className={`flex md:hidden items-center px-7 py-1 text-[#607B96] cursor-pointer ${selectedItem === 'skills' ? 'text-white' : ''}`}>
    <Image
      className="mb-1 mr-3"
      src="/ArrowRightOl.png"
      width={10}
      height={10}
      alt="Picture of the author"
    />
    <Image
      className="mb-1 mr-2"
      src="/PurpleFolder.png"
      width={15}
      height={15}
      alt="Picture of the author"
    />
    reviews
  </div>
</div>

        {/* HOBBY AND CONTACT FOLDERS */}

        <AboutItem />

   
      </section>

      {/* RIGHT SIDE */}
      <section className="flex-[80%] md:flex">
        <AboutRightContainer selectedItem={selectedItem} />
      </section>
    </aside>
  );
};

export default Sidebar;
