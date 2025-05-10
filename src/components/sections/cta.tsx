import Image from "next/image";
import H2 from "../h2";
import P from "../p";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Wrapper from "../wrapper";

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <Wrapper>
        <div className="rounded-4xl overflow-hidden relative min-h-[392px]">
          <Image className="object-cover" fill src="/cta-bg.png" alt={""} />
          <div className="absolute px-4 md:px-0 flex flex-col items-center justify-center text-white w-full h-full">
            <H2 className="text-white  text-center ">
              Subscribe to get 50% discount price
            </H2>
            <div className="bg-white  mt-8 items-center rounded-full flex gap-4 p-1 ">
              <Input
                className="border-0 text-text-base"
                placeholder="Email address"
              />
              <Button>Order Now</Button>
            </div>
          </div>

          <P className=" bg-white">click here</P>
        </div>
      </Wrapper>
    </section>
  );
}
