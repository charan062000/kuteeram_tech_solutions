/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
      },
      screens: {
        xl1: "1400px",
        xl2: "1300px",
        xl3: "1200px",
        xl4: "1134px",
      },
    },
  },

  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};
