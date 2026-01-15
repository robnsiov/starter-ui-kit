"use client";

import useTranslate from "@/hooks/use-translate";

const Home = () => {
  const t = useTranslate("pages");
  return (
    <>
      <p>{t({ key: "home" })}</p>
    </>
  );
};
export default Home;
