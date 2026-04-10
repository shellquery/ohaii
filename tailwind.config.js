/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#e0f7ff',
          100: '#b0ebff',
          200: '#7dd9f9',
          300: '#47c5f5',
          400: '#1ab5f0',
          500: '#0099d6',
          600: '#0077B6',
          700: '#005d90',
          800: '#023E8A',
          900: '#012a5e',
          DEFAULT: '#0077B6',
          light: '#00B4D8',
          dark: '#023E8A',
        },
        sand: {
          DEFAULT: '#F4A261',
          light: '#FFDDD2',
          dark: '#E76F51',
        },
        palm: {
          DEFAULT: '#52B788',
          light: '#95D5B2',
          dark: '#1B4332',
        },
        hawaii: {
          navy: '#0A1628',
          surface: '#1A2942',
          gold: '#FFB703',
          coral: '#FF6B6B',
          teal: '#00B4D8',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'wave': 'wave 6s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(135deg, #0077B6 0%, #00B4D8 50%, #90E0EF 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #FF6B6B 0%, #F4A261 50%, #FFE66D 100%)',
        'palm-gradient': 'linear-gradient(135deg, #1B4332 0%, #52B788 50%, #95D5B2 100%)',
        'hero-overlay': 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.6) 100%)',
      },
      boxShadow: {
        'ocean': '0 4px 20px rgba(0, 119, 182, 0.3)',
        'sand': '0 4px 20px rgba(244, 162, 97, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
