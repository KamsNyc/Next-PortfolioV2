'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import AboutItem from './AboutItem';
import AboutRightContainer from './AboutRightContainer';

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
          <div className="flex items-center px-7 py-1">
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
          <div className="flex items-center px-7 py-1 text-[#607B96]">
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
            selectedItem === 'learning' ? 'bg-gray-800' : ''
          }`}
          onClick={() => handleItemClick('learning')}
        >
          <div className="flex items-center px-7 py-1 text-[#607B96]">
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
            learning
          </div>
        </div>

        <AboutItem /> {/* No need to pass the prop */}
      </section>

      {/* RIGHT SIDE */}
      <section className="flex-[80%] md:flex">
        <AboutRightContainer selectedItem={selectedItem} />
      </section>
    </aside>
  );
};

export default Sidebar;
