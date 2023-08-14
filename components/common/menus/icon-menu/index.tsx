"use client";

import SidebarLink from "@/components/shared/links/sidebar-link";
import { ArrowRight2, Box1, Home } from "iconsax-react";
import { ImPushpin } from "react-icons/im";
import routes from "../sidebar/routes";
import { Fragment } from "react";
import useMenuIcon from "./use";
import cls from "classnames";
import { AnimatePresence, motion } from "framer-motion";

const IconMenu = () => {
  const {
    pathname,
    selectedChildren,
    toggleChildren,
    activeSubChilrenId,
    toggleActiveId,
    dir,
  } = useMenuIcon();
  return (
    <>
      <AnimatePresence>
        {selectedChildren.length !== 0 && (
          <>
            <motion.div
              className="fixed left-[100px] top-0 bottom-0 w-[200px] shadow-md rtl:left-auto rtl:right-[100px]               
      dark:bg-dark overflow-hidden dark:shadow-zinc-600/10
      z-50  py-5 bg-white dark:shadow-none"
              initial={{ x: dir === "ltr" ? -200 : 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ x: dir === "ltr" ? -200 : 200, opacity: 0 }}
            >
              <div className="w-full">
                <div className="relative w-full flex justify-center items-center flex-col">
                  {selectedChildren.map(({ href, id, title, children }) => (
                    <Fragment key={id}>
                      <div
                        className="w-full border-b-[1px] border-zinc-100 dark:border-zinc-700
              last:border-none relative"
                      >
                        <SidebarLink
                          href={href}
                          className="py-3 px-4 
          w-[calc(100%-25px)] flex justify-start items-center group"
                        >
                          <span className="w-2 border-b-2 border-zinc-300 me-3"></span>
                          <span
                            className={cls(
                              `text-sm text-zinc-800 tracking-wide
          duration-200 transition-all group-hover:text-primary w-full truncate font-semibold dark:text-zinc-300`,
                              {
                                "text-primary tracking-widest":
                                  pathname === href,
                              }
                            )}
                          >
                            {title}
                          </span>
                        </SidebarLink>
                        {children && children.length !== 0 && (
                          <div
                            onClick={() => toggleActiveId(id)}
                            className={cls(
                              `absolute right-2 top-[17px]
                      transition-all duration-300
          cursor-pointer z-20 rtl:right-auto rtl:left-2 rtl:-scale-100`,
                              {
                                "rotate-90 rtl:-rotate-90":
                                  activeSubChilrenId === id,
                              }
                            )}
                          >
                            <ArrowRight2
                              size="12"
                              className="
            text-zinc-500 cursor-pointer hover:text-zinc-800 dark:hover:text-white"
                            />
                          </div>
                        )}
                      </div>
                      <AnimatePresence>
                        {activeSubChilrenId === id && children && (
                          <motion.div
                            style={{ overflow: "hidden" }}
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                            exit={{ height: 0 }}
                          >
                            <div className="w-full">
                              {children.map(({ href, id, title }) => (
                                <div
                                  className="w-full justify-center items-center flex-col"
                                  key={id}
                                >
                                  <SidebarLink
                                    href={href}
                                    className="w-full border-b-[1px] border-zinc-100
                                    dark:border-zinc-700
            flex justify-start items-center"
                                  >
                                    <span
                                      className={cls(
                                        `py-3 px-4 pl-10 text-sm text-zinc-800 tracking-wide
          duration-200 transition-all hover:text-primary w-full truncate font-semibold dark:text-zinc-300`,
                                        {
                                          "text-primary tracking-widest":
                                            pathname === href,
                                        }
                                      )}
                                    >
                                      {title}
                                    </span>
                                  </SidebarLink>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Fragment>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div
        className={`fixed left-0 top-0 bottom-0 w-[100px] shadow-md rtl:left-auto rtl:right-0 
      dark:bg-dark overflow-hidden dark:shadow-zinc-600/10 dark:shadow-none
      dark:border-r-[1px] dark:border-zinc-600/20
      z-50 transition-all duration-300 md:left-[-100px] rtl:md:right-[-100px] bg-white`}
      >
        <div className="w-full h-full flex items-start justify-start flex-col">
          <div
            className="w-full flex justify-center items-center h-[79px] 
          py-4 px-5 shadow-sm dark:shadow-zinc-600/10 dark:shadow-xl mb-1 dark:bg-dark"
          >
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
            {routes.map(({ children, id }) => (
              <Fragment key={id}>
                {children.map(
                  ({ href, icon: Icon, id, title, label, children }) => (
                    <SidebarLink
                      onClick={() => {
                        if (children) toggleChildren(children);
                      }}
                      key={id}
                      href={href}
                      className={cls(
                        `w-full flex justify-center 
              items-center flex-col px-1.5
               py-4 border-b-[1px] border-zinc-200 
               last:border-none group relative dark:border-zinc-700`,
                        {
                          "bg-indigo-100/50 dark:bg-dark-800":
                            pathname === href,
                        }
                      )}
                    >
                      {label && (
                        <span
                          className="bg-pink-50 dark:bg-pink-700/10
                   text-[10px] tracking-wide font-bold rounded-lg 
              text-red-500 py-0.5 px-2 absolute top-2 right-2.5"
                        >
                          {label}
                        </span>
                      )}

                      <div
                        className="bg-indigo-100 w-5 h-5 flex justify-center opacity-0
                items-center  rounded-full absolute top-2 
                transition-all duration-200
                right-7 group-hover:opacity-100 z-20"
                      >
                        <ImPushpin
                          size="12"
                          className={`-rotate-45 mx-1  group-hover:opacity-100
                   transition-all duration-200
                    text-indigo-600`}
                        />
                      </div>
                      <div className="relative">
                        <Icon
                          className={cls(`dark:text-white`, {
                            "text-primary": pathname === href,
                          })}
                        />
                      </div>
                      <h2
                        className={cls(
                          `text-sm font-semibold mt-2 text-zinc-800 
              tracking-wide duration-200 transition-all
               group-hover:text-primary w-full
              truncate px-1 text-center dark:text-zinc-300`,
                          { "text-primary": pathname === href }
                        )}
                      >
                        {title}
                      </h2>
                    </SidebarLink>
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
export default IconMenu;
