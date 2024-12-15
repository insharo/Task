/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4px 20px 0px rgba(238, 238, 238, 0.5)",
      },
    },
  },
  plugins: [],
};
