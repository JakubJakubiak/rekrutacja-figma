/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["dark"],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000080',
          light: '#1a1a8c',
        },
        secondary: {
          DEFAULT: '#f0f4f8',
          dark: '#d9e2ec',
        }
      },
      keyframes: {
        shuffle: {
          '0%, 100%': { transform: 'translateY(-5%) rotate(3deg)', },
          '20%': { transform: ' rotate(2deg)',  },
          '40%': { transform: ' rotate(3deg)',  },
          '50%': { transform: 'translateX(0) rotate(4deg)',  },
        },
      },
      animation: {
        shuffle: 'shuffle 1s ease-in-out infinite',
      },
    
    },
  },
  plugins: [daisyui],
}