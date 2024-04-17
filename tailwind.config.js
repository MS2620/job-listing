/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "primary": "hsl(180, 29%, 50%)",
      "background": "hsl(180, 52%, 96%)",
      "filter-tablets": "hsl(180, 31%, 95%)",
      "dark-g-cyan": "hsl(180, 8%, 52%)",
      "very-dark-g-cyan": "hsl(180, 14%, 20%)",
      "bg": "rgb(242, 250, 250)",
      "black": "#000",
      "white": "#fff",
      "name": "hsl(4, 100%, 67%)",
    },
  },
  plugins: [],
};
