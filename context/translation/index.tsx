import { atom } from "recoil";
import { TranslationStateImpl } from "./types";
const TranslationState = atom<TranslationStateImpl>({
  key: "translationState",
  default: {},
});

export default TranslationState;
