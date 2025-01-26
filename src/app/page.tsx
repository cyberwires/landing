import Image from "next/image";
import Link from "next/link";
import { prefix } from "./prefix";

const companies = [
  { name: "SPAcademy", logo: "/sp-logo.png", width: 50, height: 50 },
  { name: "OJT-Logbook", logo: "/ojt-logo.png", width: 100, height: 50 },
  { name: "JTT", logo: "/jtt-logo.png", width: 50, height: 50 },
];

export default function Home() {
  return (
    <>
      <section
        className="relative w-full h-[83vh] bg-cover bg-center bg-no-repeat md:bg-cover overflow-hidden"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        {/* Content */}
        <div className="w-full h-full absolute top-270 right-100 z-0 md:right-250 md:top-360">
          <Image src={`${prefix}/lines.png`} alt={""} fill priority />
        </div>
        <div className="w-full h-full absolute top-20 z-0">
          <Image src={`${prefix}/lines2.png`} alt={""} fill priority />
        </div>

        <div className="flex flex-col justify-center items-center w-1/2 h-full bg-black/80 text-center z-20 rounded-r-3xl">
          <h1 className="text-4xl md:text-9xl font-bold text-white mb-9">
            Let’s make <span className="text-green">{`{ }`}</span>
            <br />
            software together!
          </h1>

          <Link
            href="/contact-us"
            className="block md:hidden text-base bg-red-stone-900 z-10 px-4 py-2 rounded-lg hover:bg-red-stone-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
      <section>
        <div className="flex justify-center p-8 relative bottom-20 bg-white w-max m-auto min-250 rounded-t-3xl">
          <ul className="md:flex gap-20">
            {companies.map(({ name, logo, width, height }, index) => (
              <li
                className="flex justify-between items-center text-black text-center min-w-max"
                key={index}
              >
                <div className="flex items-center justify-center min-w-max h-24 mr-3">
                  <Image
                    src={`${prefix}${logo}`}
                    alt="logo"
                    width={width}
                    height={height}
                    priority
                  />
                </div>
                <p className="font-bold text-2xl md:text-3xl">{name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="md:px-150">
        <div className="flex flex-wrap justify-center md:flex-nowrap">
          <div className="relative top-12 md:top-20 w-150 h-150 md:w-[321px] md:h-[333px] md:min-w-[321px] mr-5">
            <Image
              src="/team-work-2.png"
              alt="logo"
              fill
              priority
              // className="relative top-20 h-fit mr-5 w-full"
            />
          </div>
          <div className="w-max md:mr-20">
            <div className="relative mb-5 rounded-lg w-150 h-150 md:w-[321] md:h-[292px]">
              <Image
                src="/team-work-1.png"
                alt="logo"
                fill
                priority
                className="rounded-lg"
              />
            </div>
            <div className="relative w-150 h-20 md:w-[321] md:h-[132px]">
              <Image src="/team-work-3.png" alt="logo" fill priority />
            </div>
          </div>{" "}
          <div className="flex flex-col px-20 md:px-0 relative top-20 md:top-200">
            <h1 className="text-green text-xl md:text-8xl mb-5 md:mb-14">
              About us
            </h1>
            <p className="text-base md:text-lg">
              Concept Softworks is a software company, we develop custom built
              software for clients - covering everything from financial
              institutions & medical companies all the way to tech companies and
              government organizations.
            </p>{" "}
          </div>
        </div>
      </section>
    </>
  );
}
