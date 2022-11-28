/* eslint-disable global-require */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      colors: {
        primary: "#446adb",
        gray1: "#ececec",
        transparent: "transparent",
        current: "currentColor",
        white: {
          0: "#ffffff",
        },
        black: {
          0: "#000000",
        },
      },

      borderRadius: {
        1: "1px",
        4: "4px",
        8: "8px",
        12: "12px",
        16: "16px",
        20: "20px",
        pill: "9999px",
      },
      borderWidth: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
      },

      maxWidth: {
        508: "508px",
        530: "530px",
        670: "670px",
        780: "780px",
        900: "900px",
        1100: "1100px",
        full: "100%",
        auto: "auto",
      },
    },
  },
  plugins: [],
};
