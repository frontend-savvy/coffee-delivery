import { Temperature } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

type TemperatureTagsProps = {
  temperatures: Temperature[];
  className?: string;
};

export default function TemperatureTags({
  temperatures,
  className,
}: TemperatureTagsProps) {
  return (
    <div className={cn("flex gap-2 items-center", className)}>
      {temperatures.map((item, index) => (
        <Button
          key={index}
          size="sm"
          variant="outline"
          className="bg-transparent font-poppins rounded-md capitalize"
        >
          {item}
        </Button>
      ))}
    </div>
  );
}
