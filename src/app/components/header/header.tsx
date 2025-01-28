"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { menu } from "@/app/utils";


export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenuOpen = (): void => {
    setOpen((prevState) => !prevState);
  };

  return (
    <header className="text-gray p-8 flex items-center justify-between gap-36 absolute left-1/2 z-10 w-[90%] top-[6rem] transform-1/2-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl">
      {/* Logo */}
      <div className="w-16 h-16">
        <Image src="./logo.png" alt="logo" width={40} height={40} priority />
      </div>

      {/* Desktop Navigation */}
      <nav>
        <ul className="hidden md:flex space-x-4 text-base gap-36">
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

      {/* Burger Menu Icon (visible on mobile) */}
      <button className="md:hidden text-white" onClick={handleMenuOpen}>
        {/* Burger Icon */}
        {open ? (
          <span className="text-lg text-black">&#x2715;</span> // X (Close Icon)
        ) : (
          <span className="text-lg text-black">&#9776;</span> // ≡ (Burger Icon)
        )}
      </button>

      {/* Mobile Menu */}
      {open && (
        <nav className="absolute z-20 top-100 left-0 w-full h-content bg-white text-center p-4 md:hidden rounded-3xl">
          <ul className="space-y-4 text-lg text-right pr-4">
            {menu.map(({ name, href }, index) => (
              <li className="relative w-max ml-auto" key={index}>
                <Link
                  href={href}
                  className="hover:after:block hover:after:absolute after:content-[''] after:w-full after:right-0 after:h-1 after:bg-black"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Contact Button (visible for all) */}
      <Link
        href="/contact-us"
        className="hidden md:block text-base bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 ml-auto"
      >
        Contact Us
      </Link>
    </header>
  );
}
