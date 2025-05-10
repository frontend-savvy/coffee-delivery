import H2 from "../h2";
import ProductList from "../product-list";
import Wrapper from "../wrapper";

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-white">
      <Wrapper>
        <H2>Special menu for you</H2>
        <ProductList />
      </Wrapper>
    </section>
  );
}
