import Link from "next/link";
import SidebarLinkImpl from "./types";

const SidebarLink = ({
  children,
  href,
  className = "",
  onClick = () => {},
}: SidebarLinkImpl) => {
  return (
    <>
      <Link className={className} href={href} onClick={onClick}>
        {children}
      </Link>
    </>
  );
};

export default SidebarLink;
