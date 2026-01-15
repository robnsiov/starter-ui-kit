"use client";
import isDarkMode from "@/utils/is-dark-mode";
import changeDarkMode from "@/utils/is-dark-mode/change-dark-mode";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkModeToggle from "./use";
import { motion } from "framer-motion";

const DarkModeToggle = () => {
  const { isDark, forceUpdate } = useDarkModeToggle();
  return (
    <>
      <motion.div
        whileTap={{ scale: [null, 0.95, 1] }}
        transition={{ duration: 0.3 }}
      >
        <div className="ms-3 duration-200 transition-all">
          <DarkModeSwitch
            moonColor="#b9b9c4"
            sunColor="#fff"
            checked={!isDark}
            onChange={() => changeDarkMode(isDark, forceUpdate)}
          />
        </div>
      </motion.div>
    </>
  );
};
export default DarkModeToggle;
