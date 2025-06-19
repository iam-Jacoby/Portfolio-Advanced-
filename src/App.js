import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// import ParticlesBackground from './components/ParticlesBackground'; // add this!

function App() {
  return (
    <div className="font-sans text-gray-900">
      <>
        <Navbar />
        <div id="home" className="pt-15">
          <Hero />
        </div>

        <About /> 

        <Skills />

        <Projects />

        <Contact />

      </>

      <Footer />

    </div>
  );
}

export default App;
