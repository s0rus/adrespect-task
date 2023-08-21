import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{html,ts}", "./*.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          lg: "1040px",
          md: "960px",
          sm: "720px",
        },
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "var(--white)",
        black: "var(--black)",
      },
    },
    fontFamily: {
      primary: ["var(--font-primary)", ...fontFamily.sans],
      secondary: ["var(--font-secondary)", ...fontFamily.sans],
    },
  },
  plugins: [],
} satisfies Config;
