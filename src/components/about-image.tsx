import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="w-full h-full">
      <div className="relative shadow-primary shadow-xl h-[510px] rounded-lg lg:max-w-[420px] overflow-hidden -mt-32">
        <Image
          fill
          className="object-cover"
          src="/about-img.jpg"
          alt="About us"
        />
      </div>
    </div>
  );
}
