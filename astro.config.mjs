// @ts-check
import { defineConfig } from 'astro/config';

// Sitio estático puro. Sin integraciones, sin analítica, sin peticiones a terceros:
// la tipografía va autoalojada en public/fuentes y los SVG en public/img.
export default defineConfig({
  // ⚠ PENDIENTE: el dominio definitivo (haia.app o haiahealth.es) lo fija Marcas y dominios.
  // Alojada de momento en GitHub Pages, que la cuelga de un subdirectorio. Por eso
  // existe src/lib/ruta.js: todas las rutas internas pasan por ahi. El dia que haya
  // dominio propio, se quita 'base' y se cambia 'site'.
  site: 'https://ekinoxhealth.github.io',
  base: '/web-haia',
  build: {
    format: 'directory',
  },
  devToolbar: {
    enabled: false,
  },
});
