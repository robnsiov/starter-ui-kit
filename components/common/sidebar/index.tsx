"use client";

import { Home2, ArrowRight2, Box1 } from "iconsax-react";
import { ImPushpin } from "react-icons/im";
import { useEffect } from "react";
import { SiWindows11 } from "react-icons/si";

const Sidebar = () => {
  useEffect(() => {
    const color = "#d536cd";
    document.documentElement.style.setProperty("--primary", color);
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 bottom-0 w-[265px] shadow-md">
        <div className="w-full flex items-start justify-start flex-col">
          <div className="w-full flex justify-between items-center h-[79px] py-4 px-5">
            <span className="font-semibold text-lg"></span>
            <div className="flex justify-center items-center group">
              <Box1
                className="text-zinc-800 transition-all 
              duration-200 hover:text-primary relative z-10"
              />
              <span
                className="absolute w-[40px] aspect-square 
              bg-pink-50 rounded-full transition-all duration-200
                scale-0 group-hover:scale-100"
              ></span>
            </div>
          </div>
          {/* <div className="w-full justify-start items-start flex-col">
            <div className="w-full px-4">
              <div className="w-full">
                <h2 className="text-sm font-bold text-slate-700 pb-1 pt-4 border-t-[1px] border-zinc-200">
                  GENERAL
                </h2>
              </div>
            </div>
            <div
              className="w-full flex justify-between items-center p-4 group 
          hover:bg-[#F5F4FF] transition-all duration-200"
            >
              <div className="flex justify-start items-center">
                <Home2
                  className={
                    "me-4 transition-all duration-200 group-hover:text-primary"
                  }
                  size="18"
                />
                <span
                  className={`text-sm font-semibold text-zinc-500 transition-all duration-200
                   tracking-wider group-hover:text-primary`}
                >
                  Dashboard
                </span>
              </div>
              <div className="flex justify-start items-center">
                <span
                  className="bg-pink-50 text-[10px] tracking-wide font-bold rounded-lg 
              text-red-500 py-0.5 px-2"
                >
                  New
                </span>
                <ImPushpin
                  size="12"
                  className={`-rotate-45 mx-1 opacity-0 group-hover:opacity-100
                   transition-all duration-200
                    text-indigo-600`}
                />
                <ArrowRight2
                  size="12"
                  className={`text-zinc-500 transition-all duration-200
                    group-hover:text-indigo-600`}
                />
              </div>
            </div>
          </div> */}
          <div className="w-full justify-start items-start flex-col">
            <div className="w-full px-4">
              <div className="w-full">
                <h2 className="text-sm font-bold text-slate-700 pb-1 pt-4 border-t-[1px] border-zinc-200">
                  GENERAL
                </h2>
              </div>
            </div>
            <div className="w-full flex justify-start items-start flex-col">
              <div
                className="w-full flex justify-between items-center p-4 group 
          hover:bg-[#F5F4FF] transition-all duration-200"
              >
                <div className="flex justify-start items-center">
                  <Home2
                    className={
                      "me-4 transition-all duration-200 group-hover:text-primary"
                    }
                    size="18"
                  />
                  <span
                    className={`text-sm font-semibold text-zinc-500 transition-all duration-200
                   tracking-wider group-hover:text-primary`}
                  >
                    Dashboard
                  </span>
                </div>
                <div className="flex justify-start items-center">
                  <span
                    className="bg-pink-50 text-[10px] tracking-wide font-bold rounded-lg 
              text-red-500 py-0.5 px-2"
                  >
                    New
                  </span>
                  <ImPushpin
                    size="12"
                    className={`-rotate-45 mx-1 opacity-0 group-hover:opacity-100
                   transition-all duration-200
                    text-indigo-600`}
                  />
                  <ArrowRight2
                    size="12"
                    className={`text-zinc-500 transition-all duration-200
                    group-hover:text-indigo-600`}
                  />
                </div>
              </div>
              <div className="w-full justify-start items-center flex-col relative">
                <div className="w-full justify-start items-start flex-col">
                  <div className="w-full px-4 py-2 flex justify-between items-center group">
                    <div className="w-full flex justify-start items-center">
                      <span className="inline-block w-2 h-[1px] bg-zinc-300 me-3"></span>
                      <h3
                        className="text-zinc-500 text-sm font-semibold transition-all duration-200
                    group-hover:text-primary relative"
                      >
                        Forms
                        <span
                          className="w-1 aspect-square bg-primary absolute
                  top-1/2 -translate-y-1/2 -left-[22px] rounded-full z-10"
                        ></span>
                      </h3>
                    </div>
                    <ArrowRight2
                      size="12"
                      className="text-zinc-500 transition-all duration-200"
                    />
                  </div>
                  <div className="w-full flex justify-start items-start flex-col ms-11">
                    <div className="w-full group py-1.5">
                      <span
                        className="text-sm font-semibold text-zinc-500 
                      transition-all duration-200 group-hover:text-primary"
                      >
                        FormValidation
                      </span>
                    </div>
                    <div className="w-full group py-1.5">
                      <span
                        className="text-sm font-semibold text-zinc-500 
                      transition-all duration-200 group-hover:text-primary"
                      >
                        FormValidation
                      </span>
                    </div>
                  </div>
                </div>
                <span className="absolute left-4 top-0 bottom-[18px] w-[1px] bg-zinc-300"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
