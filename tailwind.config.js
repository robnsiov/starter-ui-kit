/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
        "460px": { max: "460px" },
        "580px": { max: "580px" },
        "1362px": { max: "1362px" },
      },
      keyframes: {
        bell: {
          "0%": { transform: "rotate(0)" },
          "1%": { transform: "rotate(30deg)" },
          "3%": { transform: "rotate(-28deg)" },
          "5%": { transform: "rotate(34deg)" },
          "7%": { transform: "rotate(-32deg)" },
          "9%": { transform: "rotate(30deg)" },
          "11%": { transform: "rotate(-28deg)" },
          "13%": { transform: "rotate(26deg)" },
          "15%": { transform: "rotate(-24deg)" },
          "17%": { transform: "rotate(22deg)" },
          "19%": { transform: "rotate(-20deg)" },
          "21%": { transform: "rotate(18deg)" },
          "23%": { transform: "rotate(-16deg)" },
          "25%": { transform: "rotate(14deg)" },
          "27%": { transform: "rotate(-12deg)" },
          "29%": { transform: "rotate(10deg)" },
          "31%": { transform: "rotate(-8deg)" },
          "33%": { transform: "rotate(6deg)" },
          "35%": { transform: "rotate(-4deg)" },
          "37%": { transform: "rotate(2deg)" },
          "39%": { transform: "rotate(-1deg)" },
          "41%": { transform: "rotate(1deg)" },
          "43%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(0)" },
        },
      },
      animation: {
        bell: "bell 10s .7s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        border: "var(--border) !important",
      },
      colors: {
        primary: "var(--primary) !important",
        light: {
          DEFAULT: "var(--light)",
          800: "var(--light-800)",
        },
        dark: {
          DEFAULT: "var(--dark) !important",
          800: "var(--dark-800) !important",
        },
      },
    },
  },
  plugins: [],
};
