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
    price: 15000,
    description: "Latest model with A15 Bionic chip and improved camera.",
    category: ["electronicos"],
    quantity: 1,
    image: "https://p1-ofp.static.pub//fes/cms/2023/09/22/11w0z2gahwagl3lb9ftao79p52qw0o460975.png",
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
    name: "Impresora 3D Creality Ender 3 V2 Neo + Filamentos",
    price: 4000,
    description: "Impresora 3D Creality Ender 3, ideal para proyectos.",
    category: ["electronicos"],
    quantity: 1,
    image: "https://m.media-amazon.com/images/I/61NEKs5QsmL._AC_SX679_.jpg",
  },
];

export default productCatalog;