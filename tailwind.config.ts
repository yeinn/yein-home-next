import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}", // ✅ layouts 폴더 추가
    "./src/store/**/*.{js,ts,jsx,tsx,mdx}", // ✅ store 폴더 추가
  ],
  theme: {
    extend: {
      fontFamily: {
        nexon: ["'NEXON Lv1 Gothic OTF'", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
