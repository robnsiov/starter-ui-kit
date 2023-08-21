"use client";

import useTranslate from "@/hooks/use-translate";

const Validation = () => {
  const t = useTranslate("taskBoard");
  return (
    <>
      <p>{t({ key: "home" })}</p>
    </>
  );
};
export default Validation;
