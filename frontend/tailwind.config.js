/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {

    extend: {
      colors: {
        cl_bg: "#343b3d",
        cl_amarelo: "#dea318",
        cl_roxo: "#6c3dae",
      },
    },

  },
  plugins: [],
};
