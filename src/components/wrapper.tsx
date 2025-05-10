import { BaseProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function Wrapper({ className, children }: BaseProps) {
  return <div className={cn("wrapper", className)}>{children}</div>;
}
