// App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe"; // new page

function App() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") return true;
    if (stored === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <Router>
      <div className="font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 transition-colors">
        <Navbar dark={dark} setDark={setDark} />

        <Routes>
          {/* Main landing page */}
          <Route
            path="/"
            element={
              <>
                <div id="home" className="pt-15">
                  <Hero />
                </div>
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* More About Me page */}
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
