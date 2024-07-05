/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {},
      backgroundColor: {
        Color_primario: "#36190D",
        Color_secundario: "#FFA72F",
        Color_negro: "#3A3A3A",
        Color_errores: "#FF2530",
        "Color_verde_(success)": "#66B04C",
        orange: "#f97316",
        amber: "#92400e",
        red500: "#ef4444",
        green500: "#22c55e",
        sky600: "#0284c7",
        rose800: "#9f1239",
        violet900: "#4c1d95",
        indigo300: "#a5b4fc",
        pink300: "#f9a8d4",
        zinc800: "#27272a",
      },
      colors: {
        Color_errores: "#FF2530",
        Color_primario: "#36190D",
        "gray-transparent": "rgba(128, 128, 128, 0.5)",
      },
      textColor: {
        red: "#FF2530",
        Color_primario: "#36190D",
      },
    },
    plugins: [],
  },
};
