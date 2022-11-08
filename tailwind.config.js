/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
      colors: {
        'transparent': 'transparent',
        'aqua': {
          100: '#00E0FF',
        },
        'slate': {
          50: '#ffffff',
        },
        'blue': {
          500: '#3b82f6',
        },
      },
      extend: {
        backgroundImage: {
          'code-img': "url('./assets/images/code.jpg')",
        }
      },
  },
  plugins: [
    require('tw-elements/dist/plugin', 'flowbite/plugin')
  ]
}
