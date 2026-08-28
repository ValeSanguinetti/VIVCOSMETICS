/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "surface-bright": "#393939",
        "outline-variant": "#444748",
        "surface-variant": "#353535",
        "on-primary-container": "#636565",
        "surface-container-high": "#2a2a2a",
        "inverse-on-surface": "#303030",
        "on-secondary": "#313030",
        "on-error": "#690005",
        "primary-fixed-dim": "#c6c6c7",
        "on-secondary-container": "#b7b5b4",
        "on-background": "#e2e2e2",
        "primary": "#ffffff",
        "on-surface-variant": "#c4c7c8",
        "on-secondary-fixed-variant": "#474746",
        "surface-container-low": "#1b1b1b",
        "tertiary": "#ffffff",
        "tertiary-fixed-dim": "#ffb2ba",
        "surface-dim": "#131313",
        "surface-container-highest": "#353535",
        "surface-container-lowest": "#0e0e0e",
        "primary-container": "#e2e2e2",
        "secondary-fixed-dim": "#c8c6c5",
        "on-primary-fixed": "#1a1c1c",
        "secondary": "#c8c6c5",
        "surface": "#131313",
        "tertiary-container": "#ffd9dc",
        "surface-tint": "#c6c6c7",
        "secondary-fixed": "#e5e2e1",
        "inverse-surface": "#e2e2e2",
        "surface-container": "#1f1f1f",
        "on-primary-fixed-variant": "#454747",
        "secondary-container": "#474746",
        "error": "#ffb4ab",
        "inverse-primary": "#5d5f5f",
        "on-tertiary-fixed": "#400011",
        "on-surface": "#e2e2e2",
        "on-tertiary-container": "#c90046",
        "error-container": "#93000a",
        "background": "#131313",
        "on-tertiary": "#670020",
        "tertiary-fixed": "#ffd9dc",
        "on-error-container": "#ffdad6",
      },

      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },

      spacing: {
        gutter: "24px",
        "stack-md": "24px",
        "stack-sm": "8px",
        "stack-lg": "64px",
        "margin-desktop": "80px",
        "margin-mobile": "20px",
        "section-padding": "120px",
      },

      fontFamily: {
        "headline-lg-mobile": ["Hanken Grotesk"],
        "display-lg": ["Hanken Grotesk"],
        "body-lg": ["Manrope"],
        "body-md": ["Manrope"],
        "label-lg": ["Geist"],
        "headline-lg": ["Hanken Grotesk"],
        "label-sm": ["Geist"],
        "headline-md": ["Hanken Grotesk"],
      },

      fontSize: {
        "headline-lg-mobile": [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],

        "display-lg": [
          "72px",
          {
            lineHeight: "80px",
            letterSpacing: "-0.04em",
            fontWeight: "700",
          },
        ],

        "body-lg": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "400",
          },
        ],

        "body-md": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],

        "label-lg": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0.1em",
            fontWeight: "600",
          },
        ],

        "headline-lg": [
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],

        "label-sm": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0.05em",
            fontWeight: "500",
          },
        ],

        "headline-md": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "500",
          },
        ],
      },
    },
  },

  plugins: [],
};