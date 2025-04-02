/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        quantum: {
          900: '#1e1b4b',
          800: '#312e81',
        },
        gold: {
          400: '#FFD700',
          600: '#B8860B',
        },
        medical: {
          white: '#f8fafc',
        },
        accent: {
          pink: '#ec4899',
        },
        dark: {
          900: '#111827',
          800: '#1f2937',
          700: '#374151',
        },
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        blob: 'blob 7s infinite',
        shimmer: 'shimmer 3s infinite linear'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}