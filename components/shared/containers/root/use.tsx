import settings from "@/constants/settings";
import { LANGS, languages } from "@/constants/settings/types";

const useRootContainer = () => {
  const { LANG, THEME } = settings;
  // If the theme was not selected by the user
  if (!("theme" in localStorage)) {
    localStorage.setItem("theme", THEME);
  }

  // If the lang was not selected by the user
  if (!("lang" in localStorage)) {
    localStorage.setItem("lang", LANG);
  }

  // Forced to set direction based on language
  const lang = localStorage.getItem("lang");
  const dir = languages[lang as LANGS].dir;
  localStorage.setItem("dir", dir);

  // set delay for dir attr
  const promise = Promise.resolve(() => {
    const html = document.documentElement;
    html.dir = dir;
    const theme = localStorage.getItem("theme");
    if (theme === "dark") html.classList.add("dark");
    else html.classList.remove("dark");
  });
  promise.then((resolve) => resolve());

  return {};
};
export default useRootContainer;
