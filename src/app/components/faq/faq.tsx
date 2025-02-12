import Image from "next/image";
import { FaqItem } from "./faq-item";
import PaddingContainer from "../padding-container/padding-container";
import { Container } from "../container/container";
import faqImage from "../../../../public/faq-image.svg";

const faqs = [
  {
    question: "Flexible Cooperation",
    answer:
      "Project scope uncertainty is a common challenge for startups and SMBs. A development centers model enables us to be flexible and change priorities on demand.",
  },
  {
    question: "Cost Control",
    answer:
      "You only pay for the negotiated scope of work. If your priorities change, we immediately react to them and change our focus. A clearly defined project scope means you don’t overpay.",
  },
  {
    question: "Collaborative Partnership",
    answer:
      "A development center cooperation fosters collaboration between clients and vendors. Thus, you’ll not only get your job done but also share best practices and learn from our top experts.",
  },
  {
    question: "Quality Software",
    answer:
      "With tremendous flexibility and the ability to adapt to changing requirements, we can build a product that fulfills your business goals, not just follows requirements.",
  },
  {
    question: "Risk Mitigation",
    answer:
      "We define the scope initially and constantly track the progress to ensure we build a desired product. This approach prevents any extra work and surcharges.",
  },
  {
    question: "Project Ownership",
    answer:
      "There is visibility into resource allocation, the amount of time spent on each task, and the progress made. You’re in control and can tweak your strategy accordingly.",
  },
];

const Faq = () => {
  return (
    <section id="faq">
      <PaddingContainer>
        <Container>
          <div className="flex justify-end relative">
            <Image
              src={faqImage}
              alt="FAQ"
              className="rounded-lg -z-10 min-w-[300px] max-w-[700px] w-full absolute top-0 left-0"
            />

            <div className="flex flex-col gap-20">
              <div className="flex flex-col gap-5 text-center lg:text-left">
                <h2 className="text-darkBlue font-bold text-xl lg:text-8xl animate-slide-up">
                  Frequently asked questions
                </h2>
                <p className="lg:text-3xl md:text-2xl text-base text-gray-500 animate-slide-in-left max-w-[600px] lg:max-w-[680px]">
                  Whats happening around the World.
                </p>
              </div>

              <div className="max-w-6xl mx-auto space-y-4">
                {faqs.map((item, index) => (
                  <FaqItem key={index} data={item} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </PaddingContainer>
    </section>
  );
};

export default Faq;
