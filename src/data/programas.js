// ============================================================
// Los programas de Haia.
// Contenido sacado del Cerebro: catalogo-de-oferta (líneas y entregables),
// fichas-producto (estructura de cada ficha), brand-book-haia (símbolos y
// significados) y Programas_Index (qué hace cada aplicación de verdad).
//
// `prefijo` + glifo + `sufijo` componen el wordmark: la letra sustituida por
// su símbolo, a la altura de la mayúscula. ARIA todavía no tiene símbolo
// propio (decisión abierta), así que va sin glifo.
// ============================================================

export const programas = [
  {
    slug: 'trova',
    nombre: 'TROVA',
    prefijo: 'TR',
    sufijo: 'VA',
    glifo: 'trova',
    contratacion: 'Servicio operado por Haia',
    linea: 'conciliacion',
    lema: 'Conciliación diaria con las aseguradoras.',
    resumenCorto: 'Cada mañana sabes si ayer se facturó todo lo que se trabajó.',
    significado:
      'La O es el punto de encuentro y la línea que la atraviesa, el cruce de dos datos: eso es conciliar.',
    descripcion: [
      'Cada día comprobamos que todo lo que se facturó ayer a las aseguradoras está en tu programa de gestión, y al revés. Lo que falta, lo que sobra y lo que no cuadra sale señalado.',
      'No es un informe que hay que ir a buscar: llega cada mañana, con el justificante de cada caso, para que administración sepa en cinco minutos si el día anterior quedó limpio.',
    ],
    quien: 'Administración, cada mañana, antes de empezar el día.',
    necesita:
      'Los listados que ya te envían las aseguradoras y la exportación diaria de tu programa de gestión.',
    entrega:
      'El aviso diario de descuadres: lo facturado ayer que no está en el listado de la aseguradora, o al revés, con el enlace al documento original.',
    encaja: 'Kriba cierra el mes con lo que Trova vigila cada día, y ArIA clasifica cada línea.',
    claves: [
      { icono: 'alerta', titulo: 'Detección automática de descuadres', texto: 'Lo facturado ayer que no está, o al revés.' },
      { icono: 'documento', titulo: 'Con justificante', texto: 'Enlace al documento original de cada caso.' },
      { icono: 'reloj', titulo: 'Cada mañana', texto: 'En tu bandeja de entrada, sin pedirlo.' },
    ],
  },
  {
    slug: 'kriba',
    nombre: 'KRIBA',
    prefijo: 'KR',
    sufijo: 'BA',
    glifo: 'kriba',
    contratacion: 'Servicio operado por Haia',
    linea: 'conciliacion',
    lema: 'Cierre mensual y rectificaciones.',
    resumenCorto: 'Cruza lo que pagó la aseguradora con lo que se pagó al médico.',
    significado:
      'La I se convierte en una columna de puntos: el filtro que separa lo que está bien cobrado de lo que no.',
    descripcion: [
      'Cada mes cruzamos las liquidaciones de cada aseguradora con lo que se facturó y con lo que se pagó a cada médico. De ahí salen los rechazos, los impagos, los importes distintos del contratado y los baremos mal aplicados.',
      'El resultado no es una lista de incidencias: son dos informes accionables, uno para reclamar a la aseguradora y otro para rectificar con el médico.',
    ],
    quien: 'Administración y dirección médica, en el cierre de cada mes.',
    necesita:
      'Las liquidaciones que te manda cada aseguradora y la liquidación que haces a tus médicos.',
    entrega:
      'El informe de reclamación por aseguradora (qué reclamar, por qué y con qué justificante) y el informe de rectificaciones a médicos (qué se pagó de más o de menos, con detalle).',
    encaja: 'Trova vigila el día a día; Vizor enseña el resultado acumulado.',
    claves: [
      { icono: 'balanza', titulo: 'Comparador de baremos', texto: 'Importes pagados distintos del contratado.' },
      { icono: 'personas', titulo: 'Rectificaciones al médico', texto: 'Lo que se pagó de más o de menos, con detalle.' },
      { icono: 'calendario', titulo: 'Cada cierre', texto: 'Con el mes liquidado, sin esperar al trimestre.' },
    ],
  },
  {
    slug: 'aria',
    nombre: 'ARIA',
    prefijo: 'ARIA',
    sufijo: '',
    glifo: null,
    contratacion: 'Dentro de Trova y Kriba',
    linea: 'conciliacion',
    lema: 'El motor que audita y aprende.',
    resumenCorto: 'Clasifica cada línea y aprende las nomenclaturas de cada aseguradora.',
    significado: null,
    descripcion: [
      'Cada aseguradora llama a las cosas a su manera. ArIA clasifica el cien por cien de las líneas, cruza las nomenclaturas y propone la equivalencia cuando dos nombres distintos son el mismo acto.',
      'Cada equivalencia que se valida se queda aprendida, así que el trabajo de clasificar baja mes a mes. Y cuando una tarifa cambia, avisa.',
    ],
    quien: 'No se usa: trabaja por debajo del servicio, dentro de Trova y de Kriba.',
    necesita: 'Nada aparte de lo que ya entregas para el servicio.',
    entrega:
      'Líneas clasificadas, equivalencias propuestas para validar y avisos cuando cambia una tarifa.',
    encaja: 'Es el motor de Trova y de Kriba; no se contrata por separado.',
    claves: [
      { icono: 'cerebro', titulo: 'Clasifica el 100 % de las líneas', texto: 'Ninguna queda sin mirar.' },
      { icono: 'enlace', titulo: 'Cruza nomenclaturas', texto: 'Propone la equivalencia; la valida una persona.' },
      { icono: 'campana', titulo: 'Avisa de cambios de tarifa', texto: 'Cuando el importe deja de ser el de siempre.' },
    ],
  },
  {
    slug: 'vizor',
    nombre: 'VIZOR',
    prefijo: 'VIZ',
    sufijo: 'R',
    glifo: 'vizor',
    contratacion: 'Módulo alojado',
    linea: 'control',
    lema: 'El panel del gerente.',
    resumenCorto: 'Lo que hay que mirar, sin abrir nada más.',
    significado:
      'La O se convierte en una diana: la visión global y el punto central, que es la información que deja decidir.',
    descripcion: [
      'Facturación, cobros, lo que queda por reclamar y la tendencia, en una sola vista. Está pensado para la pregunta que se hace un gerente al abrir el ordenador: ¿cómo vamos?',
      'Si ya tienes el servicio de conciliación, Vizor se alimenta solo de Trova y de Kriba: no hay que meter nada a mano.',
    ],
    quien: 'Gerencia y dirección, cuando quieran.',
    necesita:
      'La exportación de tu programa de gestión. Con el servicio de conciliación contratado, se alimenta solo.',
    entrega: 'Un cuadro de mando con los indicadores del centro, al día.',
    encaja: 'Bebe de Trova y de Kriba. Es la ampliación natural del servicio.',
    claves: [
      { icono: 'grafico', titulo: 'Visión completa', texto: 'Facturación, cobros, reclamaciones y tendencia.' },
      { icono: 'diana', titulo: 'Indicadores clave', texto: 'Sin abrir otros programas.' },
      { icono: 'refresco', titulo: 'Siempre al día', texto: 'Con los datos de Trova y Kriba.' },
    ],
  },
  {
    slug: 'aula',
    nombre: 'AULA',
    prefijo: 'A',
    sufijo: 'LA',
    glifo: 'aula',
    contratacion: 'Módulo alojado',
    linea: 'control',
    lema: 'El cuadrante de consultas y salas.',
    resumenCorto: 'Qué médico, en qué consulta, a qué hora y qué día.',
    significado:
      'La U se abre hacia arriba: un espacio, una sala, un punto de encuentro.',
    descripcion: [
      'El cuadrante médico del centro: quién ocupa cada consulta, a qué hora y qué día. Deja de repartirse de memoria y en una hoja de cálculo que solo entiende quien la hizo.',
      'Con el cuadrante puesto, la ocupación de cada espacio deja de ser una intuición y pasa a ser un dato.',
    ],
    quien: 'Recepción y gerencia, cada día.',
    necesita: 'Las consultas y salas del centro, y el reparto de médicos por franja.',
    entrega: 'El cuadrante publicado y la ocupación por consulta y por franja.',
    encaja: 'Tempo lleva los turnos del personal; Aula, los espacios.',
    claves: [
      { icono: 'cuadricula', titulo: 'Médico, sala, hora y día', texto: 'El cuadrante entero en una pantalla.' },
      { icono: 'grafico', titulo: 'Ocupación real', texto: 'Por consulta y por franja horaria.' },
      { icono: 'personas', titulo: 'Admin y lectura', texto: 'Unos editan, el resto consulta.' },
    ],
  },
  {
    slug: 'tempo',
    nombre: 'TEMPO',
    prefijo: 'T',
    sufijo: 'MPO',
    glifo: 'tempo',
    contratacion: 'Módulo alojado',
    linea: 'control',
    lema: 'Los turnos del personal.',
    resumenCorto: 'El cuadrante del equipo, sin la hoja de cálculo de siempre.',
    significado:
      'La E se construye con tres líneas horizontales: las franjas de tiempo, la planificación y la estructura.',
    descripcion: [
      'Los turnos del personal del centro: quién entra, cuándo y en qué puesto. Una app para quien lo edita y una vista de solo lectura para el resto del equipo.',
      'El objetivo es que el cuadrante deje de vivir en un Excel que se manda por correo y que nadie sabe si está actualizado.',
    ],
    quien: 'Quien lleva el cuadrante lo edita; el equipo lo consulta.',
    necesita: 'El equipo, sus puestos y sus reglas de turno.',
    entrega: 'El cuadrante publicado, siempre en su sitio y siempre el mismo para todos.',
    encaja: 'Aula lleva los espacios; Tempo, las personas.',
    claves: [
      { icono: 'reloj', titulo: 'Turnos y rotaciones', texto: 'Quién entra, cuándo y en qué puesto.' },
      { icono: 'personas', titulo: 'Editar y consultar', texto: 'Una app para cada cosa.' },
      { icono: 'refresco', titulo: 'Una sola versión', texto: 'Se acabó el Excel por correo.' },
    ],
  },
  {
    slug: 'folia',
    nombre: 'FOLIA',
    prefijo: 'F',
    sufijo: 'LIA',
    glifo: 'folia',
    contratacion: 'Módulo alojado',
    linea: 'control',
    lema: 'La documentación de los profesionales.',
    resumenCorto: 'Los documentos de cada médico y lo que caduca.',
    significado:
      'El círculo es una unidad de información y la línea que lo divide, el orden: las capas de un expediente.',
    descripcion: [
      'Los documentos de cada profesional del centro y, sobre todo, sus vencimientos: la responsabilidad civil que caduca y nadie mira hasta que hace falta.',
      'El expediente deja de estar repartido entre una carpeta compartida, un correo y la memoria de alguien.',
    ],
    quien: 'Administración y dirección médica.',
    necesita: 'Los documentos de cada profesional y sus fechas.',
    entrega: 'El expediente de cada profesional y el aviso antes de que algo caduque.',
    encaja: 'Es independiente: no necesita el servicio de conciliación.',
    claves: [
      { icono: 'documento', titulo: 'Expediente por profesional', texto: 'Todo en un sitio, no en tres.' },
      { icono: 'campana', titulo: 'Avisos de vencimiento', texto: 'Antes de que caduque, no después.' },
      { icono: 'escudo', titulo: 'Responsabilidad civil', texto: 'El documento que siempre falta cuando se pide.' },
    ],
  },
];

export const porSlug = (slug) => programas.find((p) => p.slug === slug);

// Los cinco entregables del servicio de conciliación (catalogo-de-oferta, § 2).
export const entregables = [
  {
    icono: 'alerta',
    titulo: 'Aviso diario de descuadres',
    texto: 'Lo facturado ayer que no está en el listado de la aseguradora, o al revés.',
    cuando: 'Cada mañana',
    quien: 'Administración',
  },
  {
    icono: 'documento',
    titulo: 'Informe de reclamación por aseguradora',
    texto: 'Qué reclamar, por qué y con qué justificante.',
    cuando: 'Cada mes',
    quien: 'Administración y gerencia',
  },
  {
    icono: 'personas',
    titulo: 'Informe de rectificaciones a médicos',
    texto: 'Qué se pagó de más o de menos, con el detalle de cada acto.',
    cuando: 'Cada mes',
    quien: 'Dirección médica',
  },
  {
    icono: 'balanza',
    titulo: 'Alertas de baremo',
    texto: 'Importes pagados distintos del contratado.',
    cuando: 'Cuando ocurre',
    quien: 'Gerencia',
  },
  {
    icono: 'grafico',
    titulo: 'Resumen mensual',
    texto: 'Cuánto se facturó, cuánto se cobró, cuánto se reclama y la tendencia.',
    cuando: 'Cada mes',
    quien: 'Gerencia',
  },
];

// Las tres líneas de servicio (catalogo-de-oferta, § 1).
export const lineas = [
  {
    slug: 'conciliacion',
    nombre: 'Conciliación como servicio',
    etiqueta: 'Línea A',
    titular: 'Trova, Kriba y ArIA, operados por nosotros.',
    entradilla:
      'Nos entregas los listados de las aseguradoras y la exportación de tu programa de gestión. Te devolvemos el trabajo hecho. Sin instalar nada, sin integración y sin formar a nadie.',
    modo: 'Servicio gestionado: datos dentro, resultados fuera.',
  },
  {
    slug: 'control',
    nombre: 'Control del centro',
    etiqueta: 'Línea B',
    titular: 'Vizor, Aula, Tempo y Folia, alojados por nosotros.',
    entradilla:
      'Las usa tu propio equipo, cada día. Nosotros las alojamos, las mantenemos y damos soporte; tú no instalas ni administras nada.',
    modo: 'Software alojado, no servicio operado. Hay una formación mínima.',
  },
  {
    slug: 'medida',
    nombre: 'Soluciones a medida',
    etiqueta: 'Línea D',
    titular: 'Lo que tu centro necesita y la suite no cubre.',
    entradilla:
      'Webs y aplicaciones para pacientes, programas especializados y automatizaciones. Por encargo: primero miramos si es viable, después presupuesto y entrega por fases.',
    modo: 'Por encargo, con alcance y precio cerrados antes de empezar.',
  },
];
