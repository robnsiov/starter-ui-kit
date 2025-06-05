import settings from "@/constants/settings";
import { languages } from "@/constants/settings/types";
import useActivePathStore from "@/context/active-path";
import TranslationState from "@/context/translation";
import cookieManagement from "@/utils/cookie-management";
import localManagement from "@/utils/local-management";
import { useEffect } from "react";
import { UseTranslationImpl } from "./types";

const useTranslation = ({ messages, locale }: UseTranslationImpl) => {
  const { setTranslations } = TranslationState();
  const [_, setDir] = localManagement({ key: "dir" });
  const [__, setLang] = cookieManagement({ key: "lang" });
  const { setActivePath } = useActivePathStore();

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
    setTranslations(messages);
    setActivePath(locale);
  }, []);
  return { dir };
};

export default useTranslation;
