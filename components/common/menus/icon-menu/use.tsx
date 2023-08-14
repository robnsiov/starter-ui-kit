import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SelectedChildrenImpl } from "./types";

const useMenuIcon = () => {
  const pathname = usePathname();
  const [selectedChildren, setSelectedChildren] =
    useState<SelectedChildrenImpl>([]);
  const [activeSubChilrenId, setActiveSubChildrenId] = useState(-1);
  const [dir, setDir] = useState("ltr");

  const toggleActiveId = (id: number) => {
    setActiveSubChildrenId((prev) => (prev === id ? -1 : id));
  };
  const toggleChildren = (children: SelectedChildrenImpl) => {
    if (JSON.stringify(children) === JSON.stringify(selectedChildren))
      setSelectedChildren([]);
    else setSelectedChildren(children);
  };

  const setCurrentDir = () => {
    const currentDir = localStorage.getItem("dir");
    if (currentDir) setDir(currentDir);
  };

  useEffect(() => {
    setCurrentDir();
    window.addEventListener("change-dir", setCurrentDir);
    return () => window.removeEventListener("change-dir", setCurrentDir);
  }, []);

  return {
    pathname,
    selectedChildren,
    activeSubChilrenId,
    toggleActiveId,
    toggleChildren,
    dir,
  };
};
export default useMenuIcon;
