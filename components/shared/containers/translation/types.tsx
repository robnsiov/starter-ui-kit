export default interface TranslationContainerImpl extends UseTranslationImpl {
  children: React.ReactNode;
}

export interface UseTranslationImpl {
  messages: { [key: string]: { [key: string]: string } };
  locale: string;
}
