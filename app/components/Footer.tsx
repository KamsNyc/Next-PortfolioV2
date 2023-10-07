import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {AiOutlineLinkedin} from "react-icons/ai"
import {FiTwitter} from "react-icons/fi"
import {BsGithub} from "react-icons/bs"


const Footer = () => {
  return (
    <footer className="flex w-full border-color h-10 link-color">
      <section className="flex-[5%] border-r border-color flex items-center pl-2">
        <Link href={"/"}>find me in:</Link>

      </section>
      <ul className="flex-[75%] flex pr-[50%] ">
        <li className="border-color flex flex-1/2 items-center px-2 justify-center">
          <FiTwitter size={25} />
        </li>
        <li className="border-x border-color flex flex-1/2 cursor-pointer px-2 items-center justify-center  ">
          <AiOutlineLinkedin size={30} />
        </li>
      </ul>
      <li className="flex-[10%] border-l border-color flex items-center pl-5">
        <Link className="mr-3" href={"/"}>@kamsnyc </Link>
        <BsGithub size={24} />
      </li>
    </footer>
  );
};

export default Footer;
