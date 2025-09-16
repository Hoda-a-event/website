/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pfp/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#003B75",
      secondary: "#4348C0",
      tertiary: "#F76A4E",
      stroke: "#D5D5D5",
      "faded-text": "#979797",
      "feed-color": "#F2F8FF",
      "line-color-2": "#AECFF0",
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
      current: "currentColor",
    },
    fontFamily: {
      sans: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
      poppins: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
