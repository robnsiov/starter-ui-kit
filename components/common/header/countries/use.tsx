import { LANGS, languages } from "@/constants/settings/types";
import { useState } from "react";
import { useDidUpdate } from "@mantine/hooks";
const useCountries = () => {
  const lang = localStorage.getItem("lang");
  const [selectedLang, setSelectedLang] = useState<LANGS>(lang as LANGS);
  const langsToArray = Object.entries(languages);

  useDidUpdate(() => {
    localStorage.setItem("lang", selectedLang);
    // set direction
    const dir = languages[selectedLang].dir;
    document.documentElement.dir = dir;
    localStorage.setItem("dir", dir);
  }, [selectedLang]);

  return { selectedLang, langsToArray, setSelectedLang };
};
export default useCountries;
