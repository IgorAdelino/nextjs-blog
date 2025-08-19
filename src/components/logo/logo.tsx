import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href={"/"} title="Home">
      <Image src={"/logo.svg"} alt="logo" width={116} height={32} />
    </Link>
  );
};
