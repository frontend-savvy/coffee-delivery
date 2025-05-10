import HeroContent from "../hero-content";
import HeroImage from "../hero-image";
import Wrapper from "../wrapper";

export default function Hero() {
  return (
    <section className="bg-background py-10 md:py-0">
      <Wrapper>
        <div className="flex gap-4 flex-col md:flex-row items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </Wrapper>
    </section>
  );
}
