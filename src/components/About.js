import React from "react";
import { Link } from "react-router-dom"; // for navigation

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-white dark:bg-gray-900 text-center transition-colors duration-300"
    >

      <div className="relative max-w-3xl mx-auto z-10">
        <h2 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          I'm Jacob Abraham, a passionate full stack web developer from Kerala 🇮🇳.
          I specialize in building scalable web applications using{" "}
          <span className="font-medium text-blue-600 dark:text-blue-300">
            Python, Django, React
          </span>
          , and more. I enjoy solving real-world problems through clean,
          efficient code and engaging UI/UX. When I'm not coding, you’ll find me
          exploring new tech or leveling up my skills. 💻🚀
        </p>

        {/* More Button */}
        <div className="mt-6">
          <Link
            to="/about-me"
            className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-full shadow-md 
                       hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-300"
          >
            More →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
