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
        blue: "#253856",
        grey: "rgba(61, 76, 100, 0.1)",
        white: "#F4F3EF",
      },
      backgroundImage: {
        "grid-pattern": `linear-gradient(to right, rgba(61, 76, 100, 0.1) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(61, 76, 100, 0.1) 1px, transparent 1px)`,
      },
      fontFamily: {
        sans: ["var(--font-nunito-sans)"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
      },
      fontWeight: {
        base: "600",
      },
    },
  },
  plugins: [],
};
