import LayoutImpl from "./types";
import cls from "classnames";

const Layouts = ({ layout, active }: LayoutImpl) => {
  return (
    <>
      <div
        className={cls(
          `bg-white flex justify-start items-center flex-col 
        cursor-pointer me-2 mb-2
      rounded-md  border-[1px] p-1 w-[83.6px] border-zinc-100
       transition-all duration-200 dark:border-zinc-800`,
          active ? "shadow-lg dark:shadow-zinc-100/40" : ""
        )}
      >
        <div
          className={cls(
            `h-[9px]  rounded-sm bg-zinc-100
      flex justify-start items-center mb-1`,
            layout === "Box" ? "w-[55px]" : "w-[74px]",
            layout === "Dark" ? "bg-zinc-600/95" : "bg-zinc-100"
          )}
        >
          <span className="w-1 h-1 rounded-full bg-primary ms-2 me-[3px]"></span>
          <span className="w-1 h-1 rounded-full bg-red-400 me-[3px]"></span>
          <span className="w-1 h-1 rounded-full bg-green-400"></span>
        </div>
        {layout === "LTR" && (
          <div className="w-full flex justify-between items-center relative">
            <div className="w-[18px] h-[38px] bg-zinc-100 rounded-sm"></div>
            <div className="w-[51px] h-[38px] bg-zinc-100 rounded-sm"></div>
            <span
              className="absolute top-1/2 -translate-y-1/2
           text-[10px] ms-8 text-white bg-primary px-2 py-0.5 rounded-md"
            >
              LTR
            </span>
          </div>
        )}
        {layout === "RTL" && (
          <div className="w-full flex justify-between items-center relative">
            <div className="w-[51px] h-[38px] bg-zinc-100 rounded-sm"></div>
            <div className="w-[18px] h-[38px] bg-zinc-100 rounded-sm"></div>
            <span
              className="absolute top-1/2 -translate-y-1/2
           text-[10px] ms-2 text-white bg-primary px-2 py-0.5 rounded-md"
            >
              RTL
            </span>
          </div>
        )}
        {layout === "Box" && (
          <div className="w-full flex justify-between items-center relative px-2.5">
            <div className="w-[17px] h-[38px] bg-zinc-100 rounded-sm"></div>
            <div className="w-[28px] h-[38px] bg-zinc-100 rounded-sm"></div>
            <span
              className="absolute top-1/2 -translate-y-1/2
           text-[10px] ms-2 text-white bg-primary px-2 py-0.5 rounded-md"
            >
              Box
            </span>
          </div>
        )}
        {layout === "Row" && (
          <div className="w-full flex justify-between items-center flex-col">
            <div className="w-full h-[10px] bg-zinc-600/95 rounded-sm"></div>
            <div className="w-full h-[24px] bg-zinc-100 rounded-sm mt-1"></div>
          </div>
        )}
        {layout === "Column" && (
          <div className="w-full flex justify-between items-center relative">
            <div className="w-[10px] h-[38px] bg-zinc-600/95 rounded-sm"></div>
            <div className="w-[59px] h-[38px] bg-zinc-100 rounded-sm"></div>
          </div>
        )}
        {(layout === "Stroke" || layout === "Fill") && (
          <div className="w-full flex justify-between items-center relative">
            <div className="w-full h-[38px] bg-zinc-100 rounded-sm"></div>
            <span
              className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
           text-[10px]  text-white bg-primary px-2 py-0.5 rounded-md"
            >
              {layout === "Stroke" ? "Stroke" : "Fill"}
            </span>
          </div>
        )}
        {layout === "Light" && (
          <div className="w-full flex justify-between items-center relative">
            <div className="w-[18px] h-[38px] bg-zinc-100 rounded-sm"></div>
            <div className="w-[51px] h-[38px] bg-zinc-100 rounded-sm"></div>
          </div>
        )}
        {layout === "Half-Dark" && (
          <div className="w-full flex justify-between items-center relative">
            <div className="w-[18px] h-[38px] bg-zinc-600/95 rounded-sm"></div>
            <div className="w-[51px] h-[38px] bg-zinc-100 rounded-sm"></div>
          </div>
        )}
        {layout === "Dark" && (
          <div className="w-full flex justify-between items-center relative">
            <div className="w-[18px] h-[38px] bg-zinc-600/95 rounded-sm"></div>
            <div className="w-[51px] h-[38px] bg-zinc-600/95 rounded-sm"></div>
          </div>
        )}
      </div>
    </>
  );
};
export default Layouts;
