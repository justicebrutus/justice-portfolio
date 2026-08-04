/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAF9F6",      // warm off-white
        card: "#FFFFFF",
        ink: "#141318",        // near-black text
        body: "#3C3A44",       // body text
        mute: "#6B6875",       // secondary
        faint: "#928FA0",      // tertiary (kept ≥ AA where used large)
        line: "#E7E4DE",
        accent: "#5B4BE0",     // electric indigo
        accentink: "#4536C4",
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        ui: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
