import { MenuIcon } from "lucide-react";

export default function MobileMenuToggle({
  onToggle,
}: {
  onToggle: () => void;
}) {
  return (
    <button onClick={onToggle} className="lg:hidden">
      <MenuIcon className="h-8 w-8" />
    </button>
  );
}
