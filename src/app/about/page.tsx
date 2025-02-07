const About = () => {
  return (
    <section className="bg-light-grey text-black px-10 py-16 h-full text-base lg:text-lg">
      <div className="container mx-auto gap-10 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl lg:text-8xl font-bold text-blue mb-6">
            About Vertex Solutions
          </h1>

          <section className="mb-6">
            <h2 className="text-2xl lg:text-6xl font-semibold mb-4">
              OUR VALUES
            </h2>
            <h3 className="text-2xl lg:text-4xl font-semibold mb-2">
              We Deliver
            </h3>
            <p className="leading-relaxed">
              We take ownership and deliver efficient, expert-engineered
              solutions. We tackle challenges with grit and we focus on customer
              benefits. Our goal is to maximize results for our clients, no
              matter how big or small the challenge. That’s how we achieve
              excellence.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-2xl lg:text-4xl font-semibold mb-2">We Grow</h3>
            <p>
              We foster a culture of diversity and inclusivity. We believe in
              making a positive impact in the communities where we work and
              live. Sustainable and responsible growth are key influencers to
              our actions. That’s how we build a better future.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-2xl lg:text-4xl font-semibold mb-2">We Care</h3>
            <p>
              We are a team of professionals dedicated to continuously
              perfecting our skills. Each Svitler is a unique individual, and we
              embrace a flexible approach to ensure every team member finds
              their own path to excellence in their respective fields. This is
              how we advance together.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-2xl lg:text-4xl font-semibold mb-2">
              We Keep It Simple
            </h3>
            <p>
              We uphold integrity, openness, and transparency in all our
              processes. Trust is our foundation, and we strive to maintain
              simplicity to ensure clarity and promote efficiency. That’s how we
              build lasting relationships with our clients and colleagues. We
              value communication, teamwork, and relationships between people,
              respect and support each other and our clients, and pay close
              attention to the needs of others.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
