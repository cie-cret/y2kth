/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // darkMode: false,
  content: [],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        y2ktheme: {
          primary: '#fe68a8',
          secondary: '#3869c8',
          // accent: '#4fdddf',
          accent: '#9758DA',
          neutral: '#3d4451',
          'base-100': '#f0f0f0'
        }
      },
      'dark'
    ]
  }
}
