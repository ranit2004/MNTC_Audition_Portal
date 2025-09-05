import type { Config } from "tailwindcss";

const config: Config = {
  // darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "4xl": ["10px 10px 0px rgba(241, 135, 1, 0.75)"],
        "2xl": ["5px 5px 0px rgba(241, 135, 1, 0.75)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1600px",
      },
      fontFamily: {
        body: ["var(--font-ps)"],
        head: ["var(--font-r)"],
      },
    },
  },
  plugins: [],
};
export default config;
