"use client";

import useTranslate from "@/hooks/use-translate";

const Inbox = () => {
  const t = useTranslate("pages");
  return (
    <>
      <p>{t({ key: "inbox" })}</p>
    </>
  );
};
export default Inbox;
