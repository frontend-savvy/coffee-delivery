import Cart from "./cart";
import SearchBox from "./search-box";

export default function UtilityGroup() {
  return (
    <div className="flex gap-4 items-center">
      <SearchBox />
      <Cart />
    </div>
  );
}
