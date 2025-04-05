/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whiteText: "#fff",
        darkText: "#000000",
        lightText: "#9b9b9b",
        greenText: "#1d8221",
        redText: "#E02B2B",
        skyText: "#32BDE8",
      },
      flex: {
        full: "0 0 100%",
      },
    },
  },
  plugins: [typography, aspectRatio],
};
