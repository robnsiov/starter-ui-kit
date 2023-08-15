import { atom } from "recoil";
import ActiveLayoutStateImpl from "./types";
const activeLayoutState = atom<ActiveLayoutStateImpl>({
  key: "activeLayoutState",
  default: "cuba",
});

export default activeLayoutState;
