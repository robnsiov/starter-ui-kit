const changeDarkMode = (isDark: boolean, forceUpdate: Function | undefined) => {
  const html = document.documentElement;
  if (isDark) {
    localStorage.setItem("theme", "light");
    html.classList.remove("dark");
  } else {
    localStorage.setItem("theme", "dark");
    html.classList.add("dark");
  }
  if (forceUpdate) forceUpdate();
};

export default changeDarkMode;
