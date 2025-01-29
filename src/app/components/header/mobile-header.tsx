"use client";
import { menu } from "@/app/utils";
import Link from "next/link";
import React, { useState } from "react";

const MobileHeader = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenuOpen = (): void => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
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
        <nav className="absolute z-10 top-100 left-0 w-full h-content bg-white text-center p-4 md:hidden rounded-3xl">
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
    </>
  );
};

export default MobileHeader;
