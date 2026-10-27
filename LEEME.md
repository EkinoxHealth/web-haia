# Web de Haia

La web pública de Haia (Ekinox Health, S.L.). Dieciséis páginas estáticas hechas con **Astro**,
sin gestor de contenidos y **sin una sola petición a servidores de terceros**.

## Cómo se abre

Doble clic en `abrir-web-haia.bat`, o:

    npm run dev      → http://localhost:8810   (desarrollo, recarga sola)
    npm run build    → genera el sitio en dist/
    npm run preview  → http://localhost:8811   (enseña dist/ tal cual se publicaría)

## Qué hay aquí

- `src/pages/` · una carpeta por sección. `[slug].astro` genera una página por programa,
  por línea de servicio y por documento legal.
- `src/data/programas.js` · **la única fuente** de los siete programas, los cinco entregables y
  las tres líneas de servicio. Para cambiar un texto de producto, se cambia aquí.
- `src/data/legales.js` · qué llevará cada página legal.
- `src/components/` · cabecera, pie, iconos, wordmarks y el marcador de lo que falta.
- `src/styles/haia.css` · todo el sistema de diseño en un archivo.
- `public/fuentes/` · Inter en cuatro pesos, servida desde la propia web.
- `public/img/` · logotipo y símbolo de Haia, copiados del Cerebro.
- `_anterior/` · el primer intento, descartado. Se guarda, no se borra.

## Las páginas

| Página | Qué es |
|---|---|
| `/` | La home: problema, solución, entregables, programas, piloto, precio, datos y preguntas |
| `/programas/` | Los siete, agrupados por línea |
| `/programas/<programa>/` | Ficha completa: qué hace, para quién, qué necesita, qué entrega |
| `/soluciones/conciliacion/` · `/control/` · `/medida/` | Las tres líneas de oferta |
| `/legal/…` | Aviso legal, privacidad, condiciones y política de datos |

## Decisiones que no son negociables

- **Una sola tinta.** Azul Haia `#0E2A3B`; el acento `#A9CBE0` **solo** sobre fondo oscuro.
- **Sin sombras ni degradados.** Lo prohíbe el brand book: las tarjetas se separan con borde.
- **Iconos dibujados aquí** (`src/components/Icono.astro`), lineales, trazo 1,5 px. Sin librerías.
- **Los wordmarks llevan su símbolo**: la O atravesada de Trova, la columna de puntos de Kriba,
  la diana de Vizor, la U abierta de Aula, las tres líneas de Tempo, la O dividida de Folia.
- **Sin cookies, sin analítica y sin CDN.** Comprobado: `dist/` no contiene ni una URL externa.
- **No hay página de precios.** Solo el mecanismo, en «Cómo cobramos». La cifra va en la propuesta.

## Lo que falta antes de publicar

- [ ] **Dominio.** `hola@dominio` sale marcado en el pie y en contacto. Buscar `dominio` en el código.
- [ ] **Fotos reales.** Dos marcadores: la cabecera y la sección «de dónde venimos».
- [ ] **Capturas de producto.** Un marcador por programa y uno por línea de servicio.
- [ ] **Textos legales** con NIF y datos registrales, repasados por el abogado.
- [ ] **Preguntas frecuentes:** están en borrador y marcadas como pendientes de aprobar.
- [ ] **Color de cada programa** en su wordmark (el brand book no fija los seis valores).
- [ ] **ArIA**: decidir si tiene símbolo propio. Ahora va sin él.
- [ ] **Catalán**: decisión abierta.
- [ ] **Alojamiento** estático con HTTPS, en la UE si hay opción.

Los marcadores se ven a propósito: mientras estén en pantalla, esa pieza no está terminada.
