type Lanuages = Record<
  string,
  { countryCode: string; dir: "ltr" | "rtl"; path: string }
>;

export const languages: Lanuages = {
  English: { countryCode: "US", dir: "ltr", path: "en" },
  Persian: { countryCode: "IR", dir: "rtl", path: "fa" },
  // German: { countryCode: "DE", dir: "ltr" },
  // Arabic: { countryCode: "Kw", dir: "rtl" },
};
export type LayoutesImpl = Array<{
  label: string;
  pic: string;
  border: boolean;
  default?: string;
}>;

export type LANGS = keyof typeof languages;
export type THEMES = "Dark" | "Light";
export default interface SettingsImpl {
  THEME: THEMES;
  LANG: LANGS;
}
