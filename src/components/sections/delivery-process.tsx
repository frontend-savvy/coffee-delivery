import DeliveryStepsGrid from "../delivery-steps-grid";
import H2 from "../h2";
import Wrapper from "../wrapper";

export default function DeliveryProcess() {
  return (
    <section className="py-20 bg-white">
      <Wrapper>
        <H2>How to use delivery service</H2>
        <DeliveryStepsGrid />
      </Wrapper>
    </section>
  );
}
