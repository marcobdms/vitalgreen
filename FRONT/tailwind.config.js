module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-poppins)'],
        secondary: ['var(--font-homemade)'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#576E40",
          "secondary": "#EAF2DF",
          "neutral": "#FAF5ED"
        },
      },
    ],
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
