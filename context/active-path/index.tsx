import { atom } from "recoil";
import settings from "@/constants/settings";
import { languages } from "@/constants/settings/types";
import ActivePathStateImpl from "./types";
const activePathState = atom<ActivePathStateImpl>({
  key: "activePathState",
  default: languages[settings.LANG].path,
});

export default activePathState;
