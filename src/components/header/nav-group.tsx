import Navigation from "./navigation";
import UtilityGroup from "./utility-group";

export default function NavGroup() {
  return (
    <div className="hidden md:flex gap-6 items-center">
      <Navigation />
      <UtilityGroup />
    </div>
  );
}
