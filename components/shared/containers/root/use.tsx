import settings from "@/constants/settings";
import { LANGS, languages } from "@/constants/settings/types";
import localManagement from "@/utils/local-management";
import { useEffect, useLayoutEffect } from "react";

const useRootContainer = () => {
  const { THEME } = settings;
  const [layout, setLayout] = localManagement({ key: "layout" });
  const [theme, setTheme] = localManagement({ key: "theme" });
  const [dir] = localManagement({ key: "dir" });
  const [border, setBorder] = localManagement({ key: "border" });
  const [color, setColor] = localManagement({ key: "color" });

  useLayoutEffect(() => {
    if (!layout) {
      setLayout("cuba");
    }
    if (!border) {
      setBorder("false");
    }

    // If the theme was not selected by the user
    if (!theme) {
      setTheme(THEME);
    }

    if (dir) document.documentElement.dir = dir;

    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    // Forced to set color
    if (!color) {
      const color = "#d536cd";
      setColor(color);
      document.documentElement.style.setProperty("--primary", color);
    } else {
      document.documentElement.style.setProperty("--primary", color);
    }
  }, []);
  return {};
};
export default useRootContainer;
