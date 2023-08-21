import TranslationState from "@/context/translation";
import { useRecoilValue } from "recoil";
import UseTranslateImpl, { GetUserTranslateImpl } from "./types";
import { isEmpty } from "lodash";

const useTranslate = (root: UseTranslateImpl) => {
  const messages = useRecoilValue(TranslationState);

  const get = ({ key, variables }: GetUserTranslateImpl) => {
    if (!isEmpty(messages)) {
      if (root in messages) {
        const object = messages[root];
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
