import Image from "next/image";
import PaddingContainer from "../padding-container/padding-container";
import { Container } from "../container/container";

export default function AboutUs() {
  return (
    <section className="bg-white text-black" id="about">
      <PaddingContainer>
        <Container>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:items-start gap-10 lg:gap-16">
            {/* Images */}
            <div className="flex flex-wrap justify-center lg:flex-nowrap ">
              <div className="relative top-12 lg:top-20 w-120 sm:w-200 h-120 sm:h-200 xl:w-[321px] xl:h-[333px] xl:min-w-[321px] mr-2 animate-slide-in-left">
                <Image src="./team-work-2.png" alt="logo" fill priority />
              </div>
              <div className="w-max">
                <div className="relative mb-2 rounded-lg w-120 sm:w-200 h-120 sm:h-200 xl:w-[321px] xl:h-[292px] animate-slide-down">
                  <Image
                    src="./team-work-1.png"
                    alt="logo"
                    fill
                    priority
                    className="rounded-lg"
                  />
                </div>
                <div className="relative w-120 sm:w-200 h-20 sm:h-28 xl:w-[321px] xl:h-[132px] animate-slide-in-right">
                  <Image src="./team-work-3.png" alt="logo" fill priority />
                </div>
              </div>
            </div>
            {/* Text */}
            <div className="flex flex-col relative text-center lg:text-left max-w-[600px] lg:max-w-full">
              <h2 className="text-darkBlue font-bold text-xl lg:text-8xl mb-5 lg:mb-20 animate-slide-up">
                About us
              </h2>
              <ul className="flex flex-col gap-5">
                <li className="text-base lg:text-lg animate-slide-up">
                  At Vertex Solutions, we deliver expert-engineered solutions
                  with efficiency and grit, always focusing on customer success.
                  We embrace diversity, foster innovation, and drive sustainable
                  growth to create a better future.
                </li>
                <li className="text-base lg:text-lg animate-slide-up">
                  Our team thrives on integrity, transparency, and continuous
                  improvement—building strong relationships and delivering
                  excellence every step of the way.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </PaddingContainer>
    </section>
  );
}
