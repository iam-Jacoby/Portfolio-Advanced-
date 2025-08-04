import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-blue-600 dark:text-blue-400">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Job Portal
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A full-stack web application for job seekers and recruiters to
              connect.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                Python
              </span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                Django
              </span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                HTML/CSS
              </span>
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition"
              >
                Live Demo
              </a>
              <a
                href="#"
                className="text-sm text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-full transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Student Tracker
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A web application to manage student details and track their
              academic progress.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                Python
              </span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                Django
              </span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                MySQL
              </span>
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition"
              >
                Live Demo
              </a>
              <a
                href="#"
                className="text-sm text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-full transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              E-commerce Website
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              An online store that allows users to browse products, add to cart,
              and complete purchases.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                React
              </span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                Node.js
              </span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                MongoDB
              </span>
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition"
              >
                Live Demo
              </a>
              <a
                href="#"
                className="text-sm text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-full transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Blog Platform
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A blogging platform where users can create, edit, and share their
              articles.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                React
              </span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                Node.js
              </span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                Express
              </span>
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/iam-Jacoby/Blog-Platform"
                className="text-sm text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-full transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Project 5 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Task Manager
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A productivity app to help users manage and track their tasks and
              to-do lists.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                React
              </span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                Node.js
              </span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                MongoDB
              </span>
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition"
              >
                Live Demo
              </a>
              <a
                href="#"
                className="text-sm text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-full transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* More Projects Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                Want to see more?
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Check out more of my projects on GitHub!
              </p>
              <a
                href="https://github.com/iam-Jacoby"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium border-b-2 border-blue-600 dark:border-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                View My GitHub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
