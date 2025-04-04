import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/wfc-logo.svg"
        width={180}
        height={38}
        priority
        alt="sample logo"
      />
    </Link>
  );
}
