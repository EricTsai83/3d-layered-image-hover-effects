import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
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

      keyframes: {
        gifAnimation: {
          from: { "background-image": "url(/img1.png)" },
          to: { "background-image": "url(/img2.png)" },
        },
      },
      animation: {
        gifAnimation: "gifAnimation 0.15s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-3d"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".animation-paused": {
          "animation-play-state": "paused !important",
        },
        ".animation-running": {
          "animation-play-state": "running !important",
        },
        ".leanback": {
          transition: "1s",
          transform: "perspective(20px) rotateX(2deg) translateY(-50px)",
        },
      });
    }),
  ],
};
export default config;
