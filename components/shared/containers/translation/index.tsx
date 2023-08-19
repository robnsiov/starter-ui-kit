"use client";

import TranslationContainerImpl from "./types";
import useTranslation from "./use";

const TranslationContainer = ({
  children,
  messages,
  locale,
}: TranslationContainerImpl) => {
  const { dir } = useTranslation({ messages, locale });
  return (
    <>
      <div
        dir={dir}
        style={{ fontFamily: dir === "ltr" ? "var(--pop)" : "var(--san)" }}
      >
        {children}
      </div>
    </>
  );
};

export default TranslationContainer;
