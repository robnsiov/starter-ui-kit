import { useEffect, useState } from "react";
import Color from "color";
import { useDidUpdate } from "@mantine/hooks";
import { useRecoilValue } from "recoil";
import treeForceUpdateState from "@/context/tree-force-update";
import localManagement from "@/utils/local-management";
import { UseColorsImpl } from "./type";

const useColors = ({ closeMenu }: UseColorsImpl) => {
  const [color, setColor] = useState("");
  const forceTreeUpdate = useRecoilValue(treeForceUpdateState);
  const [localColor, setLocalColor] = localManagement({ key: "color" });

  const toHex = (cl: string) => {
    return Color(cl).hex();
  };

  if (typeof window !== "undefined" && !color) {
    const primary = localColor;
    if (primary) setColor(toHex(primary));
  }

  useDidUpdate(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.setProperty("--primary", color);
    }
  }, [color]);

  const setActiveColor = (cl: string) => {
    const clToHex = toHex(cl);
    setLocalColor(clToHex);
    setColor(clToHex);
    setTimeout(() => {
      forceTreeUpdate.done();
    });
    closeMenu();
  };

  return { color, setColor: setActiveColor };
};

export default useColors;
