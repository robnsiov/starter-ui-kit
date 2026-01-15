import useTreeForceUpdateStore from "@/context/tree-force-update";
import localManagement from "@/utils/local-management";
import { useDidUpdate } from "@mantine/hooks";
import Color from "color";
import { useState } from "react";
import { UseColorsImpl } from "./type";

const useColors = ({ closeMenu, colorVariable }: UseColorsImpl) => {
  const [color, setColor] = useState("");
  const { treeForceUpdate, setTreeForceUpdate } = useTreeForceUpdateStore();
  const [localColor, setLocalColor] = localManagement({ key: colorVariable });

  const toHex = (cl: string) => {
    return Color(cl).hex();
  };

  if (typeof window !== "undefined" && !color) {
    const primary = localColor;
    if (primary) setColor(toHex(primary));
  }

  useDidUpdate(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.setProperty(colorVariable, color);
    }
  }, [color]);

  const setActiveColor = (cl: string) => {
    const clToHex = toHex(cl);
    setLocalColor(clToHex);
    setColor(clToHex);
    setTimeout(() => {
      setTreeForceUpdate(!treeForceUpdate);
    });
    closeMenu();
  };

  return { color, setColor: setActiveColor };
};

export default useColors;
