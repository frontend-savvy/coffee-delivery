import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image height={30} width={150} src="/logo.svg" alt={""} />
    </Link>
  );
}
