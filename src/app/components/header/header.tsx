import Link from "next/link";
import Image from "next/image";
import { menu } from "@/app/utils";
import MobileHeader from "./mobile-header";
import logo from "../../../../public/logo.png";

export default function Header() {
  return (
    <header className="text-black p-8 flex items-center justify-between gap-36 absolute left-1/2 z-10 w-[90%] top-[6rem] transform-1/2-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl">
      {/* Logo */}
      <div className="w-16 h-16">
        <Image src={logo} alt="logo" width={40} height={40} priority />
      </div>

      {/* Desktop Navigation */}
      <nav>
        <ul className="hidden lg:flex space-x-4 text-base md:gap-7 gap-36">
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

      <MobileHeader />

      {/* Contact Button (visible for all) */}
      <Link
        href="#contact-us"
        className="hidden lg:block text-base text-white bg-green px-4 py-2 rounded-lg hover:bg-green ml-auto"
      >
        Contact Us
      </Link>
    </header>
  );
}
