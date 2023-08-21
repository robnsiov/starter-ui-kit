import SidebarLinkImpl from "./types";
import NavLink from "../nav-link";

const SidebarLink = ({
  children,
  href,
  className = "",
  onClick = () => {},
}: SidebarLinkImpl) => {
  return (
    <>
      <NavLink className={className} href={href} onClick={onClick}>
        {children}
      </NavLink>
    </>
  );
};

export default SidebarLink;
