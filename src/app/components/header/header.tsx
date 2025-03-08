"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../../public/logo.png";
import MobileHeader from "./mobile-header";
import { Container } from "../container/container";

interface MenuInterface {
  name: string;
  href: string;
}

export default function Header({ menu }: { menu: MenuInterface[] }) {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenuOpen = (): void => {
    setOpen((prevState) => !prevState);
  };

  return (
    <header className="py-4 px-6 sticky w-full top-0 shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_1px_3px_1px] z-50 bg-dark">
      <Container>
        <div className="flex justify-center gap-36">
          <div className="w-full flex items-center justify-between ">
            {/* Logo */}
              <Link href="/">
                <Image src={logo} alt="logo" width={150} height={70} priority />
              </Link>

            {/* Desktop Navigation */}
            <nav>
              <ul className="hidden md:flex space-x-4 text-base gap-24 xl:gap-36">
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
        </div>
      </Container>
    </header>
  );
}
