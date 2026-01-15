import SettingsImpl, { LayoutesImpl } from "./types";

export const layoutes: LayoutesImpl = [
  { label: "cuba", pic: "/images/cuba.jpg", border: false },
  { label: "tokyo", pic: "/images/tokyo.jpg", border: false },
  { label: "singapore", pic: "/images/singapore.jpg", border: false },
  { label: "moscow", pic: "/images/moscow.jpg", border: false },
  { label: "dubai", pic: "/images/dubai.png", border: true, default: "cuba" },
  // fake pic for dubai
  {
    label: "los-angeles",
    pic: "/images/dubai.png",
    border: true,
    default: "tokyo",
  },
  {
    label: "paris",
    pic: "/images/paris.png",
    border: true,
    default: "singapore",
  },
  // fake pic for rome
  { label: "rome", pic: "/images/dubai.png", border: true, default: "moscow" },
];

const settings: SettingsImpl = {
  THEME: "Light",
  LANG: "English",
  COLOR: "#3891f0",
  DARK: "#262932",
  DARK_800: "#1d1e26",
  LIGHT: "#fff",
  LIGHT_800: "#f9fafb",
};
export default settings;
