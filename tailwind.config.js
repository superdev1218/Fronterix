module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'xs' : '575px',

      'sm': '750px',
      // => @media (min-width: 640px) { ... }

      'md': '1050px',
      // => @media (min-width: 768px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1468px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1690px',
      // => @media (min-width: 1536px) { ... }

      'tablet' : {'max' : '977px'},
      
      'max-xs' : {'max' : '575px'},

      'max-sm': {'max' : '750px'},
      // => @media (max-width: 640px) { ... }

      'max-md': {'max' : '900px'},
      // => @media (max-width: 768px) { ... }

      'max-lg': {'max' : '1280px'},
      // => @media (max-width: 1024px) { ... }

      'max-xl': {'max' : '1468px'},
      // => @media (max-width: 1280px) { ... }

      'max-2xl': {'max' : '1690px'},
      // => @media (max-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'default-gradient-radial': 'radial-gradient(90% 115% at 100% 0%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    ["styled-components", { "ssr": true }]
  ],
}