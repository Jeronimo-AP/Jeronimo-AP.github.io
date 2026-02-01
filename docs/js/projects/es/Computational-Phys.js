export const projectFeatures = {
  chaos: {
    video: "../../videos/projects/compPhys_chaos.mp4",
    title: "Sistemas Caóticos",
    desc: "Exploración numérica de sistemas no lineales y caóticos utilizando análisis del espacio de fase y herramientas espectrales.",
    points: [
      "Ecuación logística",
      "Dinámica del doble péndulo",
      "Hamiltoniano de Pullen-Edmonds",
      "Secciones de Poincaré y análisis de Fourier",
      "Visualización de estructuras fractales"
    ]
  },

  pde: {
    img: "../../img/projects/compPhys_PDE.png",
    title: "Ecuaciones Diferenciales Parciales",
    desc: "Solución numérica de la ecuación del calor mediante esquemas de diferencias finitas explícitos e implícitos.",
    points: [
      "Euler progresivo (explícito)",
      "Euler regresivo (implícito)",
      "Método de Crank-Nicolson",
      "Condiciones de frontera de Dirichlet y Neumann",
      "Análisis de estabilidad y convergencia"
    ]
  },

  rng: {
    img: "../../img/projects/compPhys_RNGs.png",
    title: "Generadores de Números Aleatorios y Monte Carlo",
    desc: "Implementación y comparación de múltiples RNGs aplicados a problemas de integración de Monte Carlo.",
    points: [
      "ran2, MZRAN y Mersenne Twister",
      "Caminatas aleatorias (Random Walks)",
      "Integración simple de Monte Carlo",
      "Muestreo gaussiano en espacios N-dimensionales",
      "Evaluación de calidad estadística"
    ]
  },

  ising: {
    video: "../../videos/projects/compPhys_Ising.mp4",
    title: "Modelo de Ising 2D",
    desc: "Simulación de un modelo de Ising bidimensional con visualización de la evolución de espines y observables.",
    points: [
      "Observables termodinámicos",
      "Muestreo de Monte Carlo",
      "Visualización del comportamiento de fase",
      "Reutilización de implementaciones propias de RNG"
    ]
  },

  particles: {
    video: "../../videos/CompPhys.mp4",
    title: "Partículas (Proyecto Final)",
    desc: "Framework modular de simulación de partículas que incluye interacciones de corto y largo alcance, múltiples formalismos y continuación de estado.",
    points: [
      "Potencial de Lennard-Jones con corte y desplazamiento",
      "Interacciones de Coulomb vía suma de Ewald",
      "Dinámica Molecular (Velocity-Verlet)",
      "Monte Carlo (Metropolis) y Dinámica Browniana",
      "Observables de presión, fuerzas y energía",
      "Continuación de estado vía archivos de configuración XML"
    ]
  }
};