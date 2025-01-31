import React from "react";

const Success = () => {
  return (
    <section className="flex items-center justify-center flex-col h-[100vh]">
      <h1 className="text-bold text-blue text-xl lg:text-8xl mb-4">
        Form has been submitted!
      </h1>
      <p className="text-lg text-blue">We will get back to you shortly</p>
    </section>
  );
};

export default Success;
