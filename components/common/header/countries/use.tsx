import { LANGS, languages } from "@/constants/settings/types";
import activePathState from "@/context/active-path";
import useTreeForceUpdateStore from "@/context/tree-force-update";
import cookieManagement from "@/utils/cookie-management";
import localManagement from "@/utils/local-management";
import { useDidUpdate } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
const useCountries = () => {
  const [lang, setLang] = cookieManagement({ key: "lang" });
  const [_, setDir] = localManagement({ key: "dir" });
  const [selectedLang, setSelectedLang] = useState<LANGS>(lang as LANGS);
  const { setActivePath } = activePathState();
  const { treeForceUpdate, setTreeForceUpdate } = useTreeForceUpdateStore();
  const langsToArray = Object.entries(languages);
  const router = useRouter();

  useDidUpdate(() => {
    // set cookie
    setLang(selectedLang);
    // set direction
    const dir = languages[selectedLang].dir;
    const path = languages[selectedLang].path;

    // set activePath
    setActivePath(path);

    // send custom event for handle dir on Icon-menu

    document.documentElement.dir = dir;
    setDir(dir);
    setTreeForceUpdate(!treeForceUpdate);
    const event = new Event("change-dir");
    window.dispatchEvent(event);

    // change route
    router.push(`/${path}`);
  }, [selectedLang]);

  return { selectedLang, langsToArray, setSelectedLang };
};
export default useCountries;
