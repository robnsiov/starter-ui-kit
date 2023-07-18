import { usePathname } from "next/navigation";
import { useState } from "react";

const useRowMenu = () => {
  const pathname = usePathname();
  const [activeRoute, setActiveRoute] = useState({
    levelOne: -1,
    levelTwo: -1,
    levelThree: -1,
  });

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
  };
};
export default useRowMenu;
