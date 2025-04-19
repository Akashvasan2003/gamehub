/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          darkBg: "#121212",
          retroRed: "#ff003d",
          retroRedDark: "#e60035",
          darkGray: "#1e1e1e",
          darkForm: "#1a1a1a",
          gold: "#ffd700",
        },
        fontFamily: {
          noto: ["'Noto Sans TC'", "sans-serif"],
          retro: ["'Press Start 2P'", "cursive"],
        },
      },
    },
    plugins: [],
  };
  