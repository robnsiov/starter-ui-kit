import settings from "@/constants/settings";
import { LANGS, languages } from "@/constants/settings/types";
import { useEffect } from "react";

const useRootContainer = () => {
  const { LANG, THEME } = settings;
  if (typeof localStorage === "undefined") return;

  if (!("layout" in localStorage)) {
    localStorage.setItem("layout", "cuba");
  }
  if (!("border" in localStorage)) {
    localStorage.setItem("border", "false");
  }

  // If the theme was not selected by the user
  if (!("theme" in localStorage)) {
    localStorage.setItem("theme", THEME);
  }

  // If the lang was not selected by the user
  if (!("lang" in localStorage)) {
    localStorage.setItem("lang", LANG);
  }

  const promise = Promise.resolve(() => {
    // Forced to set color

    const theme = localStorage.getItem("theme");
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    if (!("color" in localStorage)) {
      localStorage.setItem("color", "#d536cd");
      const color = "#d536cd";
      document.documentElement.style.setProperty("--primary", color);
    } else {
      const color = localStorage.getItem("color");
      document.documentElement.style.setProperty("--primary", color);
    }
  });

  promise.then((resolve) => resolve());

  return {};
};
export default useRootContainer;
