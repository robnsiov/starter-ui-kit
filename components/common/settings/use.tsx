import useSettingsTabsStore from "@/context/toggle-settings-tabs";
import useTreeForceUpdateStore from "@/context/tree-force-update";
import localManagement from "@/utils/local-management";
import { useDidUpdate } from "@mantine/hooks";
import color from "color";
import { useEffect, useState } from "react";
import { SameLayoutImpl, TabsImpl } from "./types";

const useSettings = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedTab, setSelectedTab] = useState<TabsImpl>();
  const { setSettingsTab } = useSettingsTabsStore();
  const { treeForceUpdate, setTreeForceUpdate } = useTreeForceUpdateStore();
  const [activeLayout, setActiveLayout] = useState("");
  const [primary] = localManagement({ key: "--primary" });
  const [localLayout, setLocalLayout] = localManagement({ key: "layout" });
  const [border, setBorder] = localManagement({ key: "border" });
  useEffect(() => {
    setSettingsTab({ done: setSelectedTab });
  }, []);

  useDidUpdate(() => {
    if (selectedTab) setOpenMenu(true);
  }, [selectedTab]);

  useDidUpdate(() => {
    if (!openMenu) setSelectedTab(undefined);
  }, [openMenu]);

  useEffect(() => {
    const layout = localLayout;
    if (layout) setActiveLayout(layout);
  }, []);

  const primaryCL = primary
    ? color(primary || "#fff")
        .lighten(0.5)
        .hex()
    : "";
  const setLayout = ({ def, layout }: SameLayoutImpl) => {
    setLocalLayout((def as string) ?? layout);
    setBorder(def ? "true" : "false");
    setActiveLayout((def as string) ?? layout);
    setTreeForceUpdate(!treeForceUpdate);
    setOpenMenu(false);
  };

  const checkActiveLayout = ({ def, layout }: SameLayoutImpl) => {
    if (border === "true") return def === activeLayout;
    else return layout === activeLayout;
  };

  return {
    primaryCL,
    selectedTab,
    setSelectedTab,
    openMenu,
    setOpenMenu,
    setLayout,
    activeLayout,
    checkActiveLayout,
    border,
  };
};
export default useSettings;
