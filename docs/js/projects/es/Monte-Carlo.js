export const projectFeatures = {
  lln: {
    img: "../../img/projects/MC-LLN.png",
    title: "Ley de los Grandes Números",
    desc: "Demostración estadística de la Ley de los Grandes Números utilizando sumas de variables aleatorias distribuidas uniformemente.",
    points: [
      "Análisis de momentos (media, varianza, asimetría, curtosis)",
      "Surgimiento de distribuciones gaussianas",
      "Visualización mediante histogramas y videos",
      "Clara convergencia hacia los valores esperados"
    ]
  },

  randomwalks: {
    img: "../../img/projects/MC-randWalks.png",
    title: "Simulaciones de Caminata Aleatoria (2D y 3D)",
    desc: "Simulaciones de Monte Carlo de caminantes aleatorios independientes en dos y tres dimensiones, utilizadas para estudiar el comportamiento difusivo y propiedades estadísticas.",
    points: [
      "Hasta 10⁵ caminantes independientes",
      "Análisis de desplazamiento medio y varianza",
      "Convergencia gaussiana y escalamiento con √N",
      "Datos de trayectoria guardados para visualización"
    ]
  },

  rejection: {
    img: "../../img/projects/MC-rejection.png",
    title: "Integración por Muestreo de Rechazo",
    desc: "Integración numérica utilizando el método de rechazo, con análisis de eficiencia y error comparado con resultados analíticos.",
    points: [
      "Manejo de contribuciones positivas y negativas",
      "Estimación de eficiencia",
      "Validación basada en histogramas",
      "Reducción de error con mayor tasa de aceptación"
    ]
  },

  inversecdf: {
    img: "../../img/projects/MC-inverseCDF.png",
    title: "Muestreo por Transformada Inversa",
    desc: "Generación de números aleatorios distribuidos no uniformemente utilizando inversión numérica de la función de distribución acumulada (FDC).",
    points: [
      "Integración trapezoidal de la FDP (PDF)",
      "Inversión numérica vía indexación de arreglos",
      "Excelente acuerdo con las FDP analíticas",
      "Exponente de distribución totalmente configurable"
    ]
  },

  integration: {
    img: "../../img/projects/MC-integration.png",
    title: "Integración de Monte Carlo",
    desc: "Integración de Monte Carlo con muestreo uniforme, con análisis detallado de error y comparación teórica.",
    points: [
      "Escalamiento de error absoluto y relativo",
      "Convergencia σ ∝ 1/√N verificada",
      "Comparación con integrales analíticas",
      "Interpretación estadística del error de integración"
    ]
  }
};