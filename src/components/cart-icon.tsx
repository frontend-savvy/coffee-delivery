import { cn } from "@/lib/utils";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

export default function CartIcon({ className }: { className?: string }) {
  return (
    <div className={"bg-primary p-1 rounded-full text-center"}>
      <PiShoppingCartSimpleLight className={cn("text-3xl", className)} />
    </div>
  );
}
