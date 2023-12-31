import SidebarLink from "@/components/shared/links/sidebar-link";
import MenuItemImpl from "./types";
import cls from "classnames";

const MenuItem = ({
  active,
  href,
  title,
  className,
  onClick = () => {},
}: MenuItemImpl) => {
  return (
    <>
      <SidebarLink
        onClick={onClick}
        className={cls(
          `text-zinc-400 text-sm
              duration-200 transition-all hover:text-primary hover:tracking-widest
              font-medium py-1 px-3 w-full`,
          className,
          active ? "text-primary tracking-widest" : "text-zinc-400"
        )}
        href={href}
      >
        - {title}
      </SidebarLink>
    </>
  );
};
export default MenuItem;
