import { useEffect, useState } from "react";
import color from "color";
import { useDidUpdate } from "@mantine/hooks";
import { TabsImpl } from "./types";
import { useRecoilState } from "recoil";
import settingsTabsState from "@/context/toggle-settings-tabs";

const useSettings = () => {
  const [primary, setPrimary] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedTab, setSelectedTab] = useState<TabsImpl>();
  const [_, setSettingsTabsState] = useRecoilState(settingsTabsState);
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

  const primaryLighten = primary ? color(primary).lighten(0.8).hex() : "";

  return { primaryLighten, selectedTab, setSelectedTab, openMenu, setOpenMenu };
};
export default useSettings;
