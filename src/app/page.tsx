import { Metadata } from "next";
import AboutUs from "./components/about-us/about-us";
import Achievements from "./components/achievements/achievements";
import ContactUs from "./components/contact-us/contact-us";
import Expertise from "./components/expertise/expertise";
import Faq from "./components/faq/faq";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import CompanyProjects from "./projects/page";
import { menu } from "./utils";

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
      <Header menu={menu} />

      <Hero />

      <AboutUs />

      <Expertise />

      <CompanyProjects />

      <Achievements />

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
