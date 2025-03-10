import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <section className="flex items-center justify-center flex-col h-screen text-blue text-center px-6">
      <h1 className="text-3xl md:text-6xl lg:text-8xl mb-4">
        Form Submitted!
      </h1>
      <p className="text-lg md:text-xl opacity-90">
        We will get back to you shortly.
      </p>
      <Link
        href="/"
        className="mt-6 font-semibold text-lg hover:underline"
      >
        Go Back
      </Link>
    </section>
  );
};

export default Success;
