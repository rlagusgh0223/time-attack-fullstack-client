import Link from "next/link";

interface AuthItemProps {
  href: string;
  label: string;
}

function AuthItem({ href, label }: AuthItemProps) {
  return (
    <li>
      <Link href={href}>{label}</Link>
    </li>
  );
}

export default AuthItem;
