/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "custom-md": "800px",
        "custom-lg": "1050px",
      },
    },
  },
  plugins: [],
};
