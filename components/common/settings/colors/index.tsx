import ColorsImpl from "./type";
import cls from "classnames";

const Colros = ({ color }: ColorsImpl) => {
  return (
    <>
      {color === "Unlimited" ? (
        <>
          <div className="w-full flex justify-start items-center">
            <div
              className="w-[35px] h-[35px] border-zinc-200 
            border-[1px] rounded-md p-[3px] me-2"
            >
              <div className="w-full h-full rounded-md bg-red-200 overflow-hidden">
                <input
                  type="color"
                  className="w-full h-full bg-white scale-[2]"
                />
              </div>
            </div>
            <div
              className="w-[35px] h-[35px] border-zinc-200 
            border-[1px] rounded-md p-[3px] me-2"
            >
              <div className="w-full h-full rounded-md bg-red-200 overflow-hidden">
                <input
                  type="color"
                  className="w-full h-full bg-white scale-[2]"
                />
              </div>
            </div>
            <div
              className="px-4 py-1.5 cursor-pointer rounded-md 
            bg-primary text-white text-sm"
            >
              Apply
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full flex justify-start items-center flex-wrap">
            <div
              className={cls(
                `w-[35px] h-[35px] rounded-md 
          border-zinc-200 border-[1px] p-[3px] me-1`,
                color === "Light" ? "bg-white" : "bg-zinc-600/95"
              )}
            >
              <div className="w-full h-full bg-indigo-400 rounded-md"></div>
            </div>
            <div
              className={cls(
                `w-[35px] h-[35px] rounded-md 
          border-zinc-200 border-[1px] p-[3px] me-1`,
                color === "Light" ? "bg-white" : "bg-zinc-600/95"
              )}
            >
              <div className="w-full h-full bg-indigo-600 rounded-md"></div>
            </div>
            <div
              className={cls(
                `w-[35px] h-[35px] rounded-md 
          border-zinc-200 border-[1px] p-[3px] me-1`,
                color === "Light" ? "bg-white" : "bg-zinc-600/95"
              )}
            >
              <div className="w-full h-full bg-purple-600 rounded-md"></div>
            </div>
            <div
              className={cls(
                `w-[35px] h-[35px] rounded-md 
          border-zinc-200 border-[1px] p-[3px] me-1`,
                color === "Light" ? "bg-white" : "bg-zinc-600/95"
              )}
            >
              <div className="w-full h-full bg-blue-600 rounded-md"></div>
            </div>
            <div
              className={cls(
                `w-[35px] h-[35px] rounded-md 
          border-zinc-200 border-[1px] p-[3px] me-1`,
                color === "Light" ? "bg-white" : "bg-zinc-600/95"
              )}
            >
              <div className="w-full h-full bg-blue-800 rounded-md"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Colros;
