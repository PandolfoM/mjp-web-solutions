import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "transparent": "transparent",
      "background": "#0E0F1E",
      "primary": "#F300AE",
      "secondary": "#8E39C5",
      "card": "#7B61FF",
      "white": "#ffffff"
    },
    fontSize: {
      xxs: "8px",
      xs: "10px",
      sm: "12px",
      md: "16px",
      lg: "25px"
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    }
  },
  plugins: [],
};
export default config;
