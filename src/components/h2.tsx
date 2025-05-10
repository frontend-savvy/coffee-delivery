import { BaseProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function H2({ children, className }: BaseProps) {
  // Split the children into words
  const words = children?.toString().split(" ");

  // Separate the last word and style it
  const lastWord = words?.pop(); // Pop the last word
  const remainingText = words?.join(" "); // Join the rest of the words

  return (
    <h2 className={cn("text-3xl font-semibold font-poppins", className)}>
      {remainingText}{" "}
      <span className="border-b-4 border-primary">{lastWord}</span>
    </h2>
  );
}
