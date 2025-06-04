// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FFD66B",
          base100: "#ffffff",
          "base-100": "#ffffff",
        },
      },
      {
        dark: {
          primary: "#0D9488",
          base100: "#1E293B",
          "base-100": "#1E293B",
        },
      },
    ],
  },
};
