import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export const metadata: Metadata = {
  title: "Vertex Solutions | Expert Software Development",
  description:
    "Custom web & mobile app development by top React, Node.js, and Fastify engineers. Scalable, efficient, and high-performance solutions for your business.",
  keywords:
    "Vertex Solutions, software development, web development, mobile app development, React, Node.js, Fastify, TypeScript, IT consulting",
  openGraph: {
    title: "Vertex Solutions | Scalable Software Development",
    description:
      "We deliver high-quality software solutions using React, Redux, Node.js, and Fastify. Let’s build something great together!",
    url: "https://vertex-solutions-ua.netlify.app/",
    siteName: "Vertex Solutions",
    images: [
      {
        url: "https://https://vertex-solutions-ua.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vertex Solutions - Software Development Experts",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertex Solutions | Scalable Software Development",
    description:
      "Custom software solutions using React, Node.js, and Fastify. Build your next big project with us!",
    images: ["https://vertex-solutions-ua.netlify.app/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
