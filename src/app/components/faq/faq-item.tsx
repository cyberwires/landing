"use client";
import { useState } from "react";

export const FaqItem = ({
  data,
}: {
  data: { question: string; answer: string };
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { question, answer } = data;

  return (
    <div className="border border-black rounded-lg overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-300 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? (
          <span className="text-lg">-</span>
        ) : (
          <span className="text-lg">+</span>
        )}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 p-4" : "max-h-0 opacity-0 p-0"
        } overflow-hidden`}
      >
        <p className="text-gray-700 text-mm md:text-base">{answer}</p>
      </div>
    </div>
  );
};
