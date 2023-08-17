import { atom } from "recoil";
import IsAuthenticatedStateImpl from "./types";
const isAuthenticatedState = atom<IsAuthenticatedStateImpl>({
  key: "isAuthenticated",
  default: false,
});

export default isAuthenticatedState;
