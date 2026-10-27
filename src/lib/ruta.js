// La web vive colgando de un subdirectorio en GitHub Pages
// (ekinoxhealth.github.io/web-haia/), así que ninguna ruta interna puede
// empezar por «/» a secas. Todas pasan por aquí.
//
// Si algún día la web va en su propio dominio, basta con quitar «base» de
// astro.config.mjs: BASE_URL pasa a ser «/» y esta función deja de añadir nada.
const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

export const r = (p) => base + p;
