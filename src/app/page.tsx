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
          <div className="relative top-12 lg:top-20 w-150 h-150 lg:w-[321px] lg:h-[333px] lg:min-w-[321px] mr-5">
            <Image src="./team-work-2.png" alt="logo" fill priority />
          </div>
          <div className="w-max lg:mr-20">
            <div className="relative mb-5 rounded-lg w-150 h-150 lg:w-[321px] lg:h-[292px]">
              <Image
                src="./team-work-1.png"
                alt="logo"
                fill
                priority
                className="rounded-lg"
              />
            </div>
            <div className="relative w-150 h-20 lg:w-[321px] lg:h-[132px]">
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
        <div className="relative bg-grey overflow-hidden rounded-3xl p-5 max-h-500 max-w-2000 mx-auto">
          <div className="relative -left-[2rem] w-[240px] h-[55px]">
            <Image src="./curved-arrow-1.png" alt="logo" fill priority />
          </div>

          <div className="absolute top-[15rem] right-[55rem] hidden lg:block w-[300px] h-[200px]">
            <Image src="./curved-arrow-2.png" alt="logo" fill priority />
          </div>

          <div className="absolute -right-16 bottom-36 lg:left-500 lg:bottom-[2rem] w-[111px] h-[113px]">
            <Image src="./green-ball.png" alt="logo" fill priority />
          </div>

          <div className="absolute top-0 left-250 bg-disabled opacity-40 w-[117px] h-full">
            <Image src="./pixel-background.png" alt="logo" fill priority />
          </div>

          <div className="relative mt-20">
            <h2 className="text-4xl lg:text-8xl mb-20 lg:mb-8 lg:ml-150 max-w-md">
              See what we can do for you
            </h2>

            <ul className="relative lg:float-right lg:bottom-200 -right-[2rem] text-lg lg:w-500 lg:text-5xl text-disabled ">
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

            <div className="relative lg:top-[12rem] lg:ml-auto w-20 h-20">
              <Image src="./green-ball-1.png" alt="logo" fill priority />
            </div>
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
