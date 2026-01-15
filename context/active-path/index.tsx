import settings from "@/constants/settings";
import { languages } from "@/constants/settings/types";
import { create } from "zustand";
import ActivePathStateImpl from "./types";

interface ActivePathStore {
  activePath: ActivePathStateImpl;
  setActivePath: (path: ActivePathStateImpl) => void;
}

const useActivePathStore = create<ActivePathStore>((set) => ({
  activePath: languages[settings.LANG].path, // default from settings
  setActivePath: (path) => set({ activePath: path }),
}));

export default useActivePathStore;
