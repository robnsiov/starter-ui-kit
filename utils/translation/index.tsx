import translation from "@/constants/translation";

const findString = (inp: string | undefined) => {
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
    string = string.replace(`%{${key}}`, inp[key]);
  });
  return string;
};

const tanslate = () => {
  return (inp: string | Record<string, any>): string => {
    if (typeof inp === "string") {
      return findString(inp);
    } else {
      return fillString(inp);
    }
  };
};

export default tanslate;
