import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import Link from "next/link";
import AboutUs from "./components/aboutUs/about-us";
import Companies from "./components/companies/companies";
import ContactUs from "./components/contact-us/contact-us";
import Faq from "./components/faq/faq";
import Hero from "./components/hero/hero";
import CompanyProjects from "./projects/page";
import { expertise } from "./utils";

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
      
      <Companies />

      <AboutUs />

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

          <div className="flex items-center gap-0 lg:gap-56 relative">
            <h2 className="text-4xl lg:text-8xl">See what we can do for you</h2>

            <ul className="relative text-lg lg:w-500 lg:text-5xl text-disabled px-4 lg:p-16">
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
