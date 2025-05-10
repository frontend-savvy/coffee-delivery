import { PopularProduct } from "@/lib/types";
import PopularProductItem from "./popular-product-item";

const popularProducts: PopularProduct[] = [
  {
    id: 1,
    name: "Vanilla Latte",
    price: 21000,
    rating: 4.8,
    temperatures: ["Hot", "Cold"],
    image: "/vanilla.png", // example path
  },
  {
    id: 2,
    name: "Espresso",
    price: 12000,
    rating: 4.8,
    temperatures: ["Hot", "Cold"],
    image: "/espresso.png",
  },
  {
    id: 3,
    name: "Hazelnut Latte",
    price: 23000,
    rating: 4.8,
    temperatures: ["Hot", "Cold"],
    image: "/hazelnut-latte.png",
  },
];

export default function PopularProductList() {
  return (
    <div className="grid gap-6  md:grid-cols-2 lg:grid-cols-3 mt-12">
      {popularProducts.map((product) => (
        <PopularProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
