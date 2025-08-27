import React from "react";
import { Briefcase, GraduationCap, ShoppingCart, PenTool, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "Job Portal",
    description: "A full-stack web application for job seekers and recruiters to connect.",
    tech: ["Python", "Django", "HTML/CSS"],
    demo: "#",
    github: "#",
    icon: <Briefcase className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "Student Tracker",
    description: "A web application to manage student details and track their academic progress.",
    tech: ["Python", "Django", "MySQL"],
    demo: "#",
    github: "#",
    icon: <GraduationCap className="w-10 h-10 text-green-500" />,
  },
  {
    title: "Hotel Management System",
    description: "A full-stack web app for hotel bookings, reservations, and admin management.",
    tech: ["React", "Node.js", "Express.js"],
    demo: "https://hms-hotel-management-system-using-ai.onrender.com/",
    github: "https://github.com/iam-Jacoby/HMS-Hotel-Management-System-Using-AI",
    icon: <ShoppingCart className="w-10 h-10 text-pink-500" />,
  },
  {
    title: "Blog Platform",
    description: "A blogging platform where users can create, edit, and share their articles.",
    tech: ["React", "Node.js", "Express"],
    demo: "#",
    github: "https://github.com/iam-Jacoby/Blog-Platform",
    icon: <PenTool className="w-10 h-10 text-purple-500" />,
  },
  {
    title: "TaskFlow AI",
    description: "An AI-powered task management platform for organizing, prioritizing, and tracking tasks with smart features.",
    tech: ["React", "TypeScript", "Node.js"],
    demo: "https://taskflow-ai-sklj.onrender.com/",
    github: "https://github.com/iam-Jacoby/TaskFlow-AI",
    icon: <CheckCircle className="w-10 h-10 text-yellow-500" />,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          🚀 My Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-white/80 dark:bg-gray-800/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{project.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-blue-500 transition">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4">
                <a
                  href={project.demo}
                  className="text-sm text-white bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-2 rounded-full shadow hover:scale-105 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="text-sm text-blue-600 dark:text-blue-400 border border-blue-500 px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}

          {/* More Projects */}
          <div className="flex items-center justify-center">
            <a
              href="https://github.com/iam-Jacoby"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] 
                        bg-clip-text text-transparent animate-gradient"
            >
              View More on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
