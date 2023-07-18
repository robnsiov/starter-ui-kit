"use client";
import SidebarLink from "@/components/shared/links/sidebar-link";
import { Home } from "iconsax-react";
import Link from "next/link";
import { Fragment } from "react";
import routes from "../sidebar/routes";
import MenuContainer from "./menu-container";
import MenuItem from "./menu-item";
import "./row-menu.css";
import useRowMenu from "./use";
import cls from "classnames";

const RowMenu = () => {
  const {
    pathname,
    activeLevelOne,
    activeLevelThree,
    activeLevelTwo,
    activeRoute,
  } = useRowMenu();
  return (
    <>
      <div className="w-full fixed top-[74px] right-0 left-0 px-4 mt-2">
        <div className="w-full flex justify-start items-start row-menu space-x-6">
          {routes.map(({ children, id }) => (
            <Fragment key={id}>
              {children.map(
                ({
                  href,
                  icon: Icon,
                  id: levelOneId,
                  title,
                  children,
                  label,
                }) => (
                  <div
                    className="flex justify-start items-center relative menu-item"
                    key={levelOneId}
                  >
                    <SidebarLink
                      onClick={() => activeLevelOne(levelOneId)}
                      href={href}
                      className="flex justify-start items-center w-full group py-4"
                    >
                      <Icon
                        size="18"
                        className={cls(
                          `duration-200 transition-all group-hover:text-primary`,
                          pathname === href
                            ? "text-primary"
                            : "dark:text-zinc-300 text-zinc-700"
                        )}
                      />
                      <span
                        className={cls(
                          `font-semibold ms-2.5 
                        duration-200 transition-all group-hover:text-primary`,
                          pathname === href
                            ? "text-primary"
                            : "text-sm text-zinc-800"
                        )}
                      >
                        {" "}
                        {title}
                      </span>
                      {label && (
                        <span
                          className="absolute top-0 -right-4 bg-pink-50 dark:bg-pink-700/10 text-[10px] 
                tracking-wide font-bold rounded-lg 
              text-red-500 py-0.5 px-2"
                        >
                          {label}
                        </span>
                      )}
                    </SidebarLink>
                    {children && children.length !== 0 && (
                      <MenuContainer className="top-8 sub-menu-item left-0">
                        {children?.map(
                          ({ href, id: levelTwoId, title, children }) => (
                            <div
                              className="relative w-full children py-1"
                              key={levelTwoId}
                            >
                              <MenuItem
                                title={title}
                                href={href}
                                active={href === pathname}
                              />
                              {children && children.length !== 0 && (
                                <MenuContainer className="top-3 left-full">
                                  {children?.map(({ href, id, title }) => (
                                    <MenuItem
                                      title={title}
                                      href={href}
                                      key={id}
                                      active={href === pathname}
                                    />
                                  ))}
                                </MenuContainer>
                              )}
                            </div>
                          )
                        )}
                      </MenuContainer>
                    )}
                  </div>
                )
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
export default RowMenu;
