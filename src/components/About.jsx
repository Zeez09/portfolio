
import React from "react";

const About = () => {
  return (
    <section id="about" className="mt-16">
      <div className="w-full px-3 py-6 sm:px-6">
        <h1 className="text-2xl sm:text-5xl font-bold flex justify-center mb-8">
          About
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:max-w-4xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-center md:text-left px-2">
            I’m a passionate and innovative software developer dedicated to
            building intuitive and impactful web solutions. I transform ideas
            into user-focused products through clean code, creativity, and
            attention to detail.
          </p>

          <img
            src="/favicon.webp"
            alt="avatar"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
