"use client";

import tanslate from "@/utils/translation";
import useFooter from "./use";
import cls from "classnames";

const Footer = () => {
  const t = tanslate();
  const { layout } = useFooter();
  return (
    <>
      <div className="w-full flex justify-end items-center">
        <div
          className={cls(
            `transition-all duration-300
            bg-white p-5 text-center
      text-sm shadow-lg shadow-indigo-800 dark:bg-dark md:py-4`,
            { "w-[calc(100%-256px)] md:!w-full": layout === "cuba" },
            {
              "w-[calc(100%-100px)] md:!w-[calc(100%-40px)]":
                layout === "tokyo" || layout === "moscow",
            },
            { "w-full": layout === "singapore" }
          )}
        >
          <p className="text-zinc-700 dark:text-zinc-400">{t("title")}</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
