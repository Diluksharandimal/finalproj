/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {/*style part can here also*/
    colors:{
      "primary":"#010851",
      "secondary":"#9A7AF1",
      "tartiary":"#707070",
      "pink":"#EE9AE5"
    },

    boxShadow: {
      '3xl': '0px 10px 50px 0px rgba(0, 0, 0, 0.15)',
    },

    width:{
      'w-100':'500px',
      'w-120':'750px'
    }
  
  },
  },
  plugins: [],
}

