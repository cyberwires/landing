"use client";
import { menu } from "@/app/utils";
import Link from "next/link";
import { useEffect } from "react";

const MobileHeader = ({
  open,
  handleMenuOpen,
}: {
  open: boolean;
  handleMenuOpen: () => void;
}) => {
  useEffect(() => {
    // Prevent scrolling when the menu is open
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Reset after the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* Burger Menu Icon (visible on mobile) */}
      <button
        className="md:hidden flex flex-col justify-between w-8 h-8 relative"
        onClick={handleMenuOpen}
      >
        <span
          className={`block w-8 h-1 transition-all duration-300 ${
            open ? "rotate-45 translate-y-3 bg-slate-200" : "bg-slate-800"
          }`}
        ></span>
        <span
          className={`block w-8 h-1 transition-all duration-300 ${
            open ? "opacity-0" : "bg-slate-800"
          }`}
        ></span>
        <span
          className={`block w-8 h-1 transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-4 bg-slate-200" : "bg-slate-800"
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      <nav
        className={`absolute top-[76px] left-0 w-[100%] h-[100vh] text-center p-4 md:hidden bg-transparent backdrop-blur-md transform transition-all duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}`}
        style={{
          backgroundImage:
            "linear-gradient(rgba(28, 28, 28, 0.4), rgba(28, 28, 28, 0.3))",
        }}
      >
        <ul className="flex flex-col items-center justify-center gap-20 h-[60%] text-4xl text-center">
          {menu.map(({ name, href }, index) => (
            <li className="relative w-max" key={index}>
              <Link
                href={href}
                onClick={handleMenuOpen}
                className="text-white hover:after:block hover:after:absolute after:content-[''] after:w-full after:right-0 after:h-1 after:bg-black"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="#contact-us"
          onClick={handleMenuOpen}
          className="flex justify-center items-center font-bold h-[42px] w-[110px] px-4 py-2 rounded-lg border-2 
          transition-all duration-300 bg-transparent text-blue border-blue text-base hover:bg-blue hover:border-transparent hover:text-white m-[auto]"
        >
          Contact Us
        </Link>
      </nav>
    </>
  );
};

export default MobileHeader;
