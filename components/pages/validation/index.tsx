"use client";

import useTranslate from "@/hooks/use-translate";

const Validation = () => {
  const t = useTranslate("pages");
  return (
    <>
      <p>{t({ key: "formValidation" })}</p>
    </>
  );
};
export default Validation;
