import clsx from "clsx";
import { ReactNode } from "react";

type AutoGridProps = {
  min?: string; // like '100px', '200px', '12rem'
  gap?: string; // like 'gap-4', 'gap-6'
  className?: string;
  children: ReactNode;
};

export default function AutoGrid({
  min = "100px",
  gap = "gap-4",
  className = "",
  children,
}: AutoGridProps) {
  return (
    <div
      className={clsx("grid", gap, className)}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${min}, 1fr))`,
      }}
    >
      {children}
    </div>
  );
}
