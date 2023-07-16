import { LANGS, languages } from "@/constants/settings/types";
import { useState } from "react";
import { useDidUpdate } from "@mantine/hooks";
import { useRecoilValue } from "recoil";
import treeForceUpdateState from "@/context/tree-force-update";
const useCountries = () => {
  const lang = localStorage.getItem("lang");
  const [selectedLang, setSelectedLang] = useState<LANGS>(lang as LANGS);
  const forceTreeUpdate = useRecoilValue(treeForceUpdateState);
  const langsToArray = Object.entries(languages);

  useDidUpdate(() => {
    localStorage.setItem("lang", selectedLang);
    // set direction
    const dir = languages[selectedLang].dir;
    document.documentElement.dir = dir;
    localStorage.setItem("dir", dir);
    forceTreeUpdate.done();
  }, [selectedLang]);

  return { selectedLang, langsToArray, setSelectedLang };
};
export default useCountries;
