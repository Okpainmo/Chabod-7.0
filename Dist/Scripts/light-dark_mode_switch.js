// script for switching color modes

const modeSwitch = document.getElementById('modeSwitch');
const restoreMode = document.getElementById('modeRestore');
const masterNode = document.getElementById('masterNode');
const lightBody = document.getElementById('lightBody');

function goodNight() {
  masterNode.classList.add('dark-mode-activated');
  lightBody.classList.add('dark-body');
  modeSwitch.style.display = 'none';
  restoreMode.style.display = 'block';

  const particles = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 90,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#ffffff',
        animation: {
          enable: true,
          speed: 20,
          sync: true,
        },
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 3,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 6,
        random: true,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0.1,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 100,
        color: '#757575',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
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
      color: '#000000',
      image: '',
      position: '50% 50%',
      repeat: 'no-repeat',
      size: 'cover',
    },
  };

  tsParticles.load('particlesCase', particles);
}

function goodDay() {
  masterNode.classList.remove('dark-mode-activated');
  lightBody.classList.remove('dark-body');
  modeSwitch.style.display = 'block';
  restoreMode.style.display = 'none';

  const particles = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 90,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#000000',
        animation: {
          enable: true,
          speed: 20,
          sync: true,
        },
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 3,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 6,
        random: true,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0.1,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 100,
        color: '#757575',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
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
      color: '#ffffff',
      image: '',
      position: '50% 50%',
      repeat: 'no-repeat',
      size: 'cover',
    },
  };

  tsParticles.load('particlesCase', particles);
}

modeSwitch.addEventListener('click', goodNight);
restoreMode.addEventListener('click', goodDay);
