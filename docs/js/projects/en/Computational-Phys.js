export const projectFeatures = {
  chaos: {
    video: "../../videos/projects/compPhys_chaos.mp4",
    title: "Chaotic Systems",
    desc: "Numerical exploration of nonlinear and chaotic systems using phase-space analysis and spectral tools.",
    points: [
      "Logistic equation",
      "Double pendulum dynamics",
      "Pullen-Edmonds Hamiltonian",
      "Poincaré sections and Fourier analysis",
      "Fractal structure visualization"
    ]
  },

  pde: {
    img: "../../img/projects/compPhys_PDE.png",
    title: "Partial Differential Equations",
    desc: "Numerical solution of the heat equation using explicit and implicit finite-difference schemes.",
    points: [
      "Forward Euler (explicit)",
      "Backward Euler (implicit)",
      "Crank-Nicolson method",
      "Dirichlet and Neumann boundary conditions",
      "Stability and convergence analysis"
    ]
  },

  rng: {
    img: "../../img/projects/compPhys_RNGs.png",
    title: "Random Number Generators & Monte Carlo",
    desc: "Implementation and comparison of multiple RNGs applied to Monte Carlo integration problems.",
    points: [
      "ran2, MZRAN, and Mersenne Twister",
      "Random walks",
      "Simple Monte Carlo integration",
      "Gaussian sampling in N-dimensional spaces",
      "Statistical quality assessment"
    ]
  },

  ising: {
    video: "../../videos/projects/compPhys_Ising.mp4",
    title: "2D Ising Model",
    desc: "Simulation of a two-dimensional Ising model with visualization of spin evolution and observables.",
    points: [
      "Thermodynamic observables",
      "Monte Carlo sampling",
      "Phase behavior visualization",
      "Reuse of custom RNG implementations"
    ]
  },

  particles: {
    video: "../../videos/CompPhys.mp4",
    title: "Particles (Final Project)",
    desc: "Modular particle simulation framework including short- and long-range interactions, multiple formalisms, and state continuation.",
    points: [
      "Lennard-Jones potential with cutoff and shifting",
      "Coulomb interactions via Ewald summation",
      "Molecular Dynamics (Velocity-Verlet)",
      "Monte Carlo (Metropolis) and Brownian Dynamics",
      "Pressure, forces, and energy observables",
      "State continuation via XML configuration files"
    ]
  }
};
