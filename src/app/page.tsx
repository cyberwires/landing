import Image from "next/image";
import Link from "next/link";
import CompanyProjects from "./projects/page";
import { expertise } from "./utils";
import ContactUs from "./components/contact-us/contact-us";
import Faq from "./components/faq/faq";
import sp_logo from "../../public/sp-logo.png";
import ojt_logo from "../../public/ojt-logo-full.png";
import jtt_logo from "../../public/jtt-logo.png";
import Hero from "./components/hero/hero";
import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const companies = [
  { name: "SPAcademy", logo: sp_logo, width: 50, height: 50 },
  { name: "OJT-Logbook", logo: ojt_logo, width: 100, height: 50 },
  { name: "JTT", logo: jtt_logo, width: 50, height: 50 },
];

export const metadata: Metadata = {
  title: {
    absolute: "Vertex Solutions | Web Development & Digital Innovation",
    default: "Vertex Solutions - Web & Software Development Experts",
  },
  description:
    "Vertex Solutions is a leading web development agency specializing in innovative digital solutions, software development, and UI/UX design. Elevate your brand with cutting-edge technology.",

  keywords: [
    "Web Development",
    "Software Development",
    "UI/UX Design",
    "Digital Solutions",
    "Custom Software",
    "Web Apps",
    "Next.js Development",
    "Vertex Solutions",
  ],

  openGraph: {
    title: "Vertex Solutions | Web Development & Digital Innovation",
    description:
      "We craft exceptional digital experiences through modern web technologies. Let's build something great together!",
    url: "https://vertex-solutions-ua.netlify.app",
    siteName: "Vertex Solutions",
    images: [
      {
        url: "https://vertex-solutions-ua.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vertex Solutions - Web Development",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vertex Solutions | Web Development & Digital Innovation",
    description:
      "Discover top-tier web and software development with Vertex Solutions. Transform your ideas into reality!",
    images: ["https://vertex-solutions-ua.netlify.app/og-image.jpg"],
    creator: "@YourTwitterHandle",
  },

  metadataBase: new URL("https://vertex-solutions-ua.netlify.app"),
};

export default function Home() {
  return (
    <>
      <Hero />
      <section>
        <div className="flex justify-center p-8 relative bottom-20 bg-white w-max m-auto min-250 rounded-3xl">
          <ul className="lg:flex gap-20">
            {companies.map(({ name, logo, width, height }, index) => (
              <li
                className="flex justify-between items-center text-black text-center min-w-max"
                key={index}
              >
                <div className="flex items-center justify-center min-w-max h-24 mr-3">
                  <Image
                    src={logo}
                    alt="logo"
                    width={width}
                    height={height}
                    priority
                  />
                </div>
                <p className="font-bold text-2xl lg:text-3xl">{name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="lg:px-150 mb-20" id="team">
        <div className="flex flex-wrap justify-center lg:flex-nowrap max-w-2000 mx-auto">
          <div className="relative top-12 lg:top-20 w-150 h-150 lg:w-[321px] lg:h-[333px] lg:min-w-[321px] mr-5 animate-slide-in-left">
            <Image src="./team-work-2.png" alt="logo" fill priority />
          </div>
          <div className="w-max lg:mr-20">
            <div className="relative mb-5 rounded-lg w-150 h-150 lg:w-[321px] lg:h-[292px] animate-slide-down">
              <Image
                src="./team-work-1.png"
                alt="logo"
                fill
                priority
                className="rounded-lg"
              />
            </div>
            <div className="relative w-150 h-20 lg:w-[321px] lg:h-[132px] animate-slide-in-right">
              <Image src="./team-work-3.png" alt="logo" fill priority />
            </div>
          </div>{" "}
          <div className="flex flex-col px-20 lg:px-0 relative">
            <div className="relative top-20 left-100 lg:top-0 lg:left-0 bottom-10 w-[196px] h-[207px]">
              <Image src="./square.png" alt="logo" fill priority />
            </div>
            <h2 className="text-blue font-bold text-xl lg:text-8xl mb-5 lg:mb-14 animate-slide-up">
              About us
            </h2>
            <p className="text-base lg:text-lg animate-slide-up">
              Concept Softworks is a software company, we develop custom built
              software for clients - covering everything from financial
              institutions & medical companies all the way to tech companies and
              government organizations.
            </p>{" "}
          </div>
        </div>
      </section>

      <CompanyProjects />

      <section className="bg-light-grey px-16 text-white pb-20">
        <div className="relative flex items-center justify-center bg-grey p-8">
          {/* Larger Gear */}
          <FontAwesomeIcon
            icon={faGear}
            className="text-gray-600 h-[10rem] absolute animate-spin-slow"
          />
          {/* Smaller Gear (rotates in opposite direction) */}
          <FontAwesomeIcon
            icon={faGear}
            className="text-gray-500 h-[7rem] absolute left-[15px] top-[15px] animate-spin-fast"
          />

          <div className="flex items-center gap-56 relative">
            <h2 className="text-4xl lg:text-8xl">See what we can do for you</h2>

            <ul className="relative text-lg lg:w-500 lg:text-5xl text-disabled p-16">
              {expertise.map((item, index) => (
                <li
                  key={index}
                  className="group transition-transform duration-300 hover:scale-105 hover:text-white lg:mb-10"
                >
                  <Link href="#contact-us" className="block lg:mb-10">
                    {item}
                  </Link>
                  <hr className="border-disabled group-hover:border-white transition-colors duration-300" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Faq />

      <ContactUs />

      {/* <section className="bg-light-grey px-16 text-white">
        <h2 className="text-green text-xl lg:text-8xl mb-8 lg:mb-24">
          Our Team
        </h2>

        <TeamCard />
      </section> */}
    </>
  );
}
