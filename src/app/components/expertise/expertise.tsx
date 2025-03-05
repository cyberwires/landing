"use client";

import { expertise } from "@/app/utils";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Container } from "../container/container";
import PaddingContainer from "../padding-container/padding-container";

export default function Expertise() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <section className="bg-darkBlue text-white">
      <PaddingContainer>
        <Container>
          <div className="relative flex items-center justify-center lg:justify-between">
            {/* Larger Gear */}
            <FontAwesomeIcon
              icon={faGear}
              className="text-gray-800 h-[10rem] absolute left-1/2 bottom-16 xl:bottom-32 animate-spin-slow"
            />
            {/* Smaller Gear (rotates in opposite direction) */}
            <FontAwesomeIcon
              icon={faGear}
              className="text-sky-200 opacity-75 h-[7rem] absolute left-0 top-0 hidden xl:block animate-spin-fast"
            />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-28 lg:gap-56 relative w-full">
              <div className="flex flex-col gap-5 text-center lg:text-left">
                <h2 className="text-4xl lg:text-8xl animate-slide-in-right">
                  See what we can do for you
                </h2>
                <p className="lg:text-[18px] text-base text-gray-500 animate-slide-in-left max-w-[600px] lg:max-w-[680px]">
                  We provide cutting-edge solutions tailored to your needs. From
                  idea to execution, we ensure seamless experiences and top-tier
                  performance.
                </p>
              </div>

              <ul className="relative text-lg w-[100%] max-w-500 lg:text-5xl text-disabled animate-slide-up">
                {expertise.map(({ name, icon: Icon, description }, index) => (
                  <li
                    key={index}
                    className="group transition-transform duration-300 lg:mb-10"
                  >
                    <button
                      className={`flex items-center gap-10 transition-all duration-300 ${openIndex === index ? "text-blue" : "text-white hover:text-blue"
                        }`}
                      onClick={() => handleClick(index)}
                    >
                      <div className="bg-blue w-[50px] h-[50px] flex items-center justify-center rounded-lg">
                        <Icon />
                      </div>
                      {name}
                    </button>

                    {/* Toggle description for correct item */}
                    <div
                      className={`transition-all duration-300 ease-in-out text-base text-white ${openIndex === index
                          ? "max-h-96 opacity-100 p-3"
                          : "max-h-0 opacity-0 p-0"
                        } overflow-hidden`}
                    >
                      {description}
                    </div>

                    <hr className="border-disabled border-gray-600 duration-300 my-5" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </PaddingContainer>
    </section>
  );
}
