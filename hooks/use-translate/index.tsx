import TranslationState from "@/context/translation";
import { isEmpty } from "lodash";
import UseTranslateImpl, { GetUserTranslateImpl } from "./types";

const useTranslate = (root: UseTranslateImpl) => {
  const { translations } = TranslationState();

  const get = ({ key, variables }: GetUserTranslateImpl) => {
    if (!isEmpty(translations)) {
      if (root in translations) {
        const object = translations[root];
        if (key in object) {
          let value = object[key];
          const keys = Object.entries(variables ?? {});
          keys.forEach(([k, v]) => {
            value = value.replace(`%${k}`, `${v}`);
          });
          return value;
        }
        return "";
      }
      return "";
    }

    return "";
  };

  return get;
};
export default useTranslate;
