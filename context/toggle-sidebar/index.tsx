import { create } from "zustand";
import SidebarStateImpl from "./types";

interface SidebarStore {
  sidebar: SidebarStateImpl;
  setSidebar: (state: SidebarStateImpl) => void;
  toggleSidebar: () => void;
}

const useSidebarStore = create<SidebarStore>((set, get) => ({
  sidebar: { close: true },
  setSidebar: (state) => set({ sidebar: state }),
  toggleSidebar: () => {
    const { sidebar } = get();
    set({ sidebar: { close: !sidebar.close } });
  },
}));

export default useSidebarStore;
