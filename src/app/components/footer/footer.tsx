import { menu } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.png";
import linkedin from "../../../../public/linkedin.png";
import upwork from "../../../../public/upwork.png";

const Footer = () => {
  return (
    <footer className="bg-light-grey p-16">
      <div className="flex items-center justify-between mb-8 lg:mb-16">
        <div className="w-16 h-16">
          <Image src={logo} alt="logo" width={40} height={40} priority />
        </div>
        <nav>
          <ul className="flex space-x-4 text-mm gap-2 lg:gap-36">
            {menu.map(({ name, href }, index) => (
              <li className="relative" key={index}>
                <Link
                  href={href}
                  className="text-slate-800 font-bold relative overflow-hidden transition-all duration-200 group hover:text-blue"
                >
                  {name}
                  <span className="absolute top-8 left-0 w-0 h-1 bg-blue transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <hr className="border-black mb-10 lg:mb-20" />
      <div className="flex items-center justify-between">
        <p className="text-sm lg:text-mm">All rights reserved ®</p>
        <div className="flex items-center gap-3">
          <Link className="relative w-12 h-12" href="https://www.linkedin.com/">
            <Image src={linkedin} alt="logo" fill priority />
          </Link>{" "}
          <Link className="relative w-12 h-12" href="https://www.upwork.com/">
            <Image src={upwork} alt="logo" fill priority />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
