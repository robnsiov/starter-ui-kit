type Lanuages = Record<string, { countryCode: string; dir: "ltr" | "rtl" }>;

export const languages: Lanuages = {
  English: { countryCode: "US", dir: "ltr" },
  Persian: { countryCode: "IR", dir: "rtl" },
  // German: { countryCode: "DE", dir: "ltr" },
  // Arabic: { countryCode: "Kw", dir: "rtl" },
};

export type LANGS = keyof typeof languages;
export type THEMES = "Dark" | "Light";
export default interface SettingsImpl {
  THEME: THEMES;
  LANG: LANGS;
}
