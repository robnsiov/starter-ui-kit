"use client";

import Countries from "./countries";
import Search from "./search";
import DarkModeToggle from "./dark-mode-toggle";
import Notification from "./notification";
import Profile from "./profile";
import MenuIcon from "./menu-icon";
import SettingsIocns from "./settings";
import useHeader from "./use";
import cls from "classnames";

const Header = () => {
  const { layout, border } = useHeader();
  return (
    <>
      <div
        className={cls(
          `fixed top-0 h-[74px] md:h-[54px] dark:bg-dark-800
      flex justify-end items-start rtl:items-end z-40`,
          border === "true"
            ? "ms-border mt-border w-[calc(100%-200px)] lg:!w-[calc(100%-20px)]"
            : "w-full"
        )}
      >
        <div
          className={cls(
            `h-full  relative
              border-b-[1px] border-zinc-200/60 dark:border-zinc-700 
      flex justify-between items-center py-4 px-5
      transition-all duration-300 bg-white dark:bg-dark w-full `,
            {
              "border-t-[1px] border-r-[1px] rounded-tr-xl border-zinc-200/60 rtl:border-r-0 rtl:border-l-[1px] rtl:rounded-tr-none rtl:rounded-tl-xl":
                border === "true",
            },
            { "w-[calc(100%-256px)] md:!w-full": layout === "cuba" },
            {
              "w-[calc(100%-100px)] md:!w-full":
                layout === "tokyo" || layout === "moscow",
            },
            {
              "!border-x-[1px] !rounded-t-xl": border === "true",
            }
          )}
        >
          {layout === "cuba" && <MenuIcon />}

          <div></div>
          <div className="flex justify-start items-center">
            <SettingsIocns />
            <Countries />
            <Search />
            <DarkModeToggle />
            <Notification />
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
