import Image from "next/image";
import aboutImage from "../../../../public/about.png";
import { Container } from "../container/container";
import PaddingContainer from "../padding-container/padding-container";

export default function AboutUs() {
  return (
    <section className="bg-white text-black" id="about">
      <PaddingContainer>
        <Container>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:items-start gap-10 xl:gap-16">
            {/* Image */}
            <Image
              src={aboutImage}
              alt="FAQ"
              className="rounded-lg min-w-[300px] max-w-[800px] min-h-[200px] md:min-h-[320px] max-h-[350px] h-full w-full object-cover object-bottom m-auto animate-slide-up"
            />
            {/* Text */}
            <div className="flex flex-col relative text-center lg:text-left max-w-[800px] lg:max-w-[600px]">
              <h2 className="text-darkBlue font-bold text-xl lg:text-8xl mb-5 lg:mb-20 animate-slide-up">
                About Us
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
