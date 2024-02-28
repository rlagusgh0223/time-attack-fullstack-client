import Link from "next/link";
import Auth from "./components/Auth";

function Header() {
  return (
    <header className="px-5 h-14 flex items-center shadow drop-shadow sticky top-0 bg-white">
      <Link href="/" className="font-bold text-4xl">
        중고마켓
      </Link>
      <Auth />
    </header>
  );
}

export default Header;
