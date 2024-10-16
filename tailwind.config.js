/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/src/assets/images/banner.jpg')",
        'banner2': "url('/src/assets/images/banner2.jpg')",
      },
      backgroundColor: {
        'dark-brown': '#3D2E2B',
        'dark-gray': '#323B36',
        'broken-white': '#EAEAEA'
      },
      textColor: {
        'white': '#ffffff',
        'dark-gray': '#323B36',
        'broken-white': '#F8F7F3',
        'dark-brown': '#3D2E2B',
      },
      fontSize: {
        'extralarge': '12rem',
      },
      fontFamily: {
        quicksand: ['quicksand'],
        dancing: ['dancing'],
        darleston: ['darleston'],
        gustatory: ['gustatory'],
        cormorantgaramond: ['cormorantgaramond']
      },
      gridTemplateRows: {
        'full': '100%',
        'norepeat': 'minmax(0, 1fr)',
        '19': 'repeat(19, min-content) 1fr',
      },
      gridTemplateColumns: {
        'full': '100%',
        'norepeat': 'minmax(0, 1fr)',
      }
    },
  },
  plugins: [],
}

