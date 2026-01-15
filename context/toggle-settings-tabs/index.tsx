import { create } from "zustand";
import ToggleSettingsTabsStateImpl from "./types";

interface SettingsTabsStore {
  settingsTab: ToggleSettingsTabsStateImpl | undefined;
  setSettingsTab: (tab: ToggleSettingsTabsStateImpl | undefined) => void;
}

const useSettingsTabsStore = create<SettingsTabsStore>((set) => ({
  settingsTab: undefined, // default
  setSettingsTab: (tab) => set({ settingsTab: tab }),
}));

export default useSettingsTabsStore;
