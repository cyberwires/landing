"use client";
import { menu } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../../public/logo.png";
import MobileHeader from "./mobile-header";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenuOpen = (): void => {
    setOpen((prevState) => !prevState);
  };

  return (
    <header
      className={`flex justify-center gap-36 sticky left-0 z-10 w-full h-[76px] top-0 ${
        open ? "bg-[#181f21]" : "bg-white"
      } p-6`}
    >
      <div className="max-w-[1400px] w-full flex items-center justify-between ">
        {/* Logo */}
        <div className="w-16 h-16">
          <Link href="/">
            <Image src={logo} alt="logo" width={40} height={40} priority />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav>
          <ul className="hidden md:flex space-x-4 text-base gap-36">
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

        <MobileHeader open={open} handleMenuOpen={handleMenuOpen} />

        {/* Contact Button (visible for all) */}
        <Link
          href="#contact-us"
          className="hidden md:flex justify-center items-center font-bold h-[42px] w-[110px] px-4 py-2 rounded-lg border-2 
          transition-all duration-300 bg-blue border-transparent text-white text-base hover:bg-transparent hover:text-blue hover:border-blue"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
