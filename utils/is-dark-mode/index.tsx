const isDarkMode = () => {
  const mode = localStorage.theme;
  return mode === "dark";
};
export default isDarkMode;
