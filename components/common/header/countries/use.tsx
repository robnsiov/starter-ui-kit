import { LANGS, languages } from "@/constants/settings/types";
import { useState } from "react";
import { useDidUpdate } from "@mantine/hooks";
import { useRecoilValue } from "recoil";
import treeForceUpdateState from "@/context/tree-force-update";
import localManagement from "@/utils/local-management";
const useCountries = () => {
  const [lang, setLang] = localManagement({ key: "lang" });
  const [_, setDir] = localManagement({ key: "dir" });
  const [selectedLang, setSelectedLang] = useState<LANGS>(lang as LANGS);
  const forceTreeUpdate = useRecoilValue(treeForceUpdateState);
  const langsToArray = Object.entries(languages);

  useDidUpdate(() => {
    setLang(selectedLang);
    // set direction
    const dir = languages[selectedLang].dir;

    // send custom event for handle dir on Icon-menu

    document.documentElement.dir = dir;
    setDir(dir);
    forceTreeUpdate.done();
    const event = new Event("change-dir");
    window.dispatchEvent(event);
  }, [selectedLang]);

  return { selectedLang, langsToArray, setSelectedLang };
};
export default useCountries;
