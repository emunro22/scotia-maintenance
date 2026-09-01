import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0E2A52',
          deep: '#0A1E3C',
          soft: '#12325F',
        },
        blue: {
          brand: '#1B6FB2',
        },
        cyan: {
          brand: '#29A6C9',
          light: '#5FC3DE',
        },
        moss: '#3E6B4C',
        mist: '#F4F6F8',
        stone: '#E4E9EF',
        ink: '#14181D',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      borderRadius: {
        card: '10px',
      },
    },
  },
  plugins: [],
};

export default config;
