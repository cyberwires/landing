import Image from "next/image";
import { FaqItem } from "./faq-item";

const faqs = [
  {
    question: "What is the best way to create a SaaS business today?",
    answer:
      "Launch a business today with our help and get it done with amazing launch features, websites, and more...",
  },
  {
    question: "How do I get started with SaaS development?",
    answer:
      "To start with SaaS, define your target market, validate your idea, build an MVP, and iterate based on feedback...",
  },
  {
    question: "What are the essential tools for SaaS development?",
    answer:
      "Essential tools include cloud hosting (AWS, GCP), backend frameworks (Node.js, Django), frontend frameworks (React, Vue), and CI/CD pipelines...",
  },
];

const Faq = () => {
  return (
    <section className="bg-light-grey px-16 text-black pb-20" id="faq">
      <div className="flex flex-col">
        <div className="relative mx-auto mb-5 w-100 h-100">
          <Image src="./logo.png" alt="logo" fill priority />
        </div>
        <h2 className="text-4xl md:text-8xl mb-5 md:mb-20 text-center">
          Frequently asked questions
        </h2>
        <p className="text-2xl md:text-4xl mb-5 md:mb-20 text-center">
          Whats happening around the World.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <FaqItem key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
