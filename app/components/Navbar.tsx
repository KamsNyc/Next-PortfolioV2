'use client'
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`w-full h-12 link-color rounded-sm ${isMenuOpen ? '' : ''}`}>
      {/* Desktop Navbar */}
      <div className="lg:flex hidden justify-between items-center h-full z-10">
        <div>
          <Link className={`flex items-center px-8 cursor-pointer`} href={"/"}>kamel-singh</Link>
        </div>
        <ul className="flex ">
        <Link href={"/"}><li className={`flex items-center justify-center px-8 cursor-pointer hover:text-white`}>
            _hello
          </li></Link>
          <Link href={"/about"}><li className={`px-8 flex items-center justify-center cursor-pointer hover:text-white`}>
            _about-me
          </li></Link>
          <Link href={"/work"}><li className={`px-8 flex items-center justify-center cursor-pointer hover:text-white`}>
            _projects
          </li></Link>
          <Link href={"/contact"}><li className={`flex items-center justify-center px-8 cursor-pointer hover:text-white`}>
            _contact-me
          </li></Link>
        </ul>
      </div>
      {/* Mobile Navbar */}
      <div className="lg:hidden block relative h-full z-40">
        <div className="flex items-center justify-between h-full">
          <div className="pl-5 cursor-pointer">
            <Link href={"/"}>kamel-singh</Link>
          </div>
          <button
            onClick={toggleMenu}
            className="mr-5 focus:outline-none cursor-pointer hover:scale-105 duration-500 ease-in-out"
            aria-label="Toggle Menu"
          >
            <svg
              className={`h-6 w-6 fill-current ${isMenuOpen ? 'text-color-color' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M2 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 9a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM3 14a1 1 0 100 2h14a1 1 0 100-2H3z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <ul className="py-2 absolute h-[745px] top-12 left-0 w-full bg-[#011627] z-40 backdrop-blur-md">
            <li className={`py-2 pl-5 my-1 ${isMenuOpen ? 'border border-color hover:bg-gray-800 hover:text-white' : ''}`}>
              <Link href={"/"}>_hello</Link>
            </li>
            <li className={`py-2 pl-5 my-1 ${isMenuOpen ? 'border border-color hover:bg-gray-800 hover:text-white' : ''}`}>
              <Link href={"/about"}>_about-me</Link>
            </li>
            <li className={`py-2 pl-5 my-1 ${isMenuOpen ? 'border border-color hover:bg-gray-800 hover:text-white' : ''}`}>
              <Link href={"/work"}>_projects</Link>
            </li>
            <li className={`py-2 pl-5 my-1 ${isMenuOpen ? 'border border-color hover:bg-gray-800 hover:text-white' : ''}`}>
              <Link href={"/contact"}>_contact-me</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
