"use client";
import SidebarLink from "@/components/shared/links/sidebar-link";
import { ArrowLeft2, ArrowLeft3, ArrowRight3, Home } from "iconsax-react";
import Link from "next/link";
import {
  Fragment,
  RefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import routes from "../sidebar/routes";
import MenuContainer from "./menu-container";
import MenuItem from "./menu-item";
import "./row-menu.css";
import useRowMenu from "./use";
import cls from "classnames";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      ),
    [ref]
  );

  useEffect(() => {
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}

const RowMenu = () => {
  const {
    pathname,
    activeLevelOne,
    activeLevelThree,
    activeLevelTwo,
    activeRoute,
  } = useRowMenu();
  const lastElementRef = useRef<HTMLDivElement>(null);
  const lastVisibleElement = useOnScreen(lastElementRef);

  const firstElementRef = useRef<HTMLDivElement>(null);
  const firstVisibleElement = useOnScreen(firstElementRef);

  const splide = useRef({ go(dir: string) {} });
  console.log(lastVisibleElement);

  const goNext = () => {
    if (!lastVisibleElement) splide.current.go(">");
  };
  const goPrev = () => {
    if (!firstVisibleElement) console.log(splide.current.go("<"));
  };

  return (
    <>
      <div className="w-full fixed top-[74px] right-0 left-0 px-8 mt-2">
        <ArrowLeft3
          onClick={goPrev}
          className={cls(
            `absolute top-[18px] left-1.5 cursor-pointer
        text-zinc-700 hover:fill-zinc-400`,
            firstVisibleElement
              ? "opacity-20 cursor-not-allowed"
              : "opacity-100"
          )}
          size="18"
        />
        <ArrowRight3
          onClick={goNext}
          className={cls(
            `absolute top-[18px] right-1.5 cursor-pointer
        text-zinc-700 hover:fill-zinc-400`,
            lastVisibleElement ? "opacity-20 cursor-not-allowed" : "opacity-100"
          )}
          size="18"
        />
        <div className="w-full flex justify-start items-start row-menu">
          <Splide
            ref={splide}
            options={{
              autoWidth: true,
              height: "50px",
              direction: "ltr",
              pagination: false,
              arrows: false,
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
                          className="flex justify-start items-center w-full group py-4"
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
                        duration-200 transition-all group-hover:text-primary`,
                              activeRoute.levelOne === levelOneId ||
                                pathname === href
                                ? "text-primary"
                                : "text-sm text-zinc-800"
                            )}
                          >
                            {" "}
                            {title}
                          </span>
                          {label && (
                            <span
                              className="absolute top-0 -right-4 bg-pink-50 dark:bg-pink-700/10 text-[10px] 
                tracking-wide font-bold rounded-lg 
              text-red-500 py-0.5 px-2"
                            >
                              {label}
                            </span>
                          )}
                        </SidebarLink>
                        {children && children.length !== 0 && (
                          <MenuContainer className="top-8 sub-menu-item left-0">
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
                                    <MenuContainer className="top-3 left-full">
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
