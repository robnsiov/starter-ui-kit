import { atom } from "recoil";
import TreeForceUpdateImpl from "./types";
const treeForceUpdateState = atom<TreeForceUpdateImpl>({
  key: "treeForceUpdate",
  default: undefined,
});

export default treeForceUpdateState;
