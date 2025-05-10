import { Testimonial } from "@/lib/types";
import Image from "next/image";
import P from "./p";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div className="relative mx-auto w-full mb-6 max-w-[300px] rounded-xl overflow-visible">
      {/* Image container */}
      <div className="relative h-[258px] rounded-xl overflow-hidden">
        <Image
          className="object-cover object-top"
          src={testimonial.image}
          alt=""
          fill
          priority
        />
      </div>

      {/* Floating glass effect */}
      <div className="absolute left-1/2  -bottom-6 w-[80%] -translate-x-1/2 bg-surface border border-white/20 backdrop-blur-md rounded-xl p-4 shadow-lg">
        <P className="capitalize font-medium text-center">{testimonial.name}</P>
        <P className="text-sm text-center">{testimonial.text}</P>
      </div>
    </div>
  );
}
