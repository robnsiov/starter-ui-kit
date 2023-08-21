import localManagement from "@/utils/local-management";

const changeDarkMode = (isDark: boolean, forceUpdate: Function | undefined) => {
  const [theme, setTheme] = localManagement({ key: "theme" });
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  if (isDark) {
    setTheme("light");
    html.classList.remove("dark");
  } else {
    setTheme("dark");
    html.classList.add("dark");
  }
  if (forceUpdate) forceUpdate();
};

export default changeDarkMode;
