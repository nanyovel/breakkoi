export const privilegios = [
  // ************************* ADMINISTRATIVO *************************
  {
    code: "editarUsuarios",
    descripcion: "Modificar datos de usuarios.",
    valor: false,
    modulo: "admin",
  },
  {
    code: "singleDashboard",
    descripcion: "Acceso al dashboard.",
    valor: false,
    modulo: "admin",
  },
  // ************************* FLETE *************************
  {
    code: "viewConfigFlete",
    descripcion:
      "Acceso a la ruta para visualizar la configuracion de formula y montos de fletes.",
    valor: false,
    modulo: "FLETE",
  },
  {
    code: "editConfigFlete",
    descripcion:
      "Capacidad para modificar montos de cada unidad vehicular de la calculadora de fletes.",
    valor: false,
    modulo: "FLETE",
  },
  // ************************* IMS *************************

  {
    code: "createDocsIMS",
    descripcion: "Capacidad para crear Bill Of Lading y ordenes de compra",
    valor: false,
    modulo: "IMS",
  },
  // CICLO
  {
    code: "blIngresarPaisIMS",
    descripcion:
      "Capacidad para indicar que la embarcacion de un Bill Of Lading llego al pais.",
    valor: false,
    modulo: "IMS",
  },
  {
    code: "planificacionPuertoIMS",
    descripcion: "Capacidad crear la planificacion en puerto.",
    valor: false,
    modulo: "IMS",
  },
  {
    code: "llegadaAlmacenIMS",
    descripcion: "Capacidad para indicar que un contenedor llego almacen.",
    valor: false,
    modulo: "IMS",
  },
  {
    code: "docEnviadaCompraIMS",
    descripcion:
      "Capacidad para indicar que la documentacion generada en almacen fue enviada al departamento de compras.",
    valor: false,
    modulo: "IMS",
  },
  {
    code: "docEnSistemaIMS",
    descripcion: "Capacidad para indicar mercancia esta ingresada al sistema.",
    valor: false,
    modulo: "IMS",
  },
  {
    code: "generalReportsIMS",
    descripcion: "Capacidad para generar reportes.",
    valor: false,
    modulo: "IMS",
  },

  // ************************* TMS *************************
  // *****Tablas Main****
  // Solicitudes
  {
    code: "viewAllRequestTMS",
    descripcion: "Capacidad para visualizar todas las solicitudes activas.",
    valor: false,
    modulo: "TMS",
  },
  // Choferes
  {
    code: "sortDriver",
    descripcion:
      "Capacidad para organizar choferes; poder colocar quienes estan disponible y asignar orden de llegada",
    valor: false,
    modulo: "TMS",
  },
  // Reportes
  {
    code: "generalReportsTMS",
    descripcion: "Capacidad para generar reportes.",
    valor: false,
    modulo: "TMS",
  },
  // ADD
  // {
  //   code: "createRequestTMS",
  //   descripcion: "Capacidad para crear solicitudes de transporte.",
  //   valor: false,
  //   modulo: "TMS",
  // },
  {
    code: "createDriverTMS",
    descripcion: "Capacidad para crear nuevos choferes.",
    valor: false,
    modulo: "TMS",
  },
  {
    code: "createProyectTMS",
    descripcion: "Capacidad para crear nuevo proyecto.",
    valor: false,
    modulo: "TMS",
  },
  // Detalle Chofer
  {
    code: "editDriverTMS",
    descripcion: "Capacidad para editar datos a choferes.",
    valor: false,
    modulo: "TMS",
  },
  {
    code: "eliminarDriverTMS",
    descripcion: "Capacidad para eliminar choferes.",
    valor: false,
    modulo: "TMS",
  },
  // Detalle Proyectos

  {
    code: "editarProyectTMS",
    descripcion: "Capacidad para editar proyectos",
    valor: false,
    modulo: "TMS",
  },
  {
    code: "closeProyectTMS",
    descripcion: "Capacidad para editar proyectos",
    valor: false,
    modulo: "TMS",
  },
  {
    code: "openProyectTMS",
    descripcion: "Capacidad para editar proyectos",
    valor: false,
    modulo: "TMS",
  },
  // PAGOS
  {
    code: "accessPagosTMS",
    descripcion: "Acceso a la ruta /pagos",
    valor: false,
    modulo: "TMS",
  },
  {
    code: "approvedPagosLogisticaTMS",
    descripcion: "Capacidad para ejecutar la aprobacion de logistica a pagos.",
    valor: false,
    modulo: "TMS",
  },
  {
    code: "approvedPagosSolicitanteTMS",
    descripcion: "Capacidad para ejecutar la aprobacion de solicitante.",
    valor: false,
    modulo: "TMS",
  },
  {
    code: "approvedPagosFinanzasTMS",
    descripcion: "Capacidad para ejecutar aprobacion de finanzas.",
    valor: false,
    modulo: "TMS",
  },
  {
    code: "exportsFinzasRechzTMS",
    descripcion:
      "Capacidad para exportar documentos de las pestañas finanzas y rechazados en pagina de pagos del TMS.",
    valor: false,
    modulo: "TMS",
  },

  // Estados request
  {
    code: "planificatedRequestTMS",
    descripcion: "Capacidad para planificar solicitud de transporte.",
    valor: false,
    modulo: "TMS",
  },
  {
    code: "runRequestTMS",
    descripcion: "Capacidad para ejecutar solicitud de transporte.",
    valor: false,
    modulo: "TMS",
  },
  {
    code: "terminateRequestTMS",
    descripcion: "Capacidad para concluir solicitud de transporte.",
    valor: false,
    modulo: "TMS",
  },
  {
    code: "annularRequestTMS",
    descripcion: "Capacidad para anular solicitud de transporte.",
    valor: false,
    modulo: "TMS",
  },
  // Acciones req
  {
    code: "changeDriverTMS",
    descripcion:
      "Capacidad para cambiar vehiculo seleccionado de una solicitud de transporte.",
    valor: false,
    modulo: "TMS",
  },
  {
    code: "addMontoTMS",
    descripcion: "Capacidad para agregar nuevo monto a solicitud.",
    valor: false,
    modulo: "TMS",
  },
  {
    code: "modifiedRelationTMS",
    descripcion: "Capacidad para visualizar relacion de solicitud.",
    valor: false,
    modulo: "TMS",
  },
  {
    code: "addCommetsReqTMS",
    descripcion: "Capacidad para agregar y visualizar comentarios.",
    valor: false,
    modulo: "TMS",
  },

  // ALTO NIVEL
  {
    code: "defaultStateRequestTMS",
    descripcion:
      "Capacidad para regresar una solicitud a sus estado de fabrica que es | A LA ESPERA... |.",
    valor: false,
    modulo: "TMS",
  },
  {
    code: "defaultPagosTMS",
    descripcion:
      "Capacidad para regresar la propiedad pagos de una solicitud a su valor de fabrica",
    valor: false,
    modulo: "TMS",
  },
  {
    code: "editRequestTMS",
    descripcion: "Capacidad para edicion de request.",
    valor: false,
    modulo: "TMS",
  },
];

export const roles = [
  {
    codigo: "admin",
    nombre: "Admin",
    privilegios: ["editarUsuarios"],
  },
  {
    codigo: "encargadaImportaciones",
    nombre: "Encargado de importaciones",
    privilegios: [
      "createDocsIMS",
      "blIngresarPaisIMS",
      "planificacionPuertoIMS",
      "docEnSistemaIMS",
      "generalReportsIMS",
    ],
  },
  {
    codigo: "encargadoAlmacen",
    nombre: "Encargado de almacen",
    privilegios: [
      "createDocsIMS",
      "llegadaAlmacenIMS",
      "docEnviadaCompraIMS",
      "generalReportsIMS",
    ],
  },
  {
    codigo: "encargadoLogistica",
    nombre: "Encargado de logistica",
    privilegios: [
      "viewAllRequestTMS",
      "generalReportsTMS",
      "createRequestTMS",
      "createDriverTMS",
      "editDriverTMS",
      "eliminarDriverTMS",
      "accessPagosTMS",
      "approvedPagosLogisticaTMS",
      "avanzarEstadosRequestTMS",
    ],
  },
  {
    nombre: "Empleado comercial",
    codigo: "empleadoComercial",
    privilegios: ["createRequestTMS", "createProyectTMS", "editarProyectTMS"],
  },
];
