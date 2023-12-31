"use client";
import MotionDropDown from "@/components/shared/dropdowns/motion-dropdown";
import SidebarLink from "@/components/shared/links/sidebar-link";
import { ArrowDown2, Image, Logout } from "iconsax-react";
import routes from "./routes";
import useProfile from "./use";
import cls from "classnames";
import Pic from "next/image";
import NavLink from "@/components/shared/links/nav-link";
import matchPath from "@/utils/match-path";
import useTranslate from "@/hooks/use-translate";

const Profile = () => {
  const { pathname } = useProfile();
  const t = useTranslate("profile");
  return (
    <>
      <div className="flex justify-start items-center cursor-pointer ms-3 relative uppercase">
        <MotionDropDown
          className="absolute top-11 w-[150px] rounded-md right-0  rtl:right-auto rtl:left-0
               z-50 border-[1px] border-zinc-200/50 bg-light 
               dark:bg-dark-800 dark:border-zinc-700"
          childrenTagName=".profile-link"
          header={
            <div className="flex justify-start items-center group">
              <div className="w-[35px] md:w-[25px] aspect-square">
                <Pic
                  src={"/images/profile.jpg"}
                  alt="profile"
                  width={85}
                  height={85}
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
              <div className="ms-2 flex justify-start items-start flex-col md:hidden">
                <h3
                  className="duration-200 transition-all group-hover:text-primary
                 text-sm font-semibold dark:text-zinc-400"
                >
                  {t({ key: "name" })}
                </h3>
                <span
                  className="text-[12px] text-zinc-500 
                duration-200 transition-all group-hover:text-primary"
                >
                  {t({ key: "role" })}{" "}
                  <ArrowDown2 className="ms-[2px] inline-block" size="10" />
                </span>
              </div>
            </div>
          }
        >
          {routes.map(({ href, icon: Icon, title }) => (
            <SidebarLink
              key={title}
              className="profile-link px-3 py-2 flex justify-start items-start
            group"
              href={href}
            >
              <Icon
                className={cls(
                  `me-2 duration-200 transition-all group-hover:text-primary`,
                  matchPath(href, pathname)
                    ? "text-primary"
                    : "text-zinc-500 dark:text-zinc-100"
                )}
                size="20"
              />
              <span
                className={cls(
                  `text-sm duration-200 transition-all group-hover:text-primary`,
                  matchPath(href, pathname)
                    ? "text-primary"
                    : "text-zinc-900 dark:text-zinc-100"
                )}
              >
                {t({ key: title })}
              </span>
            </SidebarLink>
          ))}
          <NavLink
            href={"/signin"}
            className="profile-link px-3 py-2 flex justify-start items-start
            group cursor-pointer"
          >
            <Logout
              className="me-2 duration-200 transition-all 
              group-hover:text-primary dark:text-zinc-100"
              size="20"
            />
            <span
              className="text-sm duration-200 transition-all 
            group-hover:text-primary dark:text-zinc-100"
            >
              {t({ key: "logout" })}
            </span>
          </NavLink>
        </MotionDropDown>
      </div>
    </>
  );
};
export default Profile;
