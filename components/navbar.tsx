import Link from "next/link";
import Image from "next/image";
import Logo from "../app/icon1.png";

export default function Navbar() {
  return (
    <div>
      <nav className="fixed inset-x-0 top-0 z-50 p-2 m-2 flex items-center justify-between rounded-full border-b border-border/10 bg-background/95 backdrop-blur-sm ">
        {/* LEFT */}
        <Image src={Logo} alt="shadc/ui Easy Install" height={20} width={20} />
        {/* RIGHT */}
        <Link href="https://www.buymeacoffee.com/jobvargh">
          <Image
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
            width={150}
            height={60}
            className="rounded-full"
          />
        </Link>
      </nav>
    </div>
  );
}
