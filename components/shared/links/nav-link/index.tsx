"use client";
import Link from "next/link";
import NavLinkImpl from "./types";
import useNavLink from "./use";

const NavLink = ({
  href,
  className = "",
  children,
  onClick = () => {},
}: NavLinkImpl) => {
  const { activePath } = useNavLink();
  return (
    <Link
      onClick={onClick}
      href={`/${activePath}${href}`}
      className={className}
    >
      {children}
    </Link>
  );
};
export default NavLink;
