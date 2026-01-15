"use client";

import useTranslate from "@/hooks/use-translate";

const Email = () => {
  const t = useTranslate("pages");
  return (
    <>
      <p>{t({ key: "email" })}</p>
    </>
  );
};
export default Email;
