"use client";

import Link from "next/link";

const ContactUs = () => {
  const handleSubmit = (event: { preventDefault: () => void }): void => {
    event.preventDefault();
    console.log("Form");
  };
  return (
    <section
      className="lg:flex lg:justify-center lg:gap-36 bg-light-grey px-16 text-white pb-20"
      id="contact-us"
    >
      <div className="mb-10 lg:mb-0">
        <h2 className="text-green text-4xl lg:text-8xl mb-20 lg:mb-8">
          Contact Us!
        </h2>
        <p className="text-black text-base lg:text-lg mb-8">
          Do you want your app to be fast and to be delivered within the
          shortest deadline? Contact us!
        </p>

        <form className="flex flex-col border-none" onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            className="text-black outline-0 bg-light-grey h-16 text-mm lg:text-lg border-2 rounded-xl p-4 h-20 mb-10 lg:mb-20"
          />
          <input
            placeholder="Email"
            className="text-black outline-0 bg-light-grey h-16 text-mm lg:text-lg border-2 rounded-xl p-4 h-20 mb-10 lg:mb-20"
          />
          <textarea
            placeholder="Project Details"
            rows={3}
            className="text-black outline-0 bg-light-grey text-mm lg:text-lg border-2 rounded-xl p-4 mb-4 lg:mb-8"
          />

          <button className="text-base text-white bg-green h-14 rounded-lg hover:bg-green max-w-75">
            Submit
          </button>
        </form>
      </div>
      <div className="mt-auto lg:mb-75">
        <p className="text-black text-mm lg:text-lg text-disabled">Phone</p>
        <p className="text-black text-mm lg:text-lg mb-5 lg:mb-12">
          UA: +38 098 776 44 30
        </p>

        <p className="text-black text-mm lg:text-lg text-disabled">Email</p>
        <Link
          href="mailto:sales@vertexglobal.com"
          className="text-black text-mm lg:text-lg"
        >
          sales@vertexglobal.com
        </Link>
      </div>
    </section>
  );
};

export default ContactUs;
