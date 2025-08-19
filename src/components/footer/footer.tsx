import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex  md:flex-row justify-center gap-8 py-8">
          <Link href={"/"}>
            <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
          </Link>

          <nav className="flex justify-between flex-col md:flex-row items-center gap-2 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:text-primary">
              Use Terms
            </Link>
            <Link href="/privacy " className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/feedback" className="hover:text-primary">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
