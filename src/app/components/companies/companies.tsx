import Image from "next/image";
import jtt_logo from "../../../../public/jtt-logo.png";
import ojt_logo from "../../../../public/ojt-logo-full.png";
import sp_logo from "../../../../public/sp-logo.png";
import PaddingContainer from "../padding-container/padding-container";
import { Container } from "../container/container";

const companies = [
  { name: "SPAcademy", logo: sp_logo, width: 40, height: 40 },
  { name: "", logo: ojt_logo, width: 100, height: 50 },
  { name: "JTT", logo: jtt_logo, width: 40, height: 40 },
];

export default function Companies() {
  return (
    <section className="bg-slate-100">
      <PaddingContainer>
        <Container>
          <h2 className="text-darkBlue text-center font-bold text-xl lg:text-8xl mb-5 animate-slide-up">
            Our partners
          </h2>
          <p className="lg:text-[18px] text-base text-darkBlue text-center animate-slide-in-left mb-20 m-auto max-w-[600px] lg:max-w-[900px]">
            We are proud to collaborate with industry-leading partners who share
            our vision for innovation and excellence. Their expertise and
            support help us deliver outstanding solutions and drive meaningful
            progress.
          </p>
          {/* <div className="flex justify-center h-fit w-full m-auto min-250 rounded-3xl"> gap-12  sm:gap-100 xl:gap-200*/}
          <ul className="flex flex-col sm:flex-row gap-10 items-center justify-center">
            {companies.map(({ name, logo, width, height }, index) => (
              <li
                className="flex gap-2 justify-center border-[1px] border-slate-200 rounded-lg w-[200px] items-center bg-white p-6 text-black text-center"
                key={index}
              >
                <div className="flex items-center justify-center min-w-max h-24">
                  <Image
                    src={logo}
                    alt="logo"
                    width={width}
                    height={height}
                    priority
                  />
                </div>
                <p className="text-slate-900 font-medium text-2xl xl:text-3xl">
                  {name}
                </p>
              </li>
            ))}
          </ul>
          {/* </div> */}
        </Container>
      </PaddingContainer>
    </section>
  );
}
