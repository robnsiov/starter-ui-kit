"use client";
import DashboardContainer from "@/components/shared/containers/dashboard";
import useDashboardLayout from "./use";
import cls from "classnames";

const Layout = ({
  children,
  params: { slug },
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  const { border, layout, isAuthenticated } = useDashboardLayout(slug);
  return (
    <>
      {isAuthenticated && (
        <DashboardContainer>
          {border === "true" && (
            <>
              <div className="fixed w-[99px] lg:w-border top-0 bottom-0 left-0 bg-white dark:bg-dark-800 z-[999]"></div>
              <div className="fixed w-[99px] lg:w-border top-0 bottom-0 right-0 bg-white dark:bg-dark-800 z-[999]"></div>
              <div className="fixed  top-0  right-0 left-0 h-border bg-white dark:bg-dark-800 z-[999]"></div>
            </>
          )}
          <div
            className={cls(
              `duration-300 transition-all p-5 dark:text-zinc-100 text-zinc-900 dark:bg-dark/60 empty:p-0`,
              {
                "ms-[100px] md:ms-[40px] mt-[74px] md:mt-[54px]":
                  border !== "true" &&
                  (layout === "tokyo" || layout === "moscow"),
              },
              {
                "mt-[130px] md:mt-[113px] w-full":
                  border !== "true" && layout === "singapore",
              },
              {
                "mt-[74px] ms-[264px] md:mt-[54px] md:!ms-0":
                  border !== "true" && layout === "cuba",
              },
              {
                "me-border ms-[calc(var(--border)+264px)] mt-[calc(var(--border)+74px)]  md:!me-0 md:!ms-0 md:mt-[65px]  md:w-[calc(100%-20px)] md:relative md:left-[10px] rtl:md:left-auto rtl:md:right-[10px]":
                  border === "true" && layout === "cuba",
              },
              {
                "me-border ms-[calc(var(--border)+99px)] mt-[calc(var(--border)+74px)]  md:!me-0 md:!ms-0 md:mt-[65px]  md:w-[calc(100%-60px)] md:relative md:left-[50px] rtl:md:left-auto rtl:md:right-[50px]":
                  border === "true" &&
                  (layout === "tokyo" || layout === "moscow"),
              },
              {
                "mt-[calc(var(--border)+74px+60px)] md:mt-[calc(var(--border)+54px+60px)] me-border ms-border":
                  border === "true" && layout === "singapore",
              }
            )}
          >
            {children}
          </div>
        </DashboardContainer>
      )}
    </>
  );
};

export default Layout;
