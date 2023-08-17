import { useEffect, useState } from "react";
import Color from "color";
import { useDidUpdate } from "@mantine/hooks";
import { useRecoilValue } from "recoil";
import treeForceUpdateState from "@/context/tree-force-update";

const useColors = () => {
  const [color, setColor] = useState("");
  const forceTreeUpdate = useRecoilValue(treeForceUpdateState);

  const toHex = (cl: string) => {
    return Color(cl).hex();
  };

  if (typeof window !== "undefined" && !color) {
    const primary = localStorage.getItem("color");
    if (primary) setColor(toHex(primary));
  }

  useDidUpdate(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.setProperty("--primary", color);
    }
  }, [color]);

  const setActiveColor = (cl: string) => {
    const clToHex = toHex(cl);
    localStorage.setItem("color", clToHex);
    setColor(clToHex);
    setTimeout(() => {
      forceTreeUpdate.done();
    });
  };

  return { color, setColor: setActiveColor };
};

export default useColors;
