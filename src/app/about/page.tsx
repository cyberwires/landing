import Image from "next/image";

const About = () => {
  return (
    <section className="text-black mt-100 px-10 py-16 bg-gray h-full text-base lg:text-lg">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl lg:text-8xl font-bold text-blue mb-6">
            About Vertex Solutions
          </h1>
          <section className="mb-6">
            <h2 className="text-2xl lg:text-6xl font-semibold mb-2">
              Who We Are
            </h2>
            <p className="leading-relaxed">
              Vertex Solutions is a passionate and highly skilled team of
              developers and engineers dedicated to delivering top-tier software
              solutions. Based in Lviv, we specialize in building scalable,
              high-performance applications that help businesses thrive in a
              fast-paced digital world.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl lg:text-6xl font-semibold mb-2">
              Our Team
            </h2>
            <p>Our team consists of five dedicated professionals:</p>
            <ul className="list-disc pl-5">
              <li>
                <strong>Project Manager</strong> – Ensuring smooth communication
                and project success.
              </li>
              <li>
                <strong>QA Engineer</strong> – Guaranteeing top-notch software
                quality.
              </li>
              <li>
                <strong>Backend Engineer (Node.js, Fastify)</strong> –
                Architecting robust, scalable backend solutions.
              </li>
              <li>
                <strong>
                  Frontend Engineers (React, Redux, RTK Query, Material UI,
                  TypeScript)
                </strong>{" "}
                – Crafting intuitive and powerful user interfaces.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl lg:text-6xl font-semibold mb-2">
              What We Do
            </h2>
            <p>We offer full-cycle software development services, including:</p>
            <ul className="list-disc pl-5">
              <li>
                <strong>Web & Mobile App Development</strong> – Scalable, fast,
                and efficient applications.
              </li>
              <li>
                <strong>Custom Software Solutions</strong> – Tailored software
                to meet unique business needs.
              </li>
              <li>
                <strong>IT Consulting & Optimization</strong> – Helping
                businesses adopt modern technologies for maximum efficiency.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl lg:text-6xl font-semibold mb-2">
              Why Choose Us?
            </h2>
            <ul className="list-disc pl-5">
              <li>
                <strong>Expertise & Innovation</strong> – We leverage the latest
                tech stacks to build cutting-edge solutions.
              </li>
              <li>
                <strong>Agile & Efficient Development</strong> – Our streamlined
                workflow ensures rapid delivery without compromising quality.
              </li>
              <li>
                <strong>Client-Oriented Approach</strong> – We prioritize
                transparency, communication, and delivering measurable results.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl lg:text-6xl font-semibold mb-2">
              Let’s Build Something Great!
            </h2>
            <p>
              Looking for a reliable tech partner?{" "}
              <strong>Get in touch with Vertex Solutions</strong> today and
              let’s turn your vision into reality!
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
