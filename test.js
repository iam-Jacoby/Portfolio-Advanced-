// --------------------------------------------    App.js    ------------------------------------

import Navbar from './components/Navbar';
import React from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine); // for debugging if needed
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // console.log(container); // optional
  }, []);

// function App() {
  
  return (
    <div className="font-sans text-gray-900">
      <>
        <Navbar />
        <div id="home" className="pt-15"> {/* Add padding to avoid overlap */}
          {/* Hero section here */}

          <section className="relative min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-center px-4 pt-20">
            {/* Particles */}
            <Particles
              className="absolute inset-0 w-full h-full -z-10"
              id="tsparticles"
              init={particlesInit}
              options={{
                fullScreen: { enable: false },
                background: {
                  color: { value: "transparent" },
                },
                particles: {
                  number: {
                    value: 80,
                    density: {
                      enable: true,
                      area: 800,
                    },
                  },
                  color: {
                    value: "#ffffff",
                  },
                  links: {
                    enable: true,
                    color: "#ffffff",
                    distance: 150,
                  },
                  move: {
                    enable: true,
                    speed: 2,
                  },
                  size: {
                    value: 3,
                  },
                },
                interactivity: {
                  events: {
                    onHover: { enable: true, mode: "repulse" },
                    onClick: { enable: true, mode: "push" },
                  },
                  modes: {
                    repulse: { distance: 100 },
                    push: { quantity: 4 },
                  },
                },
              }}
            />

            {/* Your Hero Content */}
            <div>
              <h2 className="text-white text-5xl font-extrabold mb-4">Hey, I'm Jacob 👋</h2>
              <p className="text-white text-xl mb-6">Web Developer • Python | Django | React</p>
              <a
                href="#projects"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-100 transition"
              >
                View Projects
              </a>
            </div>
          </section>



        </div>
        {/* Rest of sections with ids: about, projects, contact */}

        <section id="about" className="py-20 px-6 bg-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-blue-600">About Me</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              I'm Jacob Abraham, a passionate full stack web developer from Kerala 🇮🇳. I specialize in building
              scalable web applications using <span className="font-medium text-blue-600">Python, Django, React</span>, and more. I enjoy solving real-world problems through clean, efficient code and engaging UI/UX. When I'm not coding, you’ll find me exploring new tech or leveling up my skills. 💻🚀
            </p>
          </div>
        </section>

        <section id="skills" className="relative py-16 bg-gradient-to-r from-blue-100 to-purple-100 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-1/3 left-10 w-72 h-72 bg-pink-300 opacity-30 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 right-20 w-80 h-80 bg-purple-300 opacity-30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-10 left-32 w-72 h-72 bg-yellow-300 opacity-30 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <h2 className="text-4xl font-bold text-center text-gray-800">Skills</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { src: "https://img.icons8.com/ios/50/000000/python.png", name: "Python", color: "text-blue-600" },
              { src: "https://img.icons8.com/ios/50/000000/django.png", name: "Django", color: "text-green-600" },
              { src: "https://img.icons8.com/ios/50/000000/javascript.png", name: "JavaScript", color: "text-yellow-500" },
              { src: "https://img.icons8.com/ios/50/000000/react-native.png", name: "React", color: "text-cyan-500" },
              { src: "https://img.icons8.com/ios/50/000000/mysql.png", name: "MySQL", color: "text-indigo-600" },
              { src: "https://img.icons8.com/ios/50/000000/html-5--v1.png", name: "HTML", color: "text-orange-500" },
              { src: "https://img.icons8.com/ios/50/000000/css3.png", name: "CSS", color: "text-blue-400" },
            ].map((skill, index) => (
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

        <section id="projects" className="py-20 px-6 bg-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-10 text-blue-600">Projects</h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Project 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">Job Portal</h3>
                <p className="text-gray-700 mb-4">A full-stack web application for job seekers and recruiters to connect.</p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Django</span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                </div>
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full">Live Demo</a>
                  <a href="#" className="text-sm text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-full">GitHub</a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">Student Tracker</h3>
                <p className="text-gray-700 mb-4">A web application to manage student details and track their academic progress.</p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Django</span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">MySQL</span>
                </div>
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full">Live Demo</a>
                  <a href="#" className="text-sm text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-full">GitHub</a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">E-commerce Website</h3>
                <p className="text-gray-700 mb-4">An online store that allows users to browse products, add to cart, and complete purchases.</p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">MongoDB</span>
                </div>
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full">Live Demo</a>
                  <a href="#" className="text-sm text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-full">GitHub</a>
                </div>
              </div>

              {/* Project 4 */}
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">Blog Platform</h3>
                <p className="text-gray-700 mb-4">A blogging platform where users can create, edit, and share their articles.</p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Express</span>
                </div>
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full">Live Demo</a>
                  <a href="#" className="text-sm text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-full">GitHub</a>
                </div>
              </div>

              {/* Project 5 */}
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">Task Manager</h3>
                <p className="text-gray-700 mb-4">A productivity app to help users manage and track their tasks and to-do lists.</p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">MongoDB</span>
                </div>
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full">Live Demo</a>
                  <a href="#" className="text-sm text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-full">GitHub</a>
                </div>
              </div>

              <div className="flex justify-center items-center flex-col text-center py-6">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Want to see more?</h3>
                <p className="mb-4">Check out more of my projects on GitHub!</p>
                <a
                  href="https://github.com/iam-Jacoby"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 font-medium flex items-center gap-2"
                >
                  View My GitHub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-600"
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
        </section>

        <section id="contact" className="py-20 px-6 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="mb-8 text-lg">I'm currently open to opportunities. Let’s connect and build something awesome!</p>

            <div className="flex flex-col items-center gap-4">
              <a href="mailto:jacobabraham615@gmail.com" className="underline text-lg hover:text-blue-200">
                📧 jacobabraham615@gmail.com
              </a>
              <div className="flex gap-6 justify-center mt-4">
                <a href="https://github.com/iam-Jacoby" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 text-2xl">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/jacob-abraham-48a61b229" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 text-2xl">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

      </>

      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Jacob Abraham. All rights reserved.</p>
      </footer>

    </div>
  );
};

// export default App;
export default Hero;


// --------------------------------------------------------------------------------------------------------------------------------------------------

        <div id="home" className="pt-15"> {/* Add padding to avoid overlap */}
          {/* Hero section here */}
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
            </div>
          </section>
        </div>

// --------------------------------------------------------------------------------------------------------------------------------------------------
                                                  // src/components/ParticlesBackground.jsx
// import React from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// export default function ParticlesBackground() {
//   const particlesInit = async (main) => {
//     await loadFull(main);
//   };

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: { enable: false },
//         background: {
//           color: {
//             value: "transparent",
//           },
//         },
//         particles: {
//           number: {
//             value: 100,
//             density: {
//               enable: true,
//               area: 800,
//             },
//           },
//           color: {
//             value: "#ffffff",
//           },
//           links: {
//             enable: true,
//             color: "#ffffff",
//             distance: 150,
//           },
//           move: {
//             enable: true,
//             speed: 2,
//           },
//           size: {
//             value: { min: 1, max: 5 },
//           },
//         },
//       }}
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         zIndex: 0,
//       }}
//     />
//   );
// }
