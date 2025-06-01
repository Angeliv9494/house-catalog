interface Product {
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
    price: 10000,
    description: "Latest model with A15 Bionic chip and improved camera.",
    category: ["electronicos"],
    quantity: 1,
    image: "https://example.com/images/iphone14.jpg",
  },
  {
    id: 2,
    name: "Silla Plegable de Madera",
    price: 1500,
    description:
      "Silla plegable de madera de alta calidad, ideal para exteriores.",
    category: ["muebles"],
    quantity: 2,
    image: "https://example.com/images/iphone14.jpg",
  },
  {
    id: 3,
    name: "Colchon Individual Restonic",
    price: 3500,
    description: "Colchon individual de alta densidad y confort.",
    category: ["muebles"],
    quantity: 1,
    image: "https://example.com/images/iphone14.jpg",
  },
  {
    id: 4,
    name: "Escritorio Armable en L",
    price: 1000,
    description: "Escritorio armable en forma de L, ideal para oficinas.",
    category: ["muebles"],
    quantity: 1,
    image: "https://example.com/images/iphone14.jpg",
  },
  {
    id: 5,
    name: "Base Cama Individual",
    price: 1000,
    description: "Base de cama individual, resistente y duradera.",
    category: ["muebles"],
    quantity: 1,
    image: "https://example.com/images/iphone14.jpg",
  },
  {
    id: 6,
    name: "Escurridor de Platos",
    price: 500,
    description:
      "Escurridor de platos de acero inoxidable, resistente y elegante.",
    category: ["cocina"],
    quantity: 1,
    image: "https://example.com/images/iphone14.jpg",
  },
  {
    id: 7,
    name: "Rack de Cocina",
    price: 1200,
    description: "Rack de cocina de madera, ideal para organizar utensilios.",
    category: ["cocina"],
    quantity: 1,
    image: "https://example.com/images/iphone14.jpg",
  },
  {
    id: 8,
    name: "Impresora 3D Creality Ender 3 V2 Neo + Filamentos",
    price: 4000,
    description: "Impresora 3D Creality Ender 3, ideal para proyectos.",
    category: ["electronicos"],
    quantity: 1,
    image: "https://example.com/images/iphone14.jpg",
  },
];

export default productCatalog;