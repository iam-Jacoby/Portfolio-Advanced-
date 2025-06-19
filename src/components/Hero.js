import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-center px-4 pt-20">
      <div>
        <h2 className="text-white text-5xl font-extrabold mb-4">Hey, I'm Jacob 👋</h2>
        <p className="text-white text-xl mb-6">Web Developer • Python | Django | React</p>
        <a
          href="#projects"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-100 transition" 
        >
          View Projects
        </a>

        <a
          href="/Jacob-Abraham-Resume.pdf"
          download
          className="mt-4 inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-100 transition"
        >
          Download Resume
        </a>

      </div>
    </section>
  );
};

export default Hero;
