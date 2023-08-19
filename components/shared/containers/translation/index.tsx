"use client";

import TranslationContainerImpl from "./types";
import useTranslation from "./use";

const TranslationContainer = ({
  children,
  messages,
}: TranslationContainerImpl) => {
  useTranslation({ messages });
  return <>{children}</>;
};

export default TranslationContainer;
