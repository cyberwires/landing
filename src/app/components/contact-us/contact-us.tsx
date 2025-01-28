"use client";

import Link from "next/link";

const ContactUs = () => {
  const handleSubmit = (event: { preventDefault: () => void }): void => {
    event.preventDefault();
    console.log("Form");
  };
  return (
    <section
      className="md:flex md:gap-36 bg-light-grey px-16 text-white pb-20"
      id="contact-us"
    >
      <div className="mb-10 md:mb-0">
        <h2 className="text-green text-4xl md:text-8xl mb-20 md:mb-8">
          Contact Us!
        </h2>
        <p className="text-black text-base md:text-lg mb-8">
          Do you want your app to be fast and to be delivered within the
          shortest deadline? Contact us!
        </p>

        <form className="flex flex-col border-none" onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            className="text-black outline-0 bg-light-grey h-16 text-mm md:text-lg border-2 rounded-xl p-4 h-20 mb-10 md:mb-20"
          />
          <input
            placeholder="Email"
            className="text-black outline-0 bg-light-grey h-16 text-mm md:text-lg border-2 rounded-xl p-4 h-20 mb-10 md:mb-20"
          />
          <textarea
            placeholder="Project Details"
            rows={3}
            className="text-black outline-0 bg-light-grey text-mm md:text-lg border-2 rounded-xl p-4 mb-4 md:mb-8"
          />

          <button className="text-base text-white bg-green h-14 rounded-lg hover:bg-green max-w-75">
            Submit
          </button>
        </form>
      </div>
      <div className="mt-auto md:mb-75">
        <p className="text-black text-mm md:text-lg text-disabled">Phone</p>
        <p className="text-black text-mm md:text-lg mb-5 md:mb-12">
          +1 (833) 520-3712
        </p>

        <p className="text-black text-mm md:text-lg text-disabled">Email</p>
        <Link
          href="mailto:malenkaodeskakantorka@gmail.com"
          className="text-black text-mm md:text-lg"
        >
          malenkaodeskakantorka@gmail.com
        </Link>
      </div>
    </section>
  );
};

export default ContactUs;
