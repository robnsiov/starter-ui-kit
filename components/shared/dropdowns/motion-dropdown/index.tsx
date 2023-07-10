import { motion } from "framer-motion";
import MotionDropDowm from "./types";
import useMationDropDown from "./use";
import cls from "classnames";
import { useClickOutside, useMergedRef } from "@mantine/hooks";

export default function MotionDropDown({
  children,
  header,
  childrenTagName,
  className,
}: MotionDropDowm) {
  const { isOpen, scope, setIsOpen, mounted } =
    useMationDropDown(childrenTagName);

  const ref = useClickOutside(() => setIsOpen(false));

  return (
    <div ref={useMergedRef(scope, ref)}>
      <motion.div onClick={() => setIsOpen(!isOpen)} className="relative">
        {header}
      </motion.div>
      <ul
        onClick={() => setIsOpen(false)}
        className={cls(mounted ? "opacity-100" : "opacity-0", className)}
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          clipPath: "none",
        }}
      >
        {children}
      </ul>{" "}
    </div>
  );
}
