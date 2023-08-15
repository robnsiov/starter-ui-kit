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
  const { layout } = useHeader();
  return (
    <>
      <div
        className="fixed top-0 right-0 left-0 h-[74px] md:h-[54px]
      flex justify-end items-start rtl:items-end  z-40 "
      >
        <div
          className={cls(
            `h-full  relative
              border-b-[1px] border-zinc-200/60 dark:border-zinc-700 
      flex justify-between items-center py-4 px-5
      transition-all duration-300 bg-white dark:bg-dark`,
            { "w-[calc(100%-256px)] md:!w-full": layout === "cuba" },
            {
              "w-[calc(100%-100px)] md:!w-full":
                layout === "tokyo" || layout === "moscow",
            },
            { "w-full": layout === "singapore" }
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
