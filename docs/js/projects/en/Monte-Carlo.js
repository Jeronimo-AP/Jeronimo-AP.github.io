export const projectFeatures = {
  lln: {
    img: "../../img/projects/MC-LLN.png",
    title: "Law of Large Numbers",
    desc: "Statistical demonstration of the Law of Large Numbers using sums of uniformly distributed random variables.",
    points: [
      "Moment analysis (mean, variance, skewness, kurtosis)",
      "Emergence of Gaussian distributions",
      "Visualization via histograms and videos",
      "Clear convergence toward expected values"
    ]
  },

  randomwalks: {
    img: "../../img/projects/MC-randWalks.png",
    title: "Random Walk Simulations (2D & 3D)",
    desc: "Monte Carlo simulations of independent random walkers in two and three dimensions, used to study diffusive behavior and statistical properties.",
    points: [
      "Up to 10⁵ independent walkers",
      "Mean displacement and variance analysis",
      "Gaussian convergence and √N scaling",
      "Trajectory data saved for visualization"
    ]
  },

  rejection: {
    img: "../../img/projects/MC-rejection.png",
    title: "Rejection Sampling Integration",
    desc: "Numerical integration using the rejection method, with efficiency and error analysis compared to analytical results.",
    points: [
      "Positive and negative contribution handling",
      "Efficiency estimation",
      "Histogram-based validation",
      "Error reduction with increased acceptance rate"
    ]
  },

  inversecdf: {
    img: "../../img/projects/MC-inverseCDF.png",
    title: "Inverse CDF Sampling",
    desc: "Generation of non-uniformly distributed random numbers using numerical inversion of the cumulative distribution function.",
    points: [
      "Trapezoidal integration of the PDF",
      "Numerical inversion via array indexing",
      "Excellent agreement with analytical PDFs",
      "Fully configurable distribution exponent"
    ]
  },

  integration: {
    img: "../../img/projects/MC-integration.png",
    title: "Monte Carlo Integration",
    desc: "Uniform-sampling Monte Carlo integration with detailed error analysis and theoretical comparison.",
    points: [
      "Absolute and relative error scaling",
      "σ ∝ 1/√N convergence verified",
      "Comparison with analytical integrals",
      "Statistical interpretation of integration error"
    ]
  }
};
