import settings from "@/constants/settings";
import { LANGS, languages } from "@/constants/settings/types";
import localManagement from "@/utils/local-management";
import { useEffect, useLayoutEffect } from "react";

const useRootContainer = () => {
  const { THEME, COLOR, DARK, DARK_800, LANG, LIGHT, LIGHT_800 } = settings;
  const [layout, setLayout] = localManagement({ key: "layout" });
  const [theme, setTheme] = localManagement({ key: "theme" });
  const [dir] = localManagement({ key: "dir" });
  const [border, setBorder] = localManagement({ key: "border" });
  const [color, setColor] = localManagement({ key: "--primary" });
  const [darkColor, setDarkColor] = localManagement({ key: "--dark" });
  const [darkColor800, setDarkColor800] = localManagement({
    key: "--dark-800",
  });
  const [lightColor, setLightColor] = localManagement({ key: "--light" });
  const [lightColor800, setLightColor800] = localManagement({
    key: "--light-800",
  });

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
      const color = COLOR;
      setColor(color);
      document.documentElement.style.setProperty("--primary", color);
    } else {
      document.documentElement.style.setProperty("--primary", color);
    }

    if (!darkColor) {
      const color = DARK;
      setDarkColor(color);
      document.documentElement.style.setProperty("--dark", darkColor);
    } else {
      document.documentElement.style.setProperty("--dark", darkColor);
    }
    if (!darkColor800) {
      const color = DARK_800;
      setDarkColor800(color);
      document.documentElement.style.setProperty("--dark-800", darkColor800);
    } else {
      document.documentElement.style.setProperty("--dark-800", darkColor800);
    }
    if (!lightColor) {
      const color = LIGHT;
      setLightColor(color);
      document.documentElement.style.setProperty("--light", lightColor);
    } else {
      document.documentElement.style.setProperty("--light", lightColor);
    }

    if (!lightColor800) {
      const color = LIGHT_800;
      setLightColor800(color);
      document.documentElement.style.setProperty("--light-800", lightColor800);
    } else {
      document.documentElement.style.setProperty("--light-800", lightColor800);
    }
  }, []);
  return {};
};
export default useRootContainer;
