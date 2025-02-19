import { menu } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.png";
import linkedin from "../../../../public/linkedin.png";
import upwork from "../../../../public/upwork.png";
import PaddingContainer from "../padding-container/padding-container";
import { Container } from "../container/container";

const Footer = () => {
  return (
    <footer className="bg-darkBlue">
      <PaddingContainer>
        <Container>
          <div className="flex items-center justify-between mb-8 lg:mb-16">
            <div className="w-120 h-16">
              {" "}
              <Link href="/">
                <Image src={logo} alt="logo" width={120} height={40} priority />
              </Link>
            </div>
            <nav>
              <ul className="flex space-x-4 text-mm text-center items-center gap-4 lg:gap-36">
                {menu.map(({ name, href }, index) => (
                  <li className="relative !ml-0" key={index}>
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
          </div>
          <hr className="border-slate-500 border-1 mb-10" />
          <div className="flex items-center justify-between">
            <p className="text-sm lg:text-mm">All rights reserved ®</p>
            <div className="flex items-center gap-3">
              <Link
                className="relative w-12 h-12"
                href="https://www.linkedin.com/"
              >
                <Image src={linkedin} alt="logo" fill priority />
              </Link>{" "}
              <Link
                className="relative w-12 h-12"
                href="https://www.upwork.com/"
              >
                <Image src={upwork} alt="logo" fill priority />
              </Link>
            </div>
          </div>
        </Container>
      </PaddingContainer>
    </footer>
  );
};

export default Footer;
