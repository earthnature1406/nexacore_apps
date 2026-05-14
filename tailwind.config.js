/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "on-error": "#ffffff",
        "on-error-container": "#93000a",
        "on-secondary": "#ffffff",
        "on-secondary-fixed-variant": "#42474c",
        "on-primary-container": "#dae5ff",
        "tertiary": "#813900",
        "on-tertiary-fixed-variant": "#753400",
        "primary": "#004d99",
        "on-surface-variant": "#424752",
        "surface-container-low": "#f2f3fb",
        "inverse-on-surface": "#eff0f9",
        "background": "#f9f9ff",
        "on-primary-fixed": "#001b3d",
        "surface-variant": "#e1e2ea",
        "inverse-primary": "#a9c7ff",
        "surface-container-high": "#e7e8f0",
        "secondary-fixed": "#dee3e8",
        "on-background": "#191c21",
        "tertiary-container": "#a64c00",
        "primary-fixed": "#d6e3ff",
        "surface-dim": "#d8dae2",
        "error": "#ba1a1a",
        "tertiary-fixed-dim": "#ffb68c",
        "inverse-surface": "#2e3037",
        "outline": "#727783",
        "tertiary-fixed": "#ffdbc9",
        "secondary-container": "#dce0e6",
        "on-primary": "#ffffff",
        "surface-container-highest": "#e1e2ea",
        "on-tertiary": "#ffffff",
        "error-container": "#ffdad6",
        "secondary-fixed-dim": "#c2c7cc",
        "on-surface": "#191c21",
        "primary-fixed-dim": "#a9c7ff",
        "on-secondary-container": "#5e6368",
        "surface-container": "#ecedf6",
        "on-tertiary-fixed": "#321200",
        "primary-container": "#1565c0",
        "outline-variant": "#c2c6d4",
        "surface": "#f9f9ff",
        "surface-tint": "#005db7",
        "secondary": "#5a5f64",
        "surface-container-lowest": "#ffffff",
        "surface-bright": "#f9f9ff",
        "on-primary-fixed-variant": "#00468c",
        "on-tertiary-container": "#ffdece",
        "on-secondary-fixed": "#171c20"
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      "spacing": {
        "md": "1rem",
        "margin-desktop": "2.5rem",
        "gutter": "1.5rem",
        "sm": "0.5rem",
        "xxl": "4rem",
        "xs": "0.25rem",
        "xl": "2rem",
        "lg": "1.5rem",
        "margin-mobile": "1rem"
      },
      "fontFamily": {
        "label-md": ["Inter", "sans-serif"],
        "headline-md": ["Metropolis", "sans-serif"],
        "headline-lg-mobile": ["Metropolis", "sans-serif"],
        "headline-lg": ["Metropolis", "sans-serif"],
        "headline-sm": ["Metropolis", "sans-serif"],
        "display-lg": ["Metropolis", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"]
      }
    }
  }
}
