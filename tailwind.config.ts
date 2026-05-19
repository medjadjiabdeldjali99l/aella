import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core surfaces
        "surface":                   "#fff8f4",
        "surface-dim":               "#e3d8ce",
        "surface-bright":            "#fff8f4",
        "surface-container-lowest":  "#ffffff",
        "surface-container-low":     "#fdf2e8",
        "surface-container":         "#f7ece2",
        "surface-container-high":    "#f1e6dc",
        "surface-container-highest": "#ebe1d7",
        "surface-variant":           "#ebe1d7",
        "surface-tint":              "#745849",

        // On-surface
        "on-surface":         "#201b15",
        "on-surface-variant": "#4f453f",
        "inverse-surface":    "#352f29",
        "inverse-on-surface": "#faefe5",

        // Primary – Nude Rose
        "primary":           "#745849",
        "on-primary":        "#ffffff",
        "primary-container": "#d8b4a2",
        "on-primary-container": "#5f4537",
        "inverse-primary":   "#e4bfad",
        "primary-fixed":     "#ffdbca",
        "primary-fixed-dim": "#e4bfad",
        "on-primary-fixed":  "#2a170b",
        "on-primary-fixed-variant": "#5b4133",

        // Secondary – Sand Brown
        "secondary":           "#715a46",
        "on-secondary":        "#ffffff",
        "secondary-container": "#fdddc3",
        "on-secondary-container": "#77604c",
        "secondary-fixed":     "#fdddc3",
        "secondary-fixed-dim": "#dfc1a8",
        "on-secondary-fixed":  "#281809",
        "on-secondary-fixed-variant": "#584330",

        // Tertiary – Powdery Nude
        "tertiary":           "#675d51",
        "on-tertiary":        "#ffffff",
        "tertiary-container": "#c7b9ac",
        "on-tertiary-container": "#53493f",
        "tertiary-fixed":     "#efe0d2",
        "tertiary-fixed-dim": "#d2c4b6",
        "on-tertiary-fixed":  "#221a12",
        "on-tertiary-fixed-variant": "#4f453b",

        // Outline
        "outline":         "#81746e",
        "outline-variant": "#d3c3bc",

        // Error
        "error":             "#ba1a1a",
        "on-error":          "#ffffff",
        "error-container":   "#ffdad6",
        "on-error-container": "#93000a",

        // Background
        "background":    "#fff8f4",
        "on-background": "#201b15",

        // Named brand shorthands (matches user spec exactly)
        "aella-bg":      "#F3E8DE",
        "aella-accent1": "#E5D6C8",
        "aella-accent2": "#F7F3EE",
        "aella-accent3": "#D8B4A2",
        "aella-text":    "#B79B84",
      },

      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans:  ["Manrope", "system-ui", "sans-serif"],
      },

      fontSize: {
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "600" }],
        "label-sm": ["12px", { lineHeight: "16px", fontWeight: "500" }],
      },

      borderRadius: {
        DEFAULT: "0.5rem",
        sm:      "0.25rem",
        md:      "0.75rem",
        lg:      "1rem",
        xl:      "1.5rem",
        "2xl":   "2rem",
        full:    "9999px",
      },

      spacing: {
        xs:   "4px",
        sm:   "12px",
        base: "8px",
        md:   "24px",
        lg:   "40px",
        xl:   "64px",
      },

      maxWidth: {
        desktop: "1200px",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      animation: {
        float:       "float 6s ease-in-out infinite",
        shimmer:     "shimmer 3s linear infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },

      backdropBlur: {
        nacre: "24px",
      },
    },
  },
  plugins: [],
};

export default config;
