import AboutContent from "../about-content";
import AboutImage from "../about-image";
import Wrapper from "../wrapper";

export default function AboutUs() {
  return (
    <section className="py-20">
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <AboutImage />
          <AboutContent />
        </div>
      </Wrapper>
    </section>
  );
}
