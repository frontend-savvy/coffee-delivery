import { Product } from "@/lib/types";
import millify from "millify";
import Image from "next/image";
import CartIcon from "./cart-icon";
import P from "./p";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className="card shadow-xl shadow-primary/20   bg-white p-6 rounded-lg">
      <div className="relative h-[226px] w-full">
        <Image
          fill
          className="h-full w-full object-cover rounded-lg"
          src={product.image}
          alt={""}
        />
      </div>

      <h3 className="mt-5 text-2xl font-poppins font-semibold flex justify-between items-center ">
        {product.name}{" "}
        <span className="font-bold">
          {millify(product.price, { precision: 2, space: true })}
        </span>
      </h3>
      <div className="flex justify-between mt-3 items-center gap-6">
        <P className="text-sm">{product.description}</P>
        <CartIcon className="text-white p-1" />
      </div>
    </div>
  );
}
