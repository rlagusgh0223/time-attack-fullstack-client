import HeaderNavItem from "./HeaderNavItem";

function HeaderNav() {
  return (
    <nav className="ml-20">
      <ul className="flex gap-x-4">
        <HeaderNavItem href="/" label="구입하기" />
        <HeaderNavItem href="/deals" label="판매하기" />
        <HeaderNavItem href="/my" label="내 판매글" />
      </ul>
    </nav>
  );
}

export default HeaderNav;
