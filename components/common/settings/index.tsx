"use client";
import useSettings from "./use";
import { LiaTimesSolid } from "react-icons/lia";
import { BiColorFill } from "react-icons/bi";
import Layouts from "./layouts";
import Colros from "./colors";
import Tab from "./tab";
import { FiSettings } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import cls from "classnames";
import { layoutes } from "@/constants/settings";

const Settings = () => {
  const {
    primaryLighten,
    selectedTab,
    setSelectedTab,
    openMenu,
    setOpenMenu,
    setLayout,
    activeLayout,
  } = useSettings();

  return (
    <>
      <div>
        <div
          className={cls(
            `fixed top-[70px] md:top-[53px]
       bottom-0 shadow-md shadow-indigo-100 duration-200 transition-all
      bg-white dark:bg-dark w-[343px] z-30`,
            openMenu
              ? "right-0 rtl:right-auto rtl:left-0"
              : "right-[-343px] 460px:right-[-100%] rtl:right-auto rtl:left-[-343px] 460px:rtl:left-[-100%]",
            activeLayout === "tokyo" || activeLayout === "moscow"
              ? "460px:w-[calc(100%-40px)]"
              : "460px:w-full"
          )}
        >
          <div
            className={cls(
              `w-full flex justify-start items-start flex-col py-4
            px-6 relative
          border-b-[1px] border-zinc-100 dark:border-zinc-600`,
              {
                "460px:-top-[2.4px]":
                  activeLayout === "tokyo" || activeLayout === "moscow",
              }
            )}
          >
            <h2 className="text-xl font-semibold relative w-full">
              <span className="dark:text-zinc-400">PREVIEW SETTINGS</span>
              <LiaTimesSolid
                onClick={() => setOpenMenu(false)}
                className="absolute top-0 right-0
              rtl:left-0 rtl:right-auto text-primary cursor-pointer"
              />
            </h2>
            <div>
              <span className="text-sm text-zinc-700 dark:text-zinc-300">
                Try It Real Time
              </span>
            </div>
          </div>
          <div className="w-full overflow-y-auto h-[calc(100vh-163px)]">
            <AnimatePresence>
              {selectedTab === "options" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  exit={{ opacity: 0 }}
                  key={"container"}
                >
                  <div className="w-full px-6 py-4 justify-start items-start flex-col">
                    <div className="flex justify-start items-start flex-col mb-4">
                      <h3 className="font-semibold text-zinc-700 text-sm dark:text-zinc-400">
                        LAYOUT TYPE
                      </h3>
                      <div className="flex justify-start items-center flex-wrap mt-2">
                        <Layouts layout="LTR" active={false} />
                        <Layouts layout="RTL" active={true} />
                        <Layouts layout="Box" active={false} />
                      </div>
                    </div>
                    <div className="flex justify-start items-start flex-col flex-wrap mb-2">
                      <h3 className="font-semibold text-zinc-700 text-sm dark:text-zinc-400">
                        SIDEBAR TYPE
                      </h3>
                      <div className="flex justify-start items-center mt-2">
                        <Layouts layout="Row" active={false} />
                        <Layouts layout="Column" active={true} />
                      </div>
                    </div>
                    <div className="flex justify-start items-start flex-col flex-wrap mb-2">
                      <h3 className="font-semibold text-zinc-700 text-sm dark:text-zinc-400">
                        SIDEBAR ICON
                      </h3>
                      <div className="flex justify-start items-center mt-2">
                        <Layouts layout="Stroke" active={false} />
                        <Layouts layout="Fill" active={true} />
                      </div>
                    </div>
                    <div className="flex justify-start items-start flex-col flex-wrap mb-4">
                      <h3 className="font-semibold text-zinc-700 text-sm dark:text-zinc-400">
                        UNLIMITED COLOR
                      </h3>
                      <div className="flex justify-start items-center mt-1">
                        <Colros color="Unlimited" />
                      </div>
                    </div>
                    <div className="flex justify-start items-start flex-col flex-wrap mb-4">
                      <h3 className="font-semibold text-zinc-700 text-sm dark:text-zinc-400">
                        LIGHT LAYOUT
                      </h3>
                      <div className="flex justify-start items-center mt-1">
                        <Colros color="Light" />
                      </div>
                    </div>
                    <div className="flex justify-start items-start flex-col flex-wrap mb-4">
                      <h3 className="font-semibold text-zinc-700 text-sm dark:text-zinc-400">
                        Dark LAYOUT
                      </h3>
                      <div className="flex justify-start items-center mt-1">
                        <Colros color="Dark" />
                      </div>
                    </div>
                    <div className="flex justify-start items-start flex-col flex-wrap mb-2">
                      <h3 className="font-semibold text-zinc-700 text-sm dark:text-zinc-400">
                        MIX LAYOUT
                      </h3>
                      <div className="flex justify-start items-center flex-wrap mb-2">
                        <Layouts layout="Light" active={false} />
                        <Layouts layout="Half-Dark" active={false} />
                        <Layouts layout="Dark" active={false} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {selectedTab === "layouts" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  exit={{ opacity: 0 }}
                  key={"container"}
                >
                  <div
                    className="w-full flex justify-start items-start flex-col
             space-y-4 px-6 py-4"
                  >
                    {layoutes.map(({ label, pic }) => (
                      <div
                        onClick={() => setLayout(label)}
                        key={label}
                        className={cls(
                          `w-full border-[1px] 
              border-zinc-100 rounded-md
               flex justify-center items-center 
               flex-col text-center p-1 
                cursor-pointer
               duration-200 transition-all shadow-lg
               hover:shadow-indigo-100 dark:shadow-zinc-500`,
                          {
                            "!border-indigo-400 !border-2":
                              activeLayout === label,
                          }
                        )}
                      >
                        <div className="w-full bg-indigo-100 aspect-video overflow-hidden rounded-md"></div>
                        <span className="mt-2 mb-1 font-medium dark:text-zinc-400">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div
            className="absolute top-1/2 -translate-y-1/2 left-[-50px] rtl:left-auto rtl:right-[-50px]
      shadow-md shadow-zinc-400/30 p-2 rounded-l-md flex justify-start 
      items-start flex-col md:hidden bg-white dark:bg-dark-800 
      rtl:rounded-l-none rtl:rounded-r-md"
          >
            <Tab
              Icon={BiColorFill}
              title="Check layouts"
              active={true}
              primaryLighten={primaryLighten}
              onClick={() => setSelectedTab("layouts")}
            />
            <Tab
              Icon={FiSettings}
              title="Quick options"
              active={true}
              size="18"
              primaryLighten={primaryLighten}
              onClick={() => setSelectedTab("options")}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Settings;
