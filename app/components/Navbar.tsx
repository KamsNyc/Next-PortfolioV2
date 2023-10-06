import Link from 'next/link';
import section from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <section className='flex w-full border-b border-color h-14 link-color'>
      <section className="flex-[20%] border-r border-color flex items-center"> <Link href={'/'} >micheal-weaver</Link> </section>
      <ul className="flex-[70%] flex pr-[40%] ">
        <li className="border-color flex flex-1 items-center justify-center text-white border-b-4 border-active "><Link href={'/'} >_hello</Link></li>
        <li className="border-x border-color flex flex-1 items-center justify-center  "><Link href={'/'} >_about-me</Link></li>
        <li className="border-r border-color flex flex-1 items-center justify-center  "><Link href={'/'} >_projects</Link></li>

      </ul>
      <li className="flex-[10%] border-l border-color flex items-center"><Link href={'/'} >_contact-me</Link></li>
    </section>
  );
}

export default Navbar;
