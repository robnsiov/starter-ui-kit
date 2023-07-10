import isDarkMode from "@/utils/is-dark-mode";
import { useForceUpdate } from "@mantine/hooks";

const useDarkModeToggle = () => {
  const forceUpdate = useForceUpdate();
  const isDark = isDarkMode();

  return { isDark, forceUpdate };
};
export default useDarkModeToggle;
