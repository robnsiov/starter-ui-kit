import { create } from "zustand";
import ActiveLayoutStateImpl from "./types";

interface ActiveLayoutStore {
  activeLayout: ActiveLayoutStateImpl;
  setActiveLayout: (layout: ActiveLayoutStateImpl) => void;
}

const useActiveLayoutStore = create<ActiveLayoutStore>((set) => ({
  activeLayout: "cuba", // default value
  setActiveLayout: (layout) => set({ activeLayout: layout }),
}));

export default useActiveLayoutStore;
