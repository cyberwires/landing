import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Roboto_Slab } from "next/font/google";
import Head from "next/head";

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vertex Solutions",
  description: "Efficient and fast app development for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_slab.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
