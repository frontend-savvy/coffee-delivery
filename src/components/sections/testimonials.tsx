"use client";

import CustomCarousel, {
  CarouselItemType,
} from "@/components/carousel/custom-carousel";
import { Testimonial } from "@/lib/types";
import { useEffect, useState } from "react";
import TestimonialCard from "../testimonial-card";
import TestimonialsHeading from "../testimonials-heading";
import Wrapper from "../wrapper";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Naura",
    text: "I really love the cappuccino, the coffee was very smooth.",
    image: "/naura.jpg",
  },
  {
    id: 2,
    name: "Aditya",
    text: "The espresso was strong, just how I like it!",
    image: "/aditya.jpg",
  },
  {
    id: 3,
    name: "Sophia",
    text: "Best iced latte I've ever had. Totally refreshing.",
    image: "/sophia.jpg",
  },
  {
    id: 4,
    name: "Daniel",
    text: "Loved the packaging and the fast delivery!",
    image: "/daniel.jpg",
  },
];

// Convert testimonials to carousel items format
const carouselItems: CarouselItemType[] = testimonials.map((testimonial) => ({
  id: testimonial.id,
  title: testimonial.name,
  content: testimonial.text,
  imageUrl: testimonial.image,
}));

export default function Testimonials() {
  // Add state for client-side rendering
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-20">
      <Wrapper>
        <div className="space-y-8">
          <TestimonialsHeading />
          {isMounted && (
            <CustomCarousel
              items={carouselItems}
              autoplay={true}
              pauseOnHover={true}
              loop={true}
              cardHeight="h-72"
              renderItem={(item) => (
                <TestimonialCard
                  key={item.id}
                  testimonial={{
                    id: Number(item.id),
                    name: item.title,
                    text: item.content,
                    image: item.imageUrl || "",
                  }}
                />
              )}
            />
          )}
        </div>
      </Wrapper>
    </section>
  );
}
