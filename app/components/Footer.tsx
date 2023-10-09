import Link from "next/link";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex w-full border-color h-10 link-color">
      <section className="flex-[10%] md:flex-[20%] border-r border-color flex items-center justify-center">
        <Link className="hidden lg:flex px-2 cursor-default " href={"/"}>find me at</Link>
        <Link className="flex lg:hidden px-2 cursor-default" href={"/"}>find</Link>
      </section>
      <ul className="flex-[80%] flex pr-[5%]">
        <li className="border-color flex flex-1/2 items-center px-2 justify-center cursor-pointer">
          <FiTwitter size={20} />
        </li>
        <li className="border-x border-color flex flex-1/2  px-2 items-center justify-center cursor-pointer">
          <AiOutlineLinkedin size={25} />
        </li>
      </ul>
      <li className="flex-[10%] md:flex-[20%] border-l border-color flex items-center px-2">
        <Link className="mr-3" href={"/"}>
          @kamsnyc
        </Link>
        <BsGithub size={20} />
      </li>
    </footer>
  );
};

export default Footer;
