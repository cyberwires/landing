import Image from "next/image";
import { FaqItem } from "./faq-item";

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
    <section className="bg-light-grey px-16 text-black pb-20" id="faq">
      <div className="flex flex-col">
        <div className="relative mx-auto mb-5 w-250 h-250">
          <Image src="./logo.png" alt="logo" fill priority />
        </div>
        <h2 className="text-4xl font-bold lg:text-8xl mb-5 lg:mb-20 text-center">
          Frequently asked questions
        </h2>
        <p className="text-2xl lg:text-4xl mb-5 lg:mb-20 text-center">
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
