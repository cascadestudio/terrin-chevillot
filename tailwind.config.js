/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "#253856",
        white: "#F4F3EF",
      },
      fontFamily: {
        sans: ["var(--font-nunito-sans)"],
      },
      fontSize: {
        base: "16px",
      },
      fontWeight: {
        base: "600",
      },
    },
  },
  plugins: [],
};
