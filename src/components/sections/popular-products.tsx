import H2 from "../h2";
import PopularProductList from "../popular-product-list";
import Wrapper from "../wrapper";

export default function PopularProducts() {
  return (
    <section className="py-10">
      <Wrapper>
        <div>
          <H2>Popular Now</H2>
          <PopularProductList />
        </div>
      </Wrapper>
    </section>
  );
}
