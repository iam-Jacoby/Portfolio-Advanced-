import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900 text-center transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
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
      </div>
    </section>
  );
};

export default About;
