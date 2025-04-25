/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", // this ensures Tailwind picks up your React files
    ],
    theme: {
      extend: {
        fontFamily: {
          cinzel: ['Cinzel', 'serif'],
        },
      },
    },
    plugins: [],
  };
  