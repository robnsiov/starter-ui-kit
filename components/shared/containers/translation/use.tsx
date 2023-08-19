import { useSetRecoilState } from "recoil";
import { UseTranslationImpl } from "./types";
import TranslationState from "@/context/translation";
import { useEffect, useLayoutEffect } from "react";
import localManagement from "@/utils/local-management";
import { languages } from "@/constants/settings/types";
import settings from "@/constants/settings";
import cookieManagement from "@/utils/cookie-management";

const useTranslation = ({ messages, locale }: UseTranslationImpl) => {
  const setTranslation = useSetRecoilState(TranslationState);
  const [_, setDir] = localManagement({ key: "dir" });
  const [__, setLang] = cookieManagement({ key: "lang" });

  let dir = "";
  let lang = Object.entries(languages).find(([_, { path }]) => path === locale);
  if (lang) {
    dir = lang[1].dir;
    setDir(lang[1].dir);
    setLang(lang[0]);
  } else {
    lang = [settings.LANG, languages[settings.LANG]];
    dir = lang[1].dir;
    setDir(lang[1].dir);
    setLang(lang[0]);
  }

  useEffect(() => {
    setTranslation(messages);
  }, []);
  return { dir };
};

export default useTranslation;
