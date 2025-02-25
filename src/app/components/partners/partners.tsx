import Image from "next/image";
import logo from "../../../../public/sp-group.avif";

import PaddingContainer from "../padding-container/padding-container";
import { Container } from "../container/container";

export default function Partners() {
  return (
    <section className="bg-slate-100">
      <PaddingContainer>
        <Container>
          <h2 className="text-darkBlue text-center font-bold text-xl lg:text-8xl mb-5 animate-slide-up">
            Our partner
          </h2>
          <p className="lg:text-[18px] text-base text-darkBlue text-center animate-slide-in-left mb-20 m-auto max-w-[600px] lg:max-w-[900px]">
            We are proud to collaborate with industry-leading partner who share
            our vision for innovation and excellence. Its expertise and support
            help us deliver outstanding solutions and drive meaningful progress.
          </p>
          {/* <div className="flex justify-center h-fit w-full m-auto min-250 rounded-3xl"> gap-12  sm:gap-100 xl:gap-200*/}

          <div className="flex m-auto gap-2 justify-center border-[1px] border-slate-200 rounded-lg w-[340px] items-center bg-white p-6 text-black text-center">
            <Image src={logo} alt="logo" width={300} priority />
          </div>
          {/* </div> */}
        </Container>
      </PaddingContainer>
    </section>
  );
}
