import { useEffect, useState } from "react";
import color from "color";
import { useDidUpdate, useSetState } from "@mantine/hooks";
import { TabsImpl } from "./types";
import { useRecoilState, useRecoilValue } from "recoil";
import settingsTabsState from "@/context/toggle-settings-tabs";
import treeForceUpdateState from "@/context/tree-force-update";

const useSettings = () => {
  const [primary, setPrimary] = useState("");
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

  useEffect(() => {
    const color = html.style.getPropertyValue("--primary");
    setPrimary(color);
  }, []);

  useEffect(() => {
    const layout = localStorage.getItem("layout");
    if (layout) setActiveLayout(layout);
  }, []);

  const primaryLighten = primary ? color(primary).lighten(0.8).hex() : "";
  const setLayout = (layout: string) => {
    localStorage.setItem("layout", layout);
    setActiveLayout(layout);
    treeForceUpdate.done();
  };

  return {
    primaryLighten,
    selectedTab,
    setSelectedTab,
    openMenu,
    setOpenMenu,
    setLayout,
    activeLayout,
  };
};
export default useSettings;
