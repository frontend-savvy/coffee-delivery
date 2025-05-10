export type BaseProps = {
  children: React.ReactNode;
  className?: string;
};
// types.ts or in your component file
export type NavLink = {
  label: string;
  href: string;
};

export type Temperature = "Hot" | "Cold";

export type PopularProduct = {
  id: number;
  name: string;
  price: number;
  rating: number;
  temperatures: Temperature[];
  image: string; // URL or import path
};

export type TDeliveryStep = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  image: string;
};

export type Testimonial = {
  id: number;
  name: string;
  text: string;
  image: string;
};
