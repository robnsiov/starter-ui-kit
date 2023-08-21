import { atom } from "recoil";
import SidebarStateImpl from "./types";
const sidebarState = atom<SidebarStateImpl>({
  key: "sidebarState",
  default: { close: true },
});

export default sidebarState;
