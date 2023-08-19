"use client";

import useFooter from "./use";
import cls from "classnames";

const Footer = () => {
  const { layout, border } = useFooter();
  return (
    <>
      <div
        className={cls(
          `flex justify-end items-center 
      border-t-[1px] border-zinc-200/60 dark:border-zinc-700`,
          border === "true"
            ? "ms-border w-[calc(100%-200px)] lg:!w-[calc(100%-20px)]"
            : "w-full"
        )}
      >
        <div
          className={cls(
            `transition-all duration-300
            bg-white p-5 text-center
      text-sm  dark:bg-dark md:py-4`,
            { "w-[calc(100%-256px)] md:!w-full": layout === "cuba" },
            {
              "w-[calc(100%-100px)] md:!w-[calc(100%-20px)]":
                layout === "tokyo" || layout === "moscow",
            },
            { "w-full": layout === "singapore" }
          )}
        >
          <p className="text-zinc-700 dark:text-zinc-400">{"title"}</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
