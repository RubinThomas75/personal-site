import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",  // ✅ Ensures Tailwind scans all Next.js app files
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",  // ✅ Includes reusable components
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",  // ✅ If `pages/` exists, include it
    "./src/styles/globals.css", // ✅ Ensures styles are scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
