/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "index.html"],
  theme: {
    extend: {},
    colors: {
      "Soft-red": "hsl(7, 99%, 70%)",
      "Yellow": "hsl(51, 100%, 49%)",
      "graphic-design-text": "hsl(167, 40%, 24%)",
      "photography-text": "hsl(198, 62%, 26%)",
      "footer": "#90d4c5",
      "Very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
      "Very-dark-grayish-blue": "hsl(213, 9%, 39%)",
      "Dark-grayish-blue": "hsl(232, 10%, 55%)",
      "Grayish-blue": "hsl(210, 4%, 67%)",
      "White": "hsl(0, 0%, 100%)",
      "cyan": "#3ebfff",
      "footer-text": "#286f61",
    },
  },
  plugins: [],
};
