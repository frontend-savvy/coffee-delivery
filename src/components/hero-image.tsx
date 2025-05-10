import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="w-full">
      <div className="relative aspect-square ">
        <Image className="object-contain" fill src={"/img-hero.png"} alt={""} />
      </div>
    </div>
  );
}
