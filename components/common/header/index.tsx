"use client";

import Countries from "./countries";
import Search from "./search";
import DarkModeToggle from "./dark-mode-toggle";
import Notification from "./notification";
import Profile from "./profile";
import MenuIcon from "./menu-icon";

const Header = () => {
  return (
    <>
      <div
        className="fixed top-0 right-0 rtl:left-0 rtl:right-[256px]
         left-[265px] h-[74px] shadow-sm
      flex justify-between items-center py-4 px-5 z-40 
      md:left-0 rtl:md:right-0 
      transition-all duration-500 md:h-[54px] bg-white dark:bg-dark"
      >
        <MenuIcon />
        <div></div>
        <div className="flex justify-start items-center">
          <Countries />
          <Search />
          <DarkModeToggle />
          <Notification />
          <Profile />
        </div>
      </div>
    </>
  );
};
export default Header;
