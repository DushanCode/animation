/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bgLogin:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(assets/login-bg.jpg)',
      },
    },
  },
  plugins: [],
};
