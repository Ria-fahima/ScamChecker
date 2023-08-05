/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      'silver-rust': '#c3b9b7',
      'bossanova': '#47294c',
      'white-lilac' : '#faf4fc',
      'white' : '#ffffff',
      'fedora': '#816f7d'
    },
    extend: {},
  },
  plugins: [],
}

