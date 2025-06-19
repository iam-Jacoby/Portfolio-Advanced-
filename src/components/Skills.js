import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { src: "https://img.icons8.com/ios/50/000000/python.png", name: "Python", color: "text-blue-600" },
    { src: "https://img.icons8.com/ios/50/000000/django.png", name: "Django", color: "text-green-600" },
    { src: "https://img.icons8.com/ios/50/000000/javascript.png", name: "JavaScript", color: "text-yellow-500" },
    { src: "https://img.icons8.com/ios/50/000000/react-native.png", name: "React", color: "text-cyan-500" },
    { src: "https://img.icons8.com/ios/50/000000/mysql.png", name: "MySQL", color: "text-indigo-600" },
    { src: "https://img.icons8.com/ios/50/000000/html-5--v1.png", name: "HTML", color: "text-orange-500" },
    { src: "https://img.icons8.com/ios/50/000000/css3.png", name: "CSS", color: "text-blue-400" },
  ];

  return (
    <section id="skills" className="relative py-16 bg-gradient-to-r from-blue-100 to-purple-100 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-pink-300 opacity-30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-20 w-80 h-80 bg-purple-300 opacity-30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-32 w-72 h-72 bg-yellow-300 opacity-30 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <h2 className="text-4xl font-bold text-center text-gray-800">Skills</h2>
      <div className="flex flex-wrap justify-center gap-8 mt-12 relative z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <img src={skill.src} alt={skill.name} className="mx-auto" />
            <p className={`mt-4 text-xl font-semibold ${skill.color}`}>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
