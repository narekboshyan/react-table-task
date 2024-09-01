export type Product = {
  id: string;
  name: string;
  price: number;
  quality: number;
  description: string;
  imageUrl: string;
};

const products: Product[] = [
  {
    id: "P001",
    name: "Wireless Headphones",
    price: 99,
    quality: 5,
    description:
      "High-quality wireless headphones with noise-cancellation feature.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "P002",
    name: "Smartwatch",
    price: 199,
    quality: 4,
    description: "Stylish smartwatch with multiple health tracking features.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "P003",
    name: "Bluetooth Speaker",
    price: 49,
    quality: 3,
    description: "Portable Bluetooth speaker with excellent sound quality.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "P004",
    name: "Laptop Stand",
    price: 29,
    quality: 4,
    description: "Ergonomic laptop stand with adjustable height and angle.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "P005",
    name: "USB-C Hub",
    price: 24,
    quality: 5,
    description: "Multi-port USB-C hub with HDMI, USB-A, and SD card reader.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "P006",
    name: "Wireless Mouse",
    price: 19,
    quality: 3,
    description: "Compact and ergonomic wireless mouse with adjustable DPI.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "P007",
    name: "Mechanical Keyboard",
    price: 89,
    quality: 4,
    description: "RGB mechanical keyboard with customizable key switches.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "P008",
    name: "Monitor Arm",
    price: 59,
    quality: 5,
    description: "Adjustable monitor arm for a clean and organized workspace.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "P009",
    name: "External Hard Drive",
    price: 79,
    quality: 4,
    description: "1TB external hard drive with fast data transfer speed.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "P010",
    name: "Noise-Cancelling Earbuds",
    price: 149,
    quality: 5,
    description: "In-ear noise-cancelling earbuds with long battery life.",
    imageUrl: "https://via.placeholder.com/150",
  },
];

export default products;
