import { menu } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.png";
import insta from "../../../../public/instagram.png";
import twitter from "../../../../public/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-light-grey p-16">
      <div className="flex items-center justify-between mb-8 md:mb-16">
        <div className="w-16 h-16">
          <Image src={logo} alt="logo" width={40} height={40} priority />
        </div>
        <nav>
          <ul className="flex space-x-4 text-mm gap-2 md:gap-36">
            {menu.map(({ name, href }, index) => (
              <li className="relative" key={index}>
                <Link
                  href={href}
                  className="hover:after:block hover:after:absolute after:content-[''] after:w-full after:h-1 after:bg-black"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <hr className="border-black mb-10 md:mb-20" />
      <div className="flex items-center justify-between">
        <p className="text-sm md:text-mm">All rights reserved ®</p>
        <div className="flex items-center gap-3">
          <Link
            className="relative w-12 h-12"
            href="https://www.instagram.com/"
          >
            <Image src={insta} alt="logo" fill priority />
          </Link>{" "}
          <Link className="relative w-12 h-12" href="https://www.twitter.com/">
            <Image src={twitter} alt="logo" fill priority />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
