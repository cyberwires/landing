import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[100vh] md:h-[80vh] bg-cover bg-center bg-no-repeat md:h-[110vh] lg:bg-cover p-8"
      style={{
        backgroundImage:
          "linear-gradient(rgba(28, 28, 28, 0.5), rgba(28, 28, 28, 0.5)),url('./hero-banner.jpg')",
      }}
      id="home"
    >
      <div className="flex flex-col gap-16 justify-center items-center h-full text-center">
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
          className="flex justify-center items-center text-base bg-transparent text-blue font-bold h-[52px] w-[130px] px-4 py-2 rounded-lg border-2 border-blue 
          transition-all duration-300 hover:bg-blue hover:border-transparent hover:text-white animate-slide-in-right font-bold"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
