"use client";

import Countries from "./countries";
import Search from "./search";
import DarkModeToggle from "./dark-mode-toggle";
import Notification from "./notification";
import Profile from "./profile";

const Header = () => {
  return (
    <>
      <div
        className="fixed top-0 right-0 left-[265px] h-[74px] shadow-sm
      flex justify-between items-center py-4 px-5"
      >
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
