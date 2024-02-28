import Link from "next/link";
import HeaderMenus from "./components/HeaderMenus";
import HeaderNav from "./components/HeaderNav";

function Header() {
  return (
    <header className="px-5 h-14 flex items-center shadow drop-shadow sticky top-0 bg-white">
      <Link href="/" className="font-bold text-4xl">
        중고마켓
      </Link>
      <HeaderNav />
      <HeaderMenus />
    </header>
  );
}

export default Header;
