import SidebarLink from "@/components/shared/links/sidebar-link";
import MenuItemImpl from "./types";
import cls from "classnames";

const MenuItem = ({ active, href, title, className }: MenuItemImpl) => {
  return (
    <>
      <SidebarLink
        className={cls(
          `text-zinc-400 text-sm
              duration-200 transition-all hover:text-primary hover:tracking-widest
              font-medium py-1 px-3 w-full`,
          className,
          active ? "text-primary" : "text-zinc-400"
        )}
        href={href}
      >
        - {title}
      </SidebarLink>
    </>
  );
};
export default MenuItem;
