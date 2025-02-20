import Image from "next/image";
import { FaqItem } from "./faq-item";
import PaddingContainer from "../padding-container/padding-container";
import { Container } from "../container/container";
import faqImage from "../../../../public/FAQ.jpg";

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
    <section className="bg-white" id="faq">
      <PaddingContainer>
        <Container>
          <div className="flex flex-col-reverse xl:flex-row justify-center gap-20">
            <Image
              src={faqImage}
              alt="FAQ"
              className="rounded-lg min-w-[300px] max-w-[800px] min-h-[200px] max-h-[320px] h-full xl:min-h-[600px] w-full object-cover object-bottom m-auto animate-slide-up"
            />

            <div className="flex flex-col gap-20 min-w-auto xl:min-w-[600px]">
              <div className="flex flex-col gap-5 text-center xl:text-left">
                <h2 className="text-darkBlue font-bold text-xl lg:text-8xl animate-slide-up">
                  Frequently asked questions
                </h2>
                <p className="lg:text-3xl md:text-2xl text-base text-gray-500 animate-slide-in-left">
                  Whats happening around the World.
                </p>
              </div>

              <div className="max-w-[800px] mx-auto space-y-4">
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
