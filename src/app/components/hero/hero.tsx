import Link from "next/link";
import Image from "next/image";
import background from "../../../../public/hero-banner.jpg";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[85vh] bg-cover bg-center bg-no-repeat lg:bg-cover p-8"
      id="home"
    >
      <div className="absolute inset-0 bg-gray-900/50 z-0"></div>

      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <Image
          src={background}
          alt="logo"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col gap-16 justify-center items-center h-[85%] text-center">
        <h1 className="text-white animate-slide-in-right">
          Let’s make <span className="text-blue">{`{ }`}</span>
          <br />
          software together!
        </h1>

        <p className="text-center lg:text-3xl md:text-2xl text-base text-gray-300 animate-slide-in-left">
          Innovation happens when great minds come together. Join us in crafting
          digital experiences.
        </p>

        <Link
          href="#contact-us"
          className="flex justify-center items-center text-base text-white bg-blue font-bold h-[42px] w-[110px] px-4 py-2 rounded-lg border-2 border-blue 
          transition-all duration-300 hover:bg-transparent hover:text-blue animate-slide-in-right"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
