import { menu } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.png";
import linkedin from "../../../../public/linkedin.png";
import upwork from "../../../../public/upwork.png";
import PaddingContainer from "../padding-container/padding-container";
import { Container } from "../container/container";
import LinkedinIcon from "@/app/icons/linkedin-icon";
import UpworkIcon from "@/app/icons/upwork-icon";

const Footer = () => {
  return (
    <footer className="bg-darkBlue px-6 pt-10 pb-5">
      <Container>
        <div className="flex items-center flex-col sm:flex-row gap-20 justify-between mb-8">
          <div className="w-120 h-16">
            <Link href="/">
              <Image src={logo} alt="logo" width={120} height={40} priority />
            </Link>
          </div>
          <nav>
            <ul className="flex flex-col sm:flex-row space-x-4 text-mm text-center items-center gap-10 lg:gap-36">
              {menu.map(({ name, href }, index) => (
                <li className="relative" key={index}>
                  <Link
                    href={href}
                    className="text-white font-bold relative overflow-hidden transition-all duration-200 group hover:text-blue"
                  >
                    {name}
                    <span className="absolute top-8 left-0 w-0 h-1 bg-blue transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-5">
            <Link href="https://www.linkedin.com/">
              <LinkedinIcon />
            </Link>
            <Link href="https://www.upwork.com/">
              <UpworkIcon />
            </Link>
          </div>
        </div>
        <hr className="border-slate-500 border-1 mb-5" />
        <p className="text-sm lg:text-mm text-center text-gray-400">
          {new Date().getFullYear()} Vertex Solutions. All rights reserved. ®
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
