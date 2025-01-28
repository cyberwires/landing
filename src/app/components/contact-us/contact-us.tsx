"use client";

const ContactUs = () => {
  const handleSubmit = (event: { preventDefault: () => void }): void => {
    event.preventDefault();
    console.log("Form");
  };
  return (
    <section className="bg-light-grey px-16 text-white pb-20">
      <h2 className="text-green text-4xl md:text-8xl mb-20 md:mb-8">
        Contact Us!
      </h2>
      <p className="text-black text-base md:text-lg mb-8">
        Do you want your app to be fast and to be delivered within the shortest
        deadline? Contact us!
      </p>

      <form className="flex flex-col border-none" onClick={handleSubmit}>
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
          className="text-black outline-0 bg-light-grey text-mm md:text-lg border-2 rounded-xl p-4"
        />
      </form>
    </section>
  );
};

export default ContactUs;
