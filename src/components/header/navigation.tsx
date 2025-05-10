import { NavLink } from "@/lib/types";
import Link from "next/link";

// navLinks.ts or inside your component
export const navLinks: NavLink[] = [
  { label: "About us", href: "/about" },
  { label: "Our Product", href: "/product" },
  { label: "Delivery", href: "/delivery" },
];

export default function Navigation() {
  return (
    <nav className=" hidden lg:block xl:mr-[140px]">
      <ul className="flex gap-8 items-center">
        {navLinks.map((item) => (
          <li key={item.href}>
            <Link
              className="font-poppins text-lg hover:text-primary"
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
