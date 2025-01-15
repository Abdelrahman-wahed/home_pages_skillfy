/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainWhite: "#FCFCFE",
        mainColor: "#703BF7",
        mainGray: "#999999",
      },
      container: {
        margin: "auto",
        center: true,
      },
      screens: {
        sm: { max: "767px" },
      },
      fontFamily: {
        Urbanist: "Urbanist",
      },
      boxShadow: { 

        'cardShadow': '0px 0px 5.3px 0px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
};
