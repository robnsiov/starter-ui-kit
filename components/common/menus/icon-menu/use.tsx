import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SelectedChildrenImpl } from "./types";

const useMenuIcon = () => {
  const pathname = usePathname();
  const [selectedChildren, setSelectedChildren] =
    useState<SelectedChildrenImpl>([]);
  const [activeSubChilrenId, setActiveSubChildrenId] = useState(-1);
  const [dir, setDir] = useState("ltr");
  const layout = localStorage.getItem("layout");

  const toggleActiveId = (id: number) => {
    setActiveSubChildrenId((prev) => (prev === id ? -1 : id));
  };
  const toggleChildren = (children: SelectedChildrenImpl) => {
    if (JSON.stringify(children) === JSON.stringify(selectedChildren)) {
      setSelectedChildren([]);
      setActiveSubChildrenId(-1);
    } else setSelectedChildren(children);
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
    layout,
  };
};
export default useMenuIcon;
