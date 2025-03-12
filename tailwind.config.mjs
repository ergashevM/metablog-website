/** @type {import('tailwindcss').Config} */
export default {
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
      },
      fontFamily: {
        workSans: "var(--font-work-sans)",
        plusJakartaSans: "var(--font-plus-jakarta-sans)",
        sourseSerifPro: "var(--font-source-serif-pro)",
      },
    },
  },
  plugins: [],
};
