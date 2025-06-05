import { create } from "zustand";
import TreeForceUpdateImpl from "./types";

interface TreeForceUpdateStore {
  treeForceUpdate: TreeForceUpdateImpl | undefined;
  setTreeForceUpdate: (val: TreeForceUpdateImpl | undefined) => void;
}

const useTreeForceUpdateStore = create<TreeForceUpdateStore>((set) => ({
  treeForceUpdate: undefined,
  setTreeForceUpdate: (val) => set({ treeForceUpdate: val }),
}));

export default useTreeForceUpdateStore;
