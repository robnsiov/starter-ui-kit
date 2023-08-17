import translation from "@/constants/translation";

const findString = (inp: string | undefined) => {
  if (typeof localStorage === "undefined") return;
  const lang = localStorage.getItem("lang");
  if (!lang || !inp) return "";
  if (inp in translation) {
    const word = translation[inp];
    if (lang in word) {
      return word[lang];
    } else return "";
  } else return "";
};

const fillString = (inp: Record<string, any>) => {
  let string = findString(inp.title);
  delete inp.title;
  const l = Object.keys(inp);
  l.forEach((key) => {
    if (typeof string === "string")
      string = string.replace(`%{${key}}`, inp[key]);
  });
  return string;
};

const tanslate = () => {
  return (inp: string | Record<string, any>): string => {
    if (typeof inp === "string") {
      const res = findString(inp);
      if (typeof res === "string") return res;
    }
    return "";
  };
};

export default tanslate;
