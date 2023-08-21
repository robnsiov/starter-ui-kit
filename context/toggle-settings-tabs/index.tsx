import { atom } from "recoil";
import ToggleSettingsTabsStateImpl from "./types";
const settingsTabsState = atom<ToggleSettingsTabsStateImpl>({
  key: "settingsTabsState",
  default: undefined,
});

export default settingsTabsState;
