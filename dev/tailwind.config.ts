import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        uptickBlue: '#7EA3FF',
        uptickDarkBlue: '#477BFF',
        uptickBlack: '#4D4D4D',
        uptickGray: '#B3B3B3',
        // black: '#000000',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'about-pattern': "url('/about-pattern.svg')",
      }
    }
  },
  plugins: [],
};
export default config;
