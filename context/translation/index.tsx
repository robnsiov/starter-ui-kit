import { create } from "zustand";
import { TranslationStateImpl } from "./types";

interface TranslationStore {
  translations: TranslationStateImpl;
  setTranslations: (data: TranslationStateImpl) => void;
  clearTranslations: () => void;
}

const useTranslationStore = create<TranslationStore>((set) => ({
  translations: {},
  setTranslations: (data) => set({ translations: data }),
  clearTranslations: () => set({ translations: {} }),
}));

export default useTranslationStore;
