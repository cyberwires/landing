"use client";
import ArrowDownIcon from "@/app/icons/arrow-down-icon";
import { useState } from "react";

export const FaqItem = ({
  data,
}: {
  data: { question: string; answer: string };
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { question, answer } = data;

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex justify-between items-center py-5 px-10 bg-white transition text-darkBlue"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>
        {isOpen ? (
          <span className="text-lg text-blue transform rotate-180"><ArrowDownIcon /></span>
        ) : (
          <span className="text-lg text-blue"><ArrowDownIcon /></span>
        )}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-5 px-10" : "max-h-0 opacity-0 p-0"
        } overflow-hidden`}
      >
        <p className="text-base font-thin text-gray-500">{answer}</p>
      </div>
    </div>
  );
};
