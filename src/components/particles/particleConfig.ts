import { ISourceOptions } from "@tsparticles/engine";

const main_color = "#6bb5aa";

const particleConfig: ISourceOptions = {
  fullScreen: {
    enable: false,
  },
  background: {
    color: {
      value: "#3b3b3b",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
      },
    },
    modes: {
      push: {
        distance: 200,
        duration: 15,
      },
      grab: {
        distance: 120,
      },
      repulse: {
        distance: 100,
      },
    },
  },
  particles: {
    color: {
      value: main_color,
    },
    links: {
      color: main_color,
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "out",
      },
      random: true,
      speed: .3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 100,
    },
    opacity: {
      value: 1.0,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 2 },
    },
  },
  detectRetina: true,
};

export default particleConfig;