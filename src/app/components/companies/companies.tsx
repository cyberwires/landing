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
    <section>
      <PaddingContainer>
        <Container>
          <div className="flex justify-center h-fit w-full bg-white m-auto min-250 rounded-3xl">
            <ul className="flex flex-col sm:flex-row gap-12  sm:gap-100 xl:gap-200 items-center">
              {companies.map(({ name, logo, width, height }, index) => (
                <li
                  className="flex gap-2 justify-between items-center text-black text-center min-w-max"
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
          </div>
        </Container>
      </PaddingContainer>
    </section>
  );
}
