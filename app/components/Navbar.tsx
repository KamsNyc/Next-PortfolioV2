'use client'
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full border-color h-12 link-color rounded-sm sm:bg-transparent border-b mt-2">
      {/* Desktop Navbar */}
      <div className="lg:flex hidden justify-between items-center h-full">
        <div className="flex items-center px-8 border-r border-color ">
          <Link href={"/"}>kamel-singh</Link>
        </div>
        <ul className="flex ">
          <li className="border-color flex items-center justify-center px-8">
            <Link href={"/"}>_hello</Link>
          </li>
          <li className="px-8 border-x border-color flex items-center justify-center">
            <Link href={"/about"}>_about-me</Link>
          </li>
          <li className="px-8 border-r border-color flex items-center justify-center">
            <Link href={"/"}>_projects</Link>
          </li>
          <li className="border-l border-color flex items-center justify-center px-8">
            <Link href={"/"}>_contact-me</Link>
          </li>
        </ul>
      </div>
      {/* Mobile Navbar */}
      <div className="lg:hidden block relative h-full z-20">
        <div className="flex items-center justify-between h-full">
          <div className="pl-5">
            <Link href={"/"}>kamel-singh</Link>
          </div>
          <button
            onClick={toggleMenu}
            className="mr-5 focus:outline-none "
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6 fill-current"
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
          <ul className="pt-2 pl-5 absolute top-12 left-0 w-full bg-white z-20">
            <li className="mb-2">
              <Link href={"/"}>_hello</Link>
            </li>
            <li className="mb-2">
              <Link href={"/about"}>_about-me</Link>
            </li>
            <li className="mb-2">
              <Link href={"/"}>_projects</Link>
            </li>
            <li>
              <Link href={"/"}>_contact-me</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


