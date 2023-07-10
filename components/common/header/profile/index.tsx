"use client";
import MotionDropDown from "@/components/shared/dropdowns/motion-dropdown";
import SidebarLink from "@/components/shared/links/sidebar-link";
import { ArrowDown2, Logout } from "iconsax-react";
import routes from "./routes";
import useProfile from "./use";
import cls from "classnames";

const Profile = () => {
  const { pathname } = useProfile();
  return (
    <>
      <div className="flex justify-start items-center cursor-pointer ms-3 relative">
        <MotionDropDown
          className="absolute top-11 w-[150px] rounded-md right-0  
               z-50 border-[1px] border-zinc-200/50 bg-white"
          childrenTagName=".profile-link"
          header={
            <div className="flex justify-start items-center">
              <div className="h-[35px] aspect-square bg-red-200 rounded-full"></div>
              <div className="ms-2 flex justify-start items-start flex-col">
                <h3 className="text-sm font-semibold">Emay Walter</h3>
                <span className="text-[12px] text-zinc-500">
                  Admin{" "}
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
                  pathname === href ? "text-primary" : "text-zinc-500"
                )}
                size="20"
              />
              <span
                className={cls(
                  `text-sm duration-200 transition-all group-hover:text-primary`,
                  pathname === href ? "text-primary" : "text-zinc-900"
                )}
              >
                {title}
              </span>
            </SidebarLink>
          ))}
          <div
            className="profile-link px-3 py-2 flex justify-start items-start
            group cursor-pointer"
          >
            <Logout
              className="me-2 duration-200 transition-all group-hover:text-primary"
              size="20"
            />
            <span className="text-sm duration-200 transition-all group-hover:text-primary">
              Logout
            </span>
          </div>
        </MotionDropDown>
      </div>
    </>
  );
};
export default Profile;
