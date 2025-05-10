import { BaseProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function P({ className, children }: BaseProps) {
  return (
    <p className={cn("font-poppins text-lg tracking-[.72px]", className)}>
      {children}
    </p>
  );
}
