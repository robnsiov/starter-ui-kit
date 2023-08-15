"use client";
import SidebarLink from "@/components/shared/links/sidebar-link";
import { ArrowLeft3, ArrowRight3 } from "iconsax-react";
import { Fragment, useRef } from "react";
import routes from "../sidebar/routes";
import MenuContainer from "./menu-container";
import MenuItem from "./menu-item";
import "./row-menu.css";
import useRowMenu from "./use";
import cls from "classnames";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useOnScreen from "@/hooks/use-on-screen/use-one-screen";

const RowMenu = () => {
  const {
    pathname,
    activeLevelOne,
    activeLevelThree,
    activeLevelTwo,
    activeRoute,
    dir,
  } = useRowMenu();
  const lastElementRef = useRef<HTMLDivElement>(null);
  const lastVisibleElement = useOnScreen(lastElementRef);

  const firstElementRef = useRef<HTMLDivElement>(null);
  const firstVisibleElement = useOnScreen(firstElementRef);

  const splide = useRef({ go(dir: string) {} });

  const goNext = () => {
    if (!lastVisibleElement) splide.current.go(">");
  };
  const goPrev = () => {
    if (!firstVisibleElement) splide.current.go("<");
  };

  return (
    <>
      <div
        className="w-full fixed top-[74px] md:top-[54px] right-0 left-0
         px-8 bg-white py-1
       dark:bg-dark-800
       border-b-[1px] border-zinc-200/60 dark:border-zinc-700"
      >
        <ArrowLeft3
          onClick={goPrev}
          className={cls(
            `absolute top-5 left-1.5 cursor-pointer rtl:left-auto rtl:right-1.5 rtl:-scale-100
        text-zinc-700 hover:fill-zinc-400 dark:text-zinc-300`,
            firstVisibleElement
              ? "opacity-20 !cursor-not-allowed"
              : "opacity-100"
          )}
          size="18"
        />
        <ArrowRight3
          onClick={goNext}
          className={cls(
            `absolute top-5 right-1.5 cursor-pointer rtl:right-auto rtl:left-1.5 rtl:-scale-100
        text-zinc-700 hover:fill-zinc-400 dark:text-zinc-300`,
            lastVisibleElement
              ? "opacity-20 !cursor-not-allowed"
              : "opacity-100"
          )}
          size="18"
        />
        <div className="w-full flex justify-start items-start row-menu">
          <Splide
            ref={splide}
            options={{
              autoWidth: true,
              height: "50px",
              direction: dir,
              pagination: false,
              arrows: false,
              drag: false,
            }}
            className="w-full"
          >
            {/* fake element for handle element viewPort */}
            <SplideSlide>
              <div ref={firstElementRef}></div>
            </SplideSlide>
            {routes.map(({ children, id }) => (
              <Fragment key={id}>
                {children.map(
                  (
                    {
                      href,
                      icon: Icon,
                      id: levelOneId,
                      title,
                      children,
                      label,
                    },
                    idx
                  ) => (
                    <SplideSlide key={levelOneId}>
                      <div className="flex justify-start items-center relative menu-item me-6">
                        <SidebarLink
                          onClick={() => activeLevelOne(levelOneId)}
                          href={href}
                          className="flex justify-start items-center
                           w-full group py-4"
                        >
                          <Icon
                            size="18"
                            className={cls(
                              `duration-200 transition-all group-hover:text-primary`,
                              activeRoute.levelOne === levelOneId ||
                                pathname === href
                                ? "text-primary"
                                : "dark:text-zinc-300 text-zinc-700"
                            )}
                          />
                          <span
                            className={cls(
                              `font-semibold ms-2.5
                        duration-200 transition-all group-hover:text-primary dark:text-zinc-400 text-sm`,
                              activeRoute.levelOne === levelOneId ||
                                pathname === href
                                ? "text-primary tracking-widest"
                                : "text-zinc-800"
                            )}
                          >
                            {" "}
                            {title}
                          </span>
                          {label && (
                            <span
                              className="absolute top-0 -right-4 bg-pink-50 dark:bg-pink-700/10 text-[10px]
                tracking-wide font-bold rounded-lg
              text-red-500 py-0.5 px-2 rtl:right-auto rtl:-left-4"
                            >
                              {label}
                            </span>
                          )}
                        </SidebarLink>
                        {children && children.length !== 0 && (
                          <MenuContainer className="top-12 sub-menu-item left-0 rtl:left-auto rtl:right-0">
                            {children?.map(
                              ({ href, id: levelTwoId, title, children }) => (
                                <div
                                  className="relative w-full children py-1"
                                  key={levelTwoId}
                                >
                                  <MenuItem
                                    onClick={() =>
                                      activeLevelTwo(levelOneId, levelTwoId)
                                    }
                                    title={title}
                                    href={href}
                                    active={
                                      activeRoute.levelTwo === levelTwoId ||
                                      href === pathname
                                    }
                                  />
                                  {children && children.length !== 0 && (
                                    <MenuContainer className="top-3 left-full rtl:left-auto rtl:right-full">
                                      {children?.map(
                                        ({ href, id: levelThreeId, title }) => (
                                          <MenuItem
                                            title={title}
                                            href={href}
                                            key={levelThreeId}
                                            active={
                                              activeRoute.levelThree ===
                                                levelThreeId ||
                                              href === pathname
                                            }
                                            onClick={() =>
                                              activeLevelThree(
                                                levelOneId,
                                                levelTwoId,
                                                levelThreeId
                                              )
                                            }
                                          />
                                        )
                                      )}
                                    </MenuContainer>
                                  )}
                                </div>
                              )
                            )}
                          </MenuContainer>
                        )}
                      </div>
                    </SplideSlide>
                  )
                )}
              </Fragment>
            ))}
            {/* fake element for handle element viewPort */}
            <SplideSlide>
              <div ref={lastElementRef} className="w-16"></div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </>
  );
};
export default RowMenu;
