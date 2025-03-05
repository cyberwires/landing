import { achievements } from "@/app/utils";
import { Container } from "../container/container";
import PaddingContainer from "../padding-container/padding-container";

export default function Achievements() {
  return (
    <section className="bg-slate-100">
      <PaddingContainer>
        <Container>
          <h2 className="text-darkBlue text-center font-bold text-xl lg:text-8xl mb-5 animate-slide-up">
            Our Impact in Numbers
          </h2>
          <p className="lg:text-[18px] text-base text-gray-500 text-center animate-slide-in-left mb-20 m-auto max-w-[600px] lg:max-w-[900px]">
            Delivering Excellence with a Passion for Innovation
          </p>

          <div className="flex flex-col sm:flex-row gap-20 items-center justify-around bg-white p-16 rounded-lg text-slate-800 text-base font-bold shadow-lg max-w-[700px] m-auto animate-slide-down">
            <div className=" -left-[20px] relative w-[160px] h-[160px] bg-blue rounded-full">
              {/* White floating card with experience number */}
              <div className="absolute -right-[40px] top-0 flex flex-col items-center justify-center text-center w-[170px] h-[170px] bg-white rounded-full 
                shadow-[rgba(0,0,0,0.25)_0px_14px_28px,rgba(0,0,0,0.22)_0px_10px_10px] z-10">
                <span className="text-8xl text-blue">2+</span><span>Years <br /> Of Experience</span>
              </div>
              {/* Decorative blurred elements for enhanced design */}
              <div className="absolute left-[20px] bottom-[30px] rounded-full h-[100px] w-[120px] bg-cyan-400 blur-md"></div>
              <div className="absolute left-[25px] bottom-[30px] rounded-full h-[50px] w-[50px] bg-cyan-200 blur-lg"></div>
            </div>

            {/* Achievement statistics section */}
            <div className="flex flex-col gap-10">
              {achievements.map(({ value, label }, index) => (
                <div key={index} className="flex flex-col gap-2 justify-between text-center sm:text-left">
                  <div className="text-blue text-5xl">{value}</div>
                  <div className="">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </PaddingContainer>
    </section>
  );
}
