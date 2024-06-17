import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px", // max-w-screen-sm
          md: "768px", // max-w-screen-md
          lg: "1024px", // max-w-screen-lg
          xl: "1280px", // max-w-screen-xl
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
