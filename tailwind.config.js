import fromPlugin from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            tail: '#040127'
         },
         fontFamily: {
            sans: ['Nunito Sans', 'sans-serif']
         }
      }
   },
   plugins: [
      fromPlugin
   ]
};
