import Link from "next/link";
import SidebarLinkImpl from "./types";

const SidebarLink = ({ children, href, className = "" }: SidebarLinkImpl) => {
  return (
    <>
      <Link className={className} href={href}>
        {children}
      </Link>
    </>
  );
};

export default SidebarLink;
