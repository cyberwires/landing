import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "spin-fast": "spin 3s linear infinite reverse",
      },
      fontSize: {
        sm: ["1.2rem", { lineHeight: "1.5" }], // 12px
        mm: ["1.4rem", { lineHeight: "1.5" }], // 16px
        base: ["1.6rem", { lineHeight: "1.5" }], // 16px
        lg: ["2rem", { lineHeight: "1.5" }], // 20px
        xl: ["2.4rem", { lineHeight: "1.5" }], // 24px
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: "var(--green)",
        blue: "var(--blue)",
        "red-stone": {
          "900": "var(--red-stone)",
          "300": "var(--red-stone-light)",
        },
        "light-grey": "var(--light-grey)",
        grey: "var(--grey)",
        disabled: "var(--disabled)",
      },
      spacing: {
        "2000": "200rem",
        "500": "50rem",
        "360": "36rem", // 360px
        "300": "30rem", // 300px
        "270": "27rem", // 270px
        "250": "25rem", // 250px
        "200": "20rem", // 200px
        "150": "15rem", // 150px
        "120": "12rem", // 120px
        "100": "10rem", // 100px
        "75": "7.5rem", // 75px
      },
    },
  },
  plugins: [],
} satisfies Config;
