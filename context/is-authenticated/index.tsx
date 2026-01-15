import { create } from "zustand";
import IsAuthenticatedStateImpl from "./types";

interface AuthStore {
  isAuthenticated: IsAuthenticatedStateImpl;
  setIsAuthenticated: (auth: IsAuthenticatedStateImpl) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false, // default value
  setIsAuthenticated: (auth) => set({ isAuthenticated: auth }),
}));

export default useAuthStore;
