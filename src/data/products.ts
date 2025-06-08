export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string[];
  quantity: number;
  image: string;
}

export const productCatalog: Product[] = [
  {
    id: 1,
    name: "Lenovo Legion Go",
    price: 12000,
    description:
      "Consola portátil 7, procesador AMD Ryzen Z1 Extreme, 16GB RAM y 512GB SSD. Incluye controles desmontables y sistema operativo Windows 11.",
    category: ["electronicos"],
    quantity: 1,
    image:
      "https://p1-ofp.static.pub//fes/cms/2023/09/22/11w0z2gahwagl3lb9ftao79p52qw0o460975.png",
  },
  {
    id: 2,
    name: "Silla Plegable de Madera",
    price: 1500,
    description:
      "Silla plegable de madera de alta calidad, ideal para exteriores.",
    category: ["muebles"],
    quantity: 2,
    image: "https://m.media-amazon.com/images/I/411Tnpgu2ZL._AC_.jpg",
  },
  {
    id: 3,
    name: "Colchon Individual Restonic",
    price: 3500,
    description: "Colchon individual de alta densidad y confort.",
    category: ["muebles"],
    quantity: 1,
    image: "https://m.media-amazon.com/images/I/81GMCGaqSBL._AC_SX679_.jpg",
  },
  {
    id: 4,
    name: "Escritorio Armable en L",
    price: 1000,
    description: "Escritorio armable en forma de L, ideal para oficinas.",
    category: ["muebles"],
    quantity: 1,
    image: "https://m.media-amazon.com/images/I/61rdioaMgKL._AC_SX679_.jpg",
  },
  {
    id: 5,
    name: "Base Cama Individual",
    price: 1000,
    description: "Base de cama individual, resistente y duradera.",
    category: ["muebles"],
    quantity: 1,
    image: "https://m.media-amazon.com/images/I/81clrFXIKgL._AC_SX679_.jpg",
  },
  {
    id: 6,
    name: "Escurridor de Platos",
    price: 500,
    description:
      "Escurridor de platos de acero inoxidable, resistente y elegante.",
    category: ["cocina"],
    quantity: 1,
    image: "https://m.media-amazon.com/images/I/61XQcZiZp2L._AC_SX679_.jpg",
  },
  {
    id: 7,
    name: "Rack de Cocina",
    price: 1200,
    description: "Rack de cocina de madera, ideal para organizar utensilios.",
    category: ["cocina"],
    quantity: 1,
    image: "https://m.media-amazon.com/images/I/719Vp6MCkJL._AC_SX679_.jpg",
  },
  {
    id: 8,
    name: "Impresora 3D Creality Ender 3 V2 Neo",
    price: 4000,
    description:
      "Impresora 3D Creality Ender 3, ideal para proyectos. Incluye filamentos PETG.",
    category: ["electronicos"],
    quantity: 1,
    image: "https://m.media-amazon.com/images/I/61NEKs5QsmL._AC_SX679_.jpg",
  },
  {
    id: 9,
    name: "Refrigerador Mabe 11 pies",
    price: 7500,
    description:
      "Refrigerador Mabe de 11 pies, eficiente y espacioso. Con dispensador de agua y hielos.",
    category: ["electronicos"],
    quantity: 1,
    image: "https://m.media-amazon.com/images/I/41MkMrcA8ML._AC_SX342_.jpg",
  },
  {
    id: 10,
    name: "Comedor con 5 Sillas de Madera",
    price: 4000,
    description:
      "Mesa de comedor con 6 sillas, ideal para familias. Base de metal y paneles de vidrio templado.",
    category: ["muebles"],
    quantity: 1,
    image: "/house-catalog/products/dining-table.png",
  },
  {
    id: 11,
    name: "Horno Microondas Whirlpool",
    price: 1000,
    description:
      "Horno microondas Whirlpool de 20 litros, con 700W de potencia y 6 niveles de cocción. Ideal para calentar y cocinar alimentos rápidamente.",
    category: ["electronicos"],
    quantity: 0,
    image:
      "https://tupapeleriaymas.com.mx/6685-large_default/horno-de-microondas-whirlpool-wm-1507q-de-07-pies-10-niveles-color-negro.jpg",
  },
  {
    id: 12,
    name: "Base de Madera (Matrimonial)",
    price: 1000,
    description: "Base de cama matrimonial de madera, resistente y elegante.",
    category: ["muebles"],
    quantity: 3,
    image:
      "https://www.muebleriasjuarez.mx/wp-content/uploads/2024/01/1000-CAOBA.png",
  },
  {
    id: 13,
    name: "Lavadora Whirpool",
    price: 5000,
    description:
      "Lavadora de carga vertical, eficiente y silenciosa. Capacidad de 8 kg.",
    category: ["electronicos"],
    quantity: 1,
    image:
      "https://res.cloudinary.com/walmart-labs/image/upload/mg/gm/3pp/asr/2e31bb8a-7af3-4e34-99ef-d1e672424614.cbb9a996478b85e89d0252678c0af36b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  },
  {
    id: 14,
    name: "Nintendo Switch Standard Gris",
    price: 4000,
    description: "Nintendo Switch version standard, incluye juegos",
    category: ["electronicos"],
    quantity: 1,
    image: "https://m.media-amazon.com/images/I/51ArI2GwRoL._AC_SX679_.jpg",
  },
];

export default productCatalog;
