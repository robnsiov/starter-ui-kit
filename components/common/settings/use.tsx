import { useEffect, useState } from "react";
import color from "color";
import { useDidUpdate } from "@mantine/hooks";
import { SameLayoutImpl, TabsImpl } from "./types";
import { useRecoilState, useRecoilValue } from "recoil";
import settingsTabsState from "@/context/toggle-settings-tabs";
import treeForceUpdateState from "@/context/tree-force-update";
import localManagement from "@/utils/local-management";

const useSettings = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedTab, setSelectedTab] = useState<TabsImpl>();
  const [_, setSettingsTabsState] = useRecoilState(settingsTabsState);
  const treeForceUpdate = useRecoilValue(treeForceUpdateState);
  const [activeLayout, setActiveLayout] = useState("");
  const [primary] = localManagement({ key: "--primary" });
  const [localLayout, setLocalLayout] = localManagement({ key: "layout" });
  const [border, setBorder] = localManagement({ key: "border" });
  useEffect(() => {
    setSettingsTabsState({ done: setSelectedTab });
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
  console.log(primaryCL);
  const setLayout = ({ def, layout }: SameLayoutImpl) => {
    setLocalLayout((def as string) ?? layout);
    setBorder(def ? "true" : "false");
    setActiveLayout((def as string) ?? layout);
    treeForceUpdate.done();
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
