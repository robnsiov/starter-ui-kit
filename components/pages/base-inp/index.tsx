"use client";

import useTranslate from "@/hooks/use-translate";

const BaseInp = () => {
  const t = useTranslate("pages");
  return (
    <>
      <p>{t({ key: "baseInput" })}</p>
    </>
  );
};
export default BaseInp;
