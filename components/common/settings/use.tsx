import { useEffect, useState } from "react";
import color from "color";
import { useDidUpdate, useSetState } from "@mantine/hooks";
import { SameLayoutImpl, TabsImpl } from "./types";
import { useRecoilState, useRecoilValue } from "recoil";
import settingsTabsState from "@/context/toggle-settings-tabs";
import treeForceUpdateState from "@/context/tree-force-update";

const useSettings = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedTab, setSelectedTab] = useState<TabsImpl>();
  const [_, setSettingsTabsState] = useRecoilState(settingsTabsState);
  const treeForceUpdate = useRecoilValue(treeForceUpdateState);
  const [activeLayout, setActiveLayout] = useState("");
  const html = document.documentElement;

  useEffect(() => {
    setSettingsTabsState({ done: setSelectedTab });
  }, []);

  useDidUpdate(() => {
    if (selectedTab) setOpenMenu(true);
  }, [selectedTab]);

  useDidUpdate(() => {
    if (!openMenu) setSelectedTab(undefined);
  }, [openMenu]);

  const primary = localStorage.getItem("color");

  useEffect(() => {
    const layout = localStorage.getItem("layout");
    if (layout) setActiveLayout(layout);
  }, []);

  const primaryLighten = primary
    ? color(primary || "#fff")
        .lighten(0.8)
        .hex()
    : "";
  const setLayout = ({ def, layout }: SameLayoutImpl) => {
    localStorage.setItem("layout", (def as string) ?? layout);
    localStorage.setItem("border", def ? "true" : "false");
    setActiveLayout((def as string) ?? layout);
    treeForceUpdate.done();
  };

  const border = localStorage.getItem("border");

  const checkActiveLayout = ({ def, layout }: SameLayoutImpl) => {
    if (border === "true") return def === activeLayout;
    else return layout === activeLayout;
  };

  return {
    primaryLighten,
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
