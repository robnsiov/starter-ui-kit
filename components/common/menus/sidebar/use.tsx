import sidebarState from "@/context/toggle-sidebar";
import localManagement from "@/utils/local-management";
import { useViewportSize } from "@mantine/hooks";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useRecoilValue } from "recoil";

const useSidebar = () => {
  const pathname = usePathname();
  const { width: viewportWidth } = useViewportSize();

  const sidebarStatus = useRecoilValue(sidebarState);

  const [activeRoute, setActiveRoute] = useState({
    levelOne: -1,
    levelTwo: -1,
    levelThree: -1,
  });
  const [border] = localManagement({ key: "border" });

  const activeLevelOne = (levelOne: number) => {
    setActiveRoute({
      levelOne: activeRoute.levelOne === levelOne ? -1 : levelOne,
      levelTwo: -1,
      levelThree: -1,
    });
  };
  const activeLevelTwo = (levelOne: number, levelTwo: number) => {
    setActiveRoute({
      levelOne,
      levelTwo: activeRoute.levelTwo === levelTwo ? -1 : levelTwo,
      levelThree: -1,
    });
  };
  const activeLevelThree = (
    levelOne: number,
    levelTwo: number,
    levelThree: number
  ) => {
    setActiveRoute({ levelOne, levelTwo, levelThree });
  };

  return {
    pathname,
    activeRoute,
    activeLevelOne,
    activeLevelTwo,
    activeLevelThree,
    sidebarStatus,
    viewportWidth,
    border,
  };
};
export default useSidebar;
