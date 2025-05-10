export function DotNavigation({
  count,
  current,
  onDotClick,
}: {
  count: number;
  current: number;
  onDotClick: (index: number) => void;
}) {
  if (count <= 1) return null;

  return (
    <div className="flex justify-center mt-4 gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          className={`h-2 rounded-full transition-all ${
            current === index ? "w-6 bg-primary" : "w-2 bg-gray-300"
          }`}
          onClick={() => onDotClick(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
