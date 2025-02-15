import {
  IconoAireAcon,
  IconoBalcon,
  IconoBBQ,
  IconoBlackOut,
  IconoBotiquin,
  IconoCafetera,
  IconoCalendario,
  IconoCama,
  IconoCarro,
  IconoCCTV,
  IconoCloset,
  IconoCobija,
  IconoCocina,
  IconoCuchara,
  IconoCupHot,
  IconoCupWine,
  IconoDesk,
  IconoDoorClose,
  IconoDucha,
  IconoEsq,
  IconoEstufa,
  IconoExtintor,
  IconoFlower,
  IconoGel,
  IconoGrid,
  IconoHorno,
  IconoHumo,
  IconoHumo2,
  IconoJabon,
  IconoJacucci,
  IconoKey,
  IconoLicuadora,
  IconoLlaves,
  IconoMaletas,
  IconoMicroWave,
  IconoNevera,
  IconoOlla,
  IconoPercha,
  IconoPiscina,
  IconoPlancha,
  IconoProductClean,
  IconoSecadora,
  IconoSecadoraPelo,
  IconoShampoo,
  IconoSinEscalera,
  IconoSnow,
  IconoSonido,
  IconoSpray,
  IconoTaza,
  IconoTelevision,
  IconoToilet,
  IconoWashMachine,
  IconoWifi,
} from "../components/ConjuntoIconos";

import ImgPeriquera from "./../../public/icon/periquera.png";
import ImgTostadora from "./../../public/icon/tostadora.png";
import ImgArrocera from "./../../public/icon/arrocera.png";
import ImgComedor from "./../../public/icon/comedor.png";
import ImgLavanderia from "./../../public/icon/lavanderia.png";
import ImgTumbona from "./../../public/icon/tumbona.png";

const ListaAmenidades = [
  {
    categoria: "Baño",
    icono: IconoSecadoraPelo,
    texto: "Secadora de pelo",
    code: "secadoraPelo",
  },
  {
    categoria: "Baño",
    icono: IconoProductClean,
    texto: "Productos de limpieza",
    code: "productoLimpieza",
  },
  {
    categoria: "Baño",
    icono: IconoShampoo,
    texto: "Shampoo",
    code: "shampo",
  },
  {
    categoria: "Baño",
    icono: IconoShampoo,
    texto: "Acondicionador",
    code: "acondicionador",
  },
  {
    categoria: "Baño",
    icono: IconoJabon,
    texto: "Jabón corporal",
    code: "jabonLiquido",
  },
  {
    categoria: "Baño",
    icono: IconoToilet,
    texto: "Bidé",
    code: "bide",
  },
  {
    categoria: "Baño",
    icono: IconoDucha,
    texto: "Regadera exterior",
    code: "ducha",
  },
  {
    categoria: "Baño",
    icono: IconoJacucci,
    texto: "Agua caliente",
    code: "aguaCaliente",
    resumida: true,
  },
  {
    categoria: "Baño",
    icono: IconoGel,
    texto: "gelBannio",
  },
  // -----hab
  {
    categoria: "Habitacion y lavanderia",
    icono: IconoWashMachine,
    texto: "Lavadora De pago",
    code: "lavaoraPago",
    resumida: true,
  },
  {
    categoria: "Habitacion y lavanderia",
    icono: IconoPercha,
    texto: "Ganchos",
    code: "percha",
  },
  {
    categoria: "Habitacion y lavanderia",
    icono: IconoSecadora,
    texto: "Secadora",
    code: "secadora",
  },
  {
    categoria: "Habitacion y lavanderia",
    icono: IconoCama,
    texto: "Ropa de cama",
    code: "ropaCama",
  },
  {
    categoria: "Habitacion y lavanderia",
    icono: IconoCobija,
    texto: "Almohadas y cobijas adicionales",
    code: "almohadasyCobijas",
  },
  {
    categoria: "Habitacion y lavanderia",
    icono: IconoBlackOut,
    texto: "Persianas o cortinas opacas",
    code: "persianasBlackOut",
    resumida: true,
  },
  {
    categoria: "Habitacion y lavanderia",
    icono: IconoPlancha,
    texto: "Plancha",
    code: "plancha",
  },
  {
    categoria: "Habitacion y lavanderia",
    icono: IconoPercha,
    texto: "Tendedero para ropa",
    code: "tendedero",
  },
  {
    categoria: "Habitacion y lavanderia",
    icono: IconoCloset,
    texto: "Espacio para guardar ropa",
    code: "closet",
  },
  // Entretenimiento
  {
    categoria: "Entretenimiento",
    icono: IconoTelevision,
    code: "television",
    resumida: true,
    texto:
      'Televisión HD con pantalla de 175" y Netflix, Video de Amazon Prime, Apple TV, Disney+, Hulu',
  },
  {
    categoria: "Entretenimiento",
    icono: IconoSonido,
    resumida: true,
    texto: "Sistema de sonido",
    code: "sistemaSonido",
  },
  // Para la familia
  {
    categoria: "Para la familia",
    iconoImg: true,
    icono: ImgPeriquera,
    texto: "Periquera",
    code: "periquera",
  },
  {
    categoria: "Para la familia",
    icono: IconoCuchara,
    texto: "Platos y cubiertos para niños",
    code: "cuchara",
  },
  {
    categoria: "Para la familia",
    icono: IconoGrid,
    texto: "Seguros para ventanas",
    code: "seguroVentana",
  },
  {
    categoria: "Para la familia",
    icono: IconoEsq,
    texto: "Protectores para esquinas de mesa",
    code: "proteccionEsquinaMesas",
  },
  // calefaccion y refrigeracion
  {
    categoria: "Climatizacion",
    icono: IconoSnow,
    resumida: true,
    texto: "Sistema de aire acondicionado sin conductos tipo split",
    code: "airesAcondicionado",
  },
  // Seguridad
  {
    categoria: "Seguridad",
    icono: IconoCCTV,
    resumida: true,
    texto: "Cámaras de seguridad exteriores en la propiedad",
    code: "cctv",
  },
  {
    categoria: "Seguridad",
    icono: IconoHumo,
    texto: "Detector de humo",
    code: "detectorHumo",
  },
  {
    categoria: "Seguridad",
    icono: IconoHumo2,
    texto: "Detector de monóxido de carbono",
    code: "detectorMonoxidoCarbono",
  },
  {
    categoria: "Seguridad",
    icono: IconoExtintor,
    texto: "Extintor de incendios",
    code: "extintor",
  },
  {
    categoria: "Seguridad",
    icono: IconoBotiquin,
    texto: "Botiquín",
    code: "botiquin",
  },
  // Internet y oficina
  {
    categoria: "Internet y oficina",
    icono: IconoWifi,
    code: "wifi",
    texto: "Wifi",
  },
  {
    categoria: "Internet y oficina",
    icono: IconoDesk,
    resumida: true,
    texto: "Area para trabajar",
    code: "escritorio",
  },
  // Cocina y comedor
  {
    categoria: "Cocina y comedor",
    icono: IconoCocina,
    texto: "Cocina",
    resumida: true,
    code: "cocina",
  },
  {
    categoria: "Cocina y comedor",
    icono: IconoNevera,
    texto: "Refrigerador",
    resumida: true,
    code: "refrigerador",
  },
  {
    categoria: "Cocina y comedor",
    icono: IconoMicroWave,
    texto: "Microondas",
    code: "microHondas",
  },
  {
    categoria: "Cocina y comedor",
    icono: IconoCocina,
    texto: "Artículos básicos de cocina",
    subTitulo: "Ollas y sartenes, aceite, sal y pimienta",
    code: "sartenesOllas",
  },
  {
    categoria: "Cocina y comedor",
    icono: IconoOlla,
    texto: "Platos y cubiertos",
    subTitulo: "Platos hondos, palillos chinos, platos, tazas, etc.",
    code: "platosCubiertos",
  },
  {
    categoria: "Cocina y comedor",
    icono: IconoNevera,
    texto: "Mini refrigerador",
    code: "neveraEjecutiva",
  },
  {
    categoria: "Cocina y comedor",
    icono: IconoNevera,
    texto: "Congelador",
    code: "congelador",
  },
  {
    categoria: "Cocina y comedor",
    icono: IconoEstufa,
    texto: "Estufa",
    code: "estufa",
  },
  {
    categoria: "Cocina y comedor",
    icono: IconoHorno,
    texto: "Horno",
    code: "horno",
  },
  {
    categoria: "Cocina y comedor",
    icono: IconoCupHot,
    texto: "Jarra eléctrica para el agua caliente",
    code: "jarraAguaCaliente",
  },
  {
    categoria: "Cocina y comedor",
    icono: IconoCafetera,
    texto: "Cafetera",
    code: "cafeteria",
  },
  {
    categoria: "Cocina y comedor",
    icono: IconoCupWine,
    texto: "Copas de vino",
    code: "copasVino",
  },
  {
    categoria: "Cocina y comedor",
    icono: ImgTostadora,
    iconoImg: true,
    texto: "Tostadora",
    code: "tostadora",
  },
  {
    categoria: "Cocina y comedor",
    icono: IconoLicuadora,
    texto: "Licuadora",
    code: "locuadora",
  },
  {
    categoria: "Cocina y comedor",

    iconoImg: true,
    icono: ImgArrocera,
    texto: "Arrocera",
    code: "arrocera",
  },
  {
    categoria: "Cocina y comedor",
    icono: ImgComedor,
    iconoImg: true,
    texto: "Mesa de comedor",
    code: "mesaComedor",
  },
  {
    categoria: "Cocina y comedor",
    icono: IconoTaza,
    texto: "Café",
    code: "cafe",
  },
  // Info sobre ubicacion
  {
    categoria: "Sobre ubicacion",
    icono: IconoDoorClose,
    texto: "Entrada privada",
    subTitulo: "Entrada por otra calle o edificio",
    code: "entradaPrivada",
  },
  {
    categoria: "Sobre ubicacion",
    icono: ImgLavanderia,
    iconoImg: true,
    texto: "Lavandería cercana",
    code: "lavanderia",
  },
  // Exterior
  {
    categoria: "Exterior",
    icono: IconoBalcon,
    texto: "Terraza o balcón",
    resumida: true,
    code: "terraza",
  },

  {
    categoria: "Exterior",
    icono: IconoFlower,
    texto: "Jardín privado, Con valla en todo el perímetro",
    code: "jardinPrivado",
    subTitulo:
      "Un espacio abierto en la propiedad generalmente cubierto de pasto",
  },
  {
    categoria: "Exterior",
    icono: IconoBBQ,
    texto: "Asador",
    resumida: true,
    code: "asador",
  },
  {
    categoria: "Exterior",
    icono: ImgTumbona,
    iconoImg: true,
    texto: "Camastros",
    code: "camatros",
  },
  // Estacionamiento e instalaciones
  {
    categoria: "Estacionamiento e instalaciones",
    icono: IconoCarro,
    code: "estacionamientoTechado",
    texto: "Estacionamiento techado gratuito en las instalaciones: 2 espacios",
  },
  {
    categoria: "Estacionamiento e instalaciones",
    icono: IconoPiscina,
    resumida: true,
    code: "piscinaExterior",
    texto: "Alberca exterior privada: disponible todo el año, climatizada",
  },
  {
    categoria: "Estacionamiento e instalaciones",
    icono: IconoSinEscalera,
    texto: "Alojamiento de un solo piso",
    code: "sinEscaleras",
    subTitulo: "Alojamiento sin escaleras",
  },
  // Servicios
  {
    categoria: "Servicios",
    icono: IconoMaletas,
    texto: "Se permite dejar el equipaje",
    code: "comodidadEquipaje",
    subTitulo:
      "Opción de llegar pronto o salir tarde para la comodidad de los huéspedes",
  },
  {
    categoria: "Servicios",
    icono: IconoCalendario,
    texto: "Disponible para estancias largas",
    resumida: true,
    subTitulo: "Permite estancias de 28 días o más",
    code: "date",
  },
  {
    categoria: "Servicios",
    icono: IconoLlaves,
    texto: "Llegada autónoma",
    code: "llegadaAutonoma",
  },
  {
    categoria: "Servicios",
    icono: IconoKey,
    texto: "Teclado",
    code: "teclado",
    subTitulo:
      "Entra al alojamiento de manera independiente gracias a un código en la puerta",
  },
  {
    categoria: "Servicios",
    icono: IconoSpray,
    code: "spray",
    texto:
      "Servicio de limpieza disponible, de 11:00 a.m. a 3:00 p.m., todos los días: disponible por un costo adicional",
  },
];

export default [...ListaAmenidades];
