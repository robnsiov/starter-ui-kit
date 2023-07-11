import MotionDropDown from "@/components/shared/dropdowns/motion-dropdown";
import { NotificationBing } from "iconsax-react";

const Notification = () => {
  return (
    <>
      <div className="relative ms-3">
        <MotionDropDown
          className="absolute top-7 w-[300px] rounded-md right-0 p-2 
               z-50 space-y-2 border-[1px] border-zinc-200/50"
          childrenTagName=".notification"
          header={
            <>
              <NotificationBing
                size="20"
                className="text-zinc-500 cursor-pointer animate-bell"
              />
              <span
                className="absolute top-[-7px] right-[-5px] text-[10px] 
              p-1 leading-[6px]
              font-semibold rounded-full
             bg-red-500 text-white"
              >
                8
              </span>
            </>
          }
        >
          <div
            className="notification w-full flex justify-between
                 items-center px-2 py-3
              bg-zinc-100/75 rounded relative"
          >
            <span
              className="absolute w-1 top-1.5 bottom-1.5 
                left-0 bg-red-500 rounded-r-md"
            ></span>
            <span className="text-sm ps-1">Order Complete</span>
            <span className="text-[10px] text-red-400">10ms</span>
          </div>
          <div
            className="notification w-full flex justify-between
                 items-center px-2 py-3
              bg-zinc-100/75 rounded relative"
          >
            <span
              className="absolute w-1 top-1.5 bottom-1.5 
                left-0 bg-indigo-500 rounded-r-md"
            ></span>
            <span className="text-sm ps-1">Order Complete</span>
            <span className="text-[10px] text-indigo-500">10ms</span>
          </div>
        </MotionDropDown>
      </div>
    </>
  );
};
export default Notification;
