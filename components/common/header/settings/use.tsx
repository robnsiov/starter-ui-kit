import settingsTabsState from "@/context/toggle-settings-tabs";
import { useRecoilValue } from "recoil";

const useInnerSettings = () => {
  const setSelectedTab = useRecoilValue(settingsTabsState);
  return { setSelectedTab };
};

export default useInnerSettings;
