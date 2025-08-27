import React from "react";
import Footer from "./Footer";
import {
  SiPython,
  SiDjango,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
  SiC,
  SiCplusplus,
  SiGithub,
  SiFigma,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";

const AboutMe = () => {
  const skills = [
    { name: "Python", icon: <SiPython size={40} /> },
    { name: "Django", icon: <SiDjango size={40} /> },
    { name: "HTML", icon: <SiHtml5 size={40} /> },
    { name: "CSS", icon: <SiCss3 size={40} /> },
    { name: "JavaScript", icon: <SiJavascript size={40} /> },
    { name: "MySQL", icon: <SiMysql size={40} /> },
    { name: "C", icon: <SiC size={40} /> },
    { name: "C++", icon: <SiCplusplus size={40} /> },
    { name: "GitHub", icon: <SiGithub size={40} /> },
    { name: "Figma", icon: <SiFigma size={40} /> },
    { name: "React.js", icon: <SiReact size={40} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={40} /> },
    { name: "Node.js", icon: <SiNodedotjs size={40} /> },
    { name: "TypeScript", icon: <SiTypescript size={40} /> },
  ];

  return (
    <>
      {/* About Me Section */}
        <section className="relative py-20 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 overflow-hidden group">
        {/* Default Image */}
        <img
            src="/images/jacob-color.png" // Light mode image
            alt="Jacob Abraham"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4 opacity-80 dark:opacity-50 dark:grayscale pointer-events-none transition-opacity duration-500 ease-in-out group-hover:opacity-0"
        />

        {/* Hover Image */}
        <img
            src="/images/jacob-hover.png" // Image to show on hover
            alt="Jacob Abraham Hover"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4 opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out group-hover:opacity-80"
        />

        <div className="relative max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">
            More About Me
            </h2>
            <p className="text-lg leading-relaxed mb-4">
            Hey! I'm Jacob Abraham, a full-stack web developer from Kerala. I have
            a strong passion for building modern, scalable, and user-friendly web
            applications. My expertise lies in{" "}
            <span className="font-medium text-blue-600 dark:text-blue-300">
                Python, Django, React, and TypeScript
            </span>.
            </p>
            <p className="text-lg leading-relaxed mb-4">
            Beyond coding, I love exploring emerging technologies, contributing to
            open-source, and enhancing my skills daily. My goal is to create
            impactful solutions that blend efficiency with great UI/UX.
            </p>
            <p className="text-lg leading-relaxed">
            Outside of tech, I enjoy reading, gaming, and experimenting with new
            ideas. 🚀
            </p>
        </div>
        </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 text-blue-600 dark:text-blue-400">
            My Skills
          </h3>
          <div className="relative">
            <div className="flex animate-marquee gap-12">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-gray-800 dark:text-gray-200 min-w-[80px]"
                >
                  {skill.icon}
                  <span className="mt-2 text-sm">{skill.name}</span>
                </div>
              ))}
              {/* Duplicate for continuous scrolling */}
              {skills.map((skill, index) => (
                <div
                  key={index + skills.length}
                  className="flex flex-col items-center justify-center text-gray-800 dark:text-gray-200 min-w-[80px]"
                >
                  {skill.icon}
                  <span className="mt-2 text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

        {/* Education Section */}
        <section className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-blue-600 dark:text-blue-400 text-center">
            Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700 dark:text-gray-300 text-lg">
            {/* Column 1 */}
            <div>
                <h4 className="font-semibold mb-2">
                Bachelor's Degree in Computer Application [BCA]
                </h4>
                <p>
                MES College [Affiliated to Mahatma Gandhi University], Erumely, Kottayam, KL, IN
                </p>
            </div>

            {/* Column 2 */}
            <div>
                <h4 className="font-semibold mb-2">Higher Secondary</h4>
                <p>
                Citadel Residential School, Ranni, Pathanamthitta, KL, IN
                </p>
            </div>
            </div>
        </div>
        </section>

        {/* Certificates Section */}
        <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
            {/* Section Title */}
            <h3 className="text-3xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400">
            Certificates
            </h3>

            {/* Left Image & Right List */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
            
                {/* Left side - Image with Year */}
                <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
                <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                    id="certificate-image"
                    src=""
                    alt="Certificate"
                    className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-500"
                    />
                </div>
                {/* Year displayed below image */}
                <span
                    id="certificate-year"
                    className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300 opacity-0 transition-opacity duration-500"
                ></span>
                </div>

            {/* Right side - List */}
            <div className="w-full md:w-2/3 flex justify-end">
                <ul className="space-y-8 text-lg text-gray-700 dark:text-gray-300 text-right">
                {[
                    { name: "Full-Stack Web Development [Internship] – Luminar TechnoLab, Ernakulam", image: "/certificates/Certificate-Luminar-TechnoLab.jpeg", year: "2023" },
                    { name: "Junior Python Developer – Druv360, Ernakulam", image: "/certificates/Certificate-Druv360.png", year: "2024" },
                    { name: "Elements of AI [Online] – University of Helsinki", image: "/certificates/certificate-elements-of-ai.png", year: "2025" },
                ].map((cert, idx) => (
                    <li
                    key={idx}
                    className="relative cursor-pointer group"
                    onMouseEnter={() => {
                        const img = document.getElementById("certificate-image");
                        const yearLabel = document.getElementById("certificate-year");
                        img.src = cert.image;
                        img.style.opacity = 1;
                        yearLabel.textContent = cert.year;
                        yearLabel.style.opacity = 1;
                    }}
                    onMouseLeave={() => {
                        const img = document.getElementById("certificate-image");
                        const yearLabel = document.getElementById("certificate-year");
                        img.style.opacity = 0;
                        yearLabel.style.opacity = 0;
                    }}
                    >
                    {cert.name}
                    </li>
                ))}
                </ul>
            </div>

            </div>
        </div>
        </section>

      {/* Hobbies / Interests Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 text-blue-600 dark:text-blue-400">
            Hobbies & Interests
          </h3>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Exploring new tech, contributing to open-source, reading, gaming, and experimenting with creative projects. 🚀
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AboutMe;
