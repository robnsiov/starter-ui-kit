import { useSetRecoilState } from "recoil";
import { UseTranslationImpl } from "./types";
import TranslationState from "@/context/translation";
import { useEffect } from "react";

const useTranslation = ({ messages }: UseTranslationImpl) => {
  const setTranslation = useSetRecoilState(TranslationState);
  useEffect(() => {
    setTranslation(messages);
  });
  return {};
};

export default useTranslation;
