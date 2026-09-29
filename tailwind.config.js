/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#05070a',
          card: '#0a0e12',
          light: '#121820',
        },
        bone: {
          DEFAULT: '#dfe7e0',
          dim: '#aab4ad',
          muted: '#78837c',
        },
        vermilion: {
          DEFAULT: '#e0231c',
          ember: '#ff5a3c',
          gold: '#c9a24a',
        }
      },
      fontFamily: {
        sans: ['Onest', 'system-ui', '-apple-system', 'sans-serif'],
        jp: ['Noto Sans JP', 'Onest', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: 0.6, transform: 'scale(0.98)' },
          '50%': { opacity: 1, transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
