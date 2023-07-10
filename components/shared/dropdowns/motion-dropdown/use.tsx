import { useEffect, useState } from "react";
import { useAnimate, stagger } from "framer-motion";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

const useMationDropDown = (tag: string) => {
  const [scope, animate] = useAnimate();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 500);
  }, []);

  useEffect(() => {
    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 5px)"
          : "inset(10% 50% 90% 50% round 5px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      document.querySelectorAll(tag)!,
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return { scope, isOpen, setIsOpen, mounted };
};

export default useMationDropDown;
