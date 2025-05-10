import H2 from "./h2";
import H3 from "./h3";
import P from "./p";
import { Button } from "./ui/button";

export default function AboutContent() {
  return (
    <div className="w-full">
      <div>
        <H2>About us</H2>
        <H3 className="mt-6">
          We provide quality coffee, and ready to deliver.
        </H3>
        <P className="mt-4 text-text-base/75">
          We are a company that makes and distributes delicious drinks. our main
          product is made with a secret recipe and available in stores
          worldwide.
        </P>
        <Button className="mt-8 hover:text-primary transition-all">
          Get your coffee
        </Button>
      </div>
    </div>
  );
}
