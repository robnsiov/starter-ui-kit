import localManagement from "../local-management";

const isDarkMode = () => {
  const [theme] = localManagement({ key: "theme" });
  const mode = theme;
  return mode === "dark";
};
export default isDarkMode;
