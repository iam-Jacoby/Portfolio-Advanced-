import React from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  console.log("ParticlesBackground loaded");

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{ height: "100%", width: "100%", backgroundColor: "rgba(255,0,0,0.1)" }}
      options={{
        fullScreen: {
          enable: false
        },
        background: {
          color: {
            value: "transparent"
          }
        },
        particles: {
          number: {
            value: 30
          },
          color: {
            value: "#ffffff"
          },
          size: {
            value: 3
          },
          move: {
            enable: true,
            speed: 2
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          }
        }
      }}
    />
  );
};

export default ParticlesBackground;
