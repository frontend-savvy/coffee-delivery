import { Product } from "@/lib/types";
import AutoGrid from "./auto-grid";
import ProductItem from "./product-item";
const products: Product[] = [
  {
    id: 1,
    name: "Sandwich",
    price: 12000,
    rating: 4.8,
    description: "Bread with meat and vegetables",
    image: "/products/sandwich.png",
  },
  {
    id: 2,
    name: "Hot Milk",
    price: 12000,
    rating: 4.8,
    description: "Hot milk with less sugar",
    image: "/products/hot-milk.png",
  },
  {
    id: 3,
    name: "Coffee Ice Cream",
    price: 12000,
    rating: 4.8,
    description: "Coffee with ice cream vanilla",
    image: "/products/coffee-ice-cream.png",
  },
  {
    id: 4,
    name: "Cappuccino",
    price: 12000,
    rating: 4.8,
    description: "Hot cappuccino with smooth foam",
    image: "/products/cappuccino.png",
  },
  {
    id: 5,
    name: "Moccacino",
    price: 12000,
    rating: 4.8,
    description: "Hot moccacino with rich flavor",
    image: "/products/moccacino.png",
  },
  {
    id: 6,
    name: "Waffle Ice Cream",
    price: 12000,
    rating: 4.8,
    description: "Waffle topped with cold ice cream",
    image: "/products/waffle-ice-cream.png",
  },
];
export default function ProductList() {
  return (
    <AutoGrid min="300px" className="mt-8">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </AutoGrid>
  );
}
