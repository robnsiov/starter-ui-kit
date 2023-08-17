const isDarkMode = () => {
  if (typeof localStorage === "undefined") return false;
  const mode = localStorage.theme;
  return mode === "dark";
};
export default isDarkMode;
