import { BaseProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function H3({ className, children }: BaseProps) {
  return (
    <h3 className={cn("font-poppins font-semibold text-2xl", className)}>
      {children}
    </h3>
  );
}
