# Web de Haia · una página

La web pública de Haia: **una sola página**, HTML y CSS escritos a mano, sin gestor de contenidos,
sin JavaScript y sin ninguna petición a servidores de terceros. El texto sale del guion aprobado en
el Cerebro (`01_Ekinox/Haia/1_Indice/presencia-digital.md`, punto 3) y la identidad, del brand book
(`01_Ekinox/Haia/4_Diseno/brand-book-haia.md`).

## Cómo se abre
Doble clic en `abrir-web-haia.bat`, o desde la app:

    py -m http.server 8810      → http://localhost:8810

## Qué hay aquí
- `index.html` · la página entera. Un archivo.
- `estilos.css` · toda la identidad: paleta, tipografía, retícula y la línea vertical.
- `fuentes/` · Inter en tres pesos (300, 400, 500), servida desde la propia web.
- `img/` · el logotipo y el símbolo de Haia, copiados del Cerebro. Se usan como máscara CSS,
  por eso un mismo archivo vale en blanco sobre azul y en azul sobre blanco.

## Las decisiones de diseño
- **Una sola tinta.** Azul Haia `#0E2A3B` sobre blanco y sobre Gris Nube; el acento sobre fondo
  oscuro es Azul Haia Claro `#A9CBE0`, nunca sobre fondo claro. Es la regla del brand book (§ 5).
- **La línea vertical** nace bajo el logotipo de la portada y baja sin cortarse hasta el pie, con
  el isotipo real marcando cada sección. Es el separador del brand book (§ 10), no un adorno.
- **Sin fotografía.** El brand book pide clínicas contemporáneas con luz natural; hasta que existan
  esas fotos, el banco de imágenes rompería el resto.
- **Sin tarjetas con icono.** Los programas se presentan por su propio wordmark, con el símbolo
  sustituyendo a la letra a la altura de la mayúscula (§ 12).
- **Sin cookies ni analítica.** La web no hace una sola petición fuera de su propio dominio: por eso
  la tipografía va aquí dentro y no enlazada a Google Fonts.

## Lo que falta antes de publicar
- [ ] **Dominio.** `hola@dominio` está marcado como pendiente en el pie. Lo fija Marcas y dominios
      (doc 19). Al decidirlo, buscar `dominio` en `index.html`.
- [ ] **Aviso legal, privacidad y condiciones generales** (docs 50 y 39): los cuatro enlaces del pie
      van a `#` y llevan el atributo `data-pendiente`.
- [ ] **Política de datos**, enlazada en la sección «Dónde están tus datos».
- [ ] **LinkedIn**, cuando exista el perfil de empresa.
- [ ] **Catalán**: decisión abierta en el documento de presencia.
- [ ] **Alojamiento** estático con HTTPS, en la UE si hay opción.

## Lo que la web no lleva, a propósito
Cifras de resultados, porcentajes, precios concretos, el nombre de la clínica de origen, logotipos
de aseguradoras, fotos de médicos, formularios y banner de cookies. Está todo en
`presencia-digital.md`, apartado «Lo que la web no lleva».
