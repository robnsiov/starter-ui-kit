"use client";

import { ArrowRight2, Box1 } from "iconsax-react";
import { ImPushpin } from "react-icons/im";
import { Fragment } from "react";
import routes from "./routes";
import cls from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import SidebarLink from "@/components/shared/links/sidebar-link";
import useSidebar from "./use";

const Sidebar = () => {
  const {
    activeLevelOne,
    activeLevelThree,
    activeLevelTwo,
    activeRoute,
    pathname,
    sidebarStatus,
    viewportWidth,
    border,
  } = useSidebar();
  return (
    <>
      <div
        className={cls(
          `fixed left-0 top-0 bottom-0 w-[265px] -md rtl:left-auto rtl:right-0 
      dark:bg-dark overflow-hidden  
      z-50 transition-all duration-300 md:left-[-265px] rtl:md:right-[-265px] bg-white
      border-r-[1px] border-zinc-200/60 dark:border-zinc-700 rtl:border-r-0 rtl:border-l-[1px]`,
          sidebarStatus.close && viewportWidth < 767
            ? "left-[-256px] rtl:right-[-265px]"
            : "!left-0 rtl:!right-0",
          {
            "ms-border mt-border border-l-[1px] border-t-[1px] rounded-tl-xl  rtl:border-l-0 rtl:border-r-[1px] rtl:rounded-tl-none rtl:rounded-tr-xl":
              border === "true",
          }
        )}
      >
        <div className="w-full h-full flex items-start justify-start flex-col">
          <div
            className="w-full flex justify-between items-center h-[79px] 
          py-4 px-5  dark:bg-dark"
          >
            <span className="font-semibold text-lg"></span>
            <div className="flex justify-center items-center group cursor-pointer">
              <Box1
                className="text-zinc-800 transition-all 
              duration-200 hover:text-primary relative z-10 dark:text-primary"
              />
              <span
                className="absolute w-[40px] aspect-square 
              bg-pink-50 rounded-full transition-all duration-200
                scale-0 group-hover:scale-100 dark:bg-indigo-600/10"
              ></span>
            </div>
          </div>

          <div className="w-full h-full flex justify-start items-start flex-col">
            {routes.map(({ id, subject, children }) => (
              <Fragment key={id}>
                <div className="w-full px-4">
                  <div className="w-full">
                    <h2
                      className="text-sm font-bold text-slate-700 pb-1 mb-3
                    mt-3 dark:border-zinc-600 dark:text-zinc-400"
                    >
                      {subject}
                    </h2>
                  </div>
                </div>
                {children.map(
                  ({
                    id: levelOneId,
                    href,
                    title,
                    children,
                    label,
                    icon: Icon,
                  }) => (
                    <Fragment key={levelOneId}>
                      <div className="w-full flex justify-start items-start flex-col">
                        <SidebarLink href={href} className="w-full">
                          <div
                            className={cls(
                              `w-full flex justify-between items-center px-4 py-2.5 group 
                      hover:bg-[#F5F4FF] dark:hover:bg-indigo-500/10 transition-all duration-200 relative`,
                              {
                                "bg-[#F5F4FF] dark:bg-indigo-500/20":
                                  activeRoute.levelOne === levelOneId ||
                                  pathname === href,
                              }
                            )}
                            onClick={() => activeLevelOne(levelOneId)}
                          >
                            <span
                              className={cls(
                                `absolute top-1 right-0 rtl:right-auto rtl:left-0 bottom-1 w-1 transition-all duration-200
                          rounded-l-md bg-indigo-500 opacity-0 rtl:rounded-l-none rtl:rounded-r-md`,
                                activeRoute.levelOne === levelOneId ||
                                  pathname === href
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            ></span>
                            <div className="flex justify-start items-center">
                              <Icon
                                className={cls(
                                  `me-4 transition-all duration-200 group-hover:text-primary
                                  dark:text-zinc-300`,
                                  {
                                    "text-primary":
                                      activeRoute.levelOne === levelOneId ||
                                      pathname === href,
                                  }
                                )}
                                size="18"
                              />
                              <span
                                className={cls(
                                  `text-sm font-semibold transition-all duration-200
                   tracking-wider group-hover:text-primary dark:text-zinc-400`,
                                  activeRoute.levelOne === levelOneId ||
                                    pathname === href
                                    ? "text-primary"
                                    : "text-zinc-500"
                                )}
                              >
                                {title}
                              </span>
                            </div>
                            <div className="flex justify-start items-center">
                              {label && (
                                <span
                                  className="bg-pink-50 dark:bg-pink-700/10 text-[10px] tracking-wide font-bold rounded-lg 
              text-red-500 py-0.5 px-2"
                                >
                                  New
                                </span>
                              )}

                              <ImPushpin
                                size="12"
                                className={`-rotate-45 mx-1 opacity-0 group-hover:opacity-100
                   transition-all duration-200
                    text-indigo-600 dark:text-indigo-500`}
                              />
                              <ArrowRight2
                                size="12"
                                className={cls(
                                  `transition-all duration-200
                    group-hover:text-indigo-600 dark:text-zinc-400`,
                                  {
                                    "opacity-0":
                                      children === undefined ||
                                      children?.length === 0,
                                  },

                                  activeRoute.levelOne === levelOneId ||
                                    pathname === href
                                    ? "text-primary rotate-90"
                                    : "text-zinc-500 rtl:rotate-180"
                                )}
                              />
                            </div>
                          </div>
                        </SidebarLink>
                        <AnimatePresence>
                          {activeRoute.levelOne === levelOneId && (
                            <motion.div
                              style={{ overflow: "hidden" }}
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              transition={{ duration: 0.5 }}
                              className="w-full"
                              exit={{ height: 0 }}
                              key={"container"}
                            >
                              <div className="w-full justify-start items-center flex-col relative">
                                {children?.map(
                                  ({
                                    id: levelTwoId,
                                    href,
                                    title,
                                    children,
                                  }) => (
                                    <Fragment key={levelTwoId}>
                                      <div className="w-full justify-start items-start flex-col">
                                        <SidebarLink
                                          href={href}
                                          className="w-full"
                                        >
                                          <div
                                            onClick={() =>
                                              activeLevelTwo(
                                                levelOneId,
                                                levelTwoId
                                              )
                                            }
                                            className="w-full px-4 ps-6 py-2 flex justify-between items-center group"
                                          >
                                            <div className="w-full flex justify-start items-center">
                                              <span
                                                className="inline-block w-2 h-[1px] border-b-[1px] 
                                              border-zinc-300 me-3 dark:border-zinc-600"
                                              ></span>
                                              <h3
                                                className={cls(
                                                  `text-sm font-semibold 
                                        transition-all duration-200
                                        group-hover:text-primary relative`,
                                                  activeRoute.levelTwo ===
                                                    levelTwoId ||
                                                    pathname === href
                                                    ? "text-primary"
                                                    : "text-zinc-500"
                                                )}
                                              >
                                                {title}
                                                <span
                                                  className={cls(
                                                    `w-1 aspect-square bg-primary absolute
                                              top-1/2 -translate-y-1/2
                                               -left-[22px] rtl:left-auto rtl:-right-[21.5px] rounded-full z-10 
                                               transition-all duration-200`,
                                                    activeRoute.levelTwo ===
                                                      levelTwoId ||
                                                      pathname === href
                                                      ? "opacity-100"
                                                      : "opacity-0"
                                                  )}
                                                ></span>
                                              </h3>
                                            </div>
                                            <ArrowRight2
                                              size="12"
                                              className={cls(
                                                `transition-all duration-200 dark:text-zinc-400`,
                                                {
                                                  "opacity-0":
                                                    children === undefined ||
                                                    children?.length === 0,
                                                },
                                                activeRoute.levelTwo ===
                                                  levelTwoId ||
                                                  pathname === href
                                                  ? "text-primary rotate-90"
                                                  : "text-zinc-500"
                                              )}
                                            />
                                          </div>
                                        </SidebarLink>
                                        <AnimatePresence>
                                          {activeRoute.levelTwo ===
                                            levelTwoId && (
                                            <motion.div
                                              style={{ overflow: "hidden" }}
                                              initial={{ height: 0 }}
                                              animate={{ height: "auto" }}
                                              transition={{ duration: 0.5 }}
                                              exit={{ height: 0 }}
                                              key={"container"}
                                            >
                                              <div className="w-full flex justify-start items-start flex-col ms-12">
                                                {children?.map(
                                                  ({
                                                    id: levelThreeId,
                                                    href,
                                                    title,
                                                  }) => (
                                                    <Fragment
                                                      key={levelThreeId}
                                                    >
                                                      <SidebarLink
                                                        href={href}
                                                        className="w-full"
                                                      >
                                                        <div
                                                          className="w-full group py-1.5"
                                                          onClick={() =>
                                                            activeLevelThree(
                                                              levelOneId,
                                                              levelTwoId,
                                                              levelThreeId
                                                            )
                                                          }
                                                        >
                                                          <span
                                                            className={cls(
                                                              `text-sm font-semibold 
                      transition-all duration-200 group-hover:text-primary`,
                                                              activeRoute.levelThree ===
                                                                levelThreeId ||
                                                                pathname ===
                                                                  href
                                                                ? "text-primary"
                                                                : "text-zinc-500"
                                                            )}
                                                          >
                                                            {title}
                                                          </span>
                                                        </div>
                                                      </SidebarLink>
                                                    </Fragment>
                                                  )
                                                )}
                                              </div>
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </div>
                                    </Fragment>
                                  )
                                )}
                                <span
                                  className="absolute left-6 top-0 bottom-[18px] 
                                w-[1px] bg-zinc-300 rtl:left-auto rtl:right-6 dark:bg-zinc-600"
                                ></span>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </Fragment>
                  )
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
