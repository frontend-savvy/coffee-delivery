import { TDeliveryStep } from "@/lib/types";
import Image from "next/image";
import H3 from "./h3";
import P from "./p";

export default function DeliveryStep({
  className,
  deliveryStep,
}: {
  className?: string;
  deliveryStep: TDeliveryStep;
}) {
  return (
    <div className=" py-16 px-6  text-center">
      <div className="icon mx-auto  w-fit">
        <Image height={159} width={159} src={deliveryStep.icon} alt={""} />
      </div>
      <div className="mt-4">
        <H3>{deliveryStep.title}</H3>
        <P className="mt-2 ">{deliveryStep.description}</P>
      </div>
    </div>
  );
}
