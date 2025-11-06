import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import BubbleOverlay from "./BubbleOverlay";
import "../components/BubbleOverlay.css"; // adjust path if needed

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center px-4 pt-20 overflow-hidden transition-colors duration-500
        bg-gradient-to-r from-blue-500 to-purple-600
        dark:from-[#0f1e3d] dark:via-[#2a235a] dark:to-[#6f42c1]"
    >
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      <BubbleOverlay />

      <div className="relative z-10">
        <h2 className="text-white text-5xl font-extrabold mb-4">Hey, I'm Jacob 👋</h2>
        <p className="text-white text-xl mb-6">
          Web Developer • Python | Django | React
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-100 transition"
          >
            View Projects
          </a>
          <a
            href="/Jacob_Abraham_Resume.pdf"
            download
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-100 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
