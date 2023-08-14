import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SelectedChildrenImpl } from "./types";

const useMenuIcon = () => {
  const pathname = usePathname();
  const [selectedChildren, setSelectedChildren] =
    useState<SelectedChildrenImpl>([]);
  const [activeSubChilrenId, setActiveSubChildrenId] = useState(-1);

  const toggleActiveId = (id: number) => {
    setActiveSubChildrenId((prev) => (prev === id ? -1 : id));
  };
  const toggleChildren = (children: SelectedChildrenImpl) => {
    if (JSON.stringify(children) === JSON.stringify(selectedChildren))
      setSelectedChildren([]);
    else setSelectedChildren(children);
  };

  useEffect(() => {
    window.addEventListener("change-dir", () => {
      console.log(1);
    });
  }, []);

  return {
    pathname,
    selectedChildren,
    activeSubChilrenId,
    toggleActiveId,
    toggleChildren,
  };
};
export default useMenuIcon;
