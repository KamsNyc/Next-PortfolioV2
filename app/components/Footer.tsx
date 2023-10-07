import Link from "next/link";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex w-full border-color h-10 link-color">
      <section className="flex-[10%] border-r border-color flex items-center px-2">
        <Link className="hidden xl:flex" href={"/"}>find me at</Link>
        <Link className="flex xl:hidden" href={"/"}>find</Link>
      </section>
      <ul className="flex-[80%] flex pr-[5%]">
        <li className="border-color flex flex-1/2 items-center px-2 justify-center">
          <FiTwitter size={20} />
        </li>
        <li className="border-x border-color flex flex-1/2 cursor-pointer px-2 items-center justify-center">
          <AiOutlineLinkedin size={25} />
        </li>
      </ul>
      <li className="flex-[10%] border-l border-color flex items-center pl-5">
        <Link className="mr-3" href={"/"}>
          @kamsnyc
        </Link>
        <BsGithub size={20} />
      </li>
    </footer>
  );
};

export default Footer;
