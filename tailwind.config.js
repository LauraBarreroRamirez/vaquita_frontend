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
        "Color_rojo (errores)": "#FF2530",
        "Color_verde (success)": "#66B04C",
      },
      colors: {
        red: "#FF2530",
      },
    },
    plugins: [],
  },
};
