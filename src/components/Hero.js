import React from 'react';

function Hero() {
  return (
    <section className="bg-primary text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto">
        Empowering Smarter Business Decisions
      </h1>
      <p className="mt-4 text-lg max-w-2xl mx-auto">
        InnoVistaar is an all-in-one business intelligence platform designed for startups and MSMEs to unlock their full potential.
      </p>
      <div className="mt-8 flex justify-center space-x-4">
        <button className="bg-white text-primary font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">
          Get a Demo
        </button>
        <button className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-primary transition">
          Explore Platform
        </button>
      </div>
    </section>
  );
}

export default Hero;
