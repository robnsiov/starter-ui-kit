import useSettingsTabsStore from "@/context/toggle-settings-tabs";

const useInnerSettings = () => {
  const { setSettingsTab } = useSettingsTabsStore();
  return { setSettingsTab };
};

export default useInnerSettings;
