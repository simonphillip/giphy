/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-rose": "#f1dede",
        "custom-puce": "#d496a7",
        "custom-wenge": "#5d576b",
        "custom-azure": "#6cd4ff",
        "custom-coral": "#fe938c",
      },
    },
  },
  plugins: [],
};
