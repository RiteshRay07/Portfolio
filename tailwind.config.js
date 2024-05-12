/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        xl: "-1px -1px 4px 0px rgba(255,245,255,1)",
      },
    },
  },
  plugins: [],
};
