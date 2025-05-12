import React from "react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 text-center">
        Hi, I'm Jacob Abraham
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 text-center">
        A Passionate Full Stack Web Developer 🚀
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
