"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });
import { loadFull } from "tsparticles";

const PraticleBg = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  useEffect(() => {
    const loadParticles = async (main) => {
      const { loadFull } = await import("tsparticles");
      await loadFull(main);
    };

    Particles && Particles.default && loadParticles(Particles.default);
  }, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 20,
            density: {
              enable: false,
              value_area: 900,
            },
          },
          color: {
            value: "#006",
          },

          opacity: {
            value: 0.1,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: false,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 100,
            color: "#006",
            opacity: 0.3,
            width: 2,
          },

          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
              mode: ["grab"],
            },
            onclick: {
              enable: false,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 700,
              line_linked: {
                opacity: 0.4,
              },
            },
            bubble: {
              distance: 1500,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        background: {
          color: "white",
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
      }}
    />
  );
};

export default PraticleBg;
