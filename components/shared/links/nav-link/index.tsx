"use client";
import Link from "next/link";
import NavLinkImpl from "./types";
import useNavLink from "./use";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  className = "",
  children,
  onClick = () => {},
}: NavLinkImpl) => {
  const { activePath } = useNavLink();
  const pathname = usePathname();
  const url = href === "#" ? pathname : "/" + activePath + href;
  return (
    <Link onClick={onClick} href={url} className={className}>
      {children}
    </Link>
  );
};
export default NavLink;
