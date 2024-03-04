/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        family: "Unbounded",
        sfRegular: "SF-Pro-Display-Regular",
        sfBold: "SF-Pro-Display-Bold",
        sfMedium: "SF-Pro-Display-Medium",
        sfSemiBold: "SF-Pro-Display-semiBold",
        sfThin: "SF-Pro-Display-Thin",
        sfLight: "SF-Pro-Display-Light",
      },

      colors: {
        primary: {
          100: "#E9FF9D",
          200: "#FDFFA9",
          500: "#0028FB",
        },
        secondary: {
          100: "#6A6960",
          200: "#E9E9E9",
          300: "#F4F3F3",
          400: "#F9F9FA",
          500: "#060508",
          600: "#A5A5A5",
          700: "#EBEBEB",
          800: "#dcdcdb",
          pic: "#8f8f8f",
        },
        success: {
          100: "#00B934",
          300: "#008615",
          400: "#DFF8E5",
        },
        danger: {
          100: "#e8c7c8",
          200: "#CC0505",
          300: "#E64303",
        },
        dark: {
          100: "#060508",
        },
        light: {
          100: "#F8FFDD",
          200: "#FFF",
          300: "#EBEBEB",
        },
        purp: {
          100: "#AA53F5",
          200: "#CD93B1",
          300: "#F6DE62",
          400: "#CEBDEF",
        },
      },
      positionAbsolute: {
        bottomless: "68",
      },
    },
  },

  plugins: [],
};
