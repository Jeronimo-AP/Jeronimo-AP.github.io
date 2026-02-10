export const cataleyaFeatures = {
  landing: {
    title: "Landing Page",
    desc:
      "Una landing clara y centrada en la marca, que presenta productos de cuero seleccionados.",
    img: "../../img/projects/cataleya_shop.png",
    points: [
      "Jerarquía visual centrada en la marca",
      "Productos destacados controlados desde Google Sheets",
      "Diseño responsive mobile-first",
      "Carga rápida con imágenes WebP optimizadas"
    ]
  },

  catalog: {
    title: "Catálogo de Productos",
    desc:
      "Catálogo de productos generado automáticamente a partir de una fuente de datos en Google Sheets.",
    img: "../../img/projects/cataleya_catalog.png",
    points: [
      "Productos agrupados por claves de producto y variante",
      "Actualización dinámica de precios y disponibilidad",
      "Sin necesidad de redeploy para cambios de contenido",
      "Lógica determinista para productos destacados"
    ]
  },

  product: {
    title: "Vista de Producto",
    desc:
      "Vistas individuales de producto con selección de variantes y colores generadas en tiempo de ejecución.",
    img: "../../img/projects/cataleya_product.png",
    points: [
      "Renderizado consciente de variantes",
      "Selección dinámica de colores",
      "Imágenes optimizadas en tamaño completo y miniaturas",
      "Diseñado para claridad, no para fricción de compra"
    ]
  },

  system: {
    title: "Sistema Dinámico de Productos",
    desc:
      "Un CMS ligero basado en Google Sheets, pensado para actualizaciones de contenido sin conocimientos técnicos.",
    points: [
      "Google Sheets como CMS headless",
      "Parseo de CSV en tiempo de ejecución",
      "Cacheo con LocalStorage y expiración",
      "Fallback elegante a datos actualizados"
    ]
  },

  tech: {
    title: "Tecnología y Diseño",
    desc:
      "Implementación sin frameworks, enfocada en rendimiento y adaptada a pequeños emprendimientos.",
    points: [
      "HTML5 semántico",
      "CSS Grid y Flexbox",
      "JavaScript Vanilla (modular)",
      "Despliegue en GitHub Pages"
    ]
  }
};
