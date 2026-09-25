/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sehat: {
          'maroon-800': '#5F1717',
          'maroon-700': '#7B1E1E',
          'maroon-600': '#8F2A24',
          'maroon-100': '#F4DDDA',
          'saffron-600': '#C97A32',
          'saffron-100': '#FBE8D4',
          'olive-700': '#556B2F',
          'olive-600': '#667F38',
          'olive-100': '#E7EEDC',
          'success-700': '#3F7D20',
          'success-100': '#DDEDDC',
          'emergency-700': '#B91C1C',
          'emergency-100': '#FDE2E2',
          'navy-900': '#172A46',
          'navy-700': '#40516A',
          'cream-50': '#FDFCF9',
          'cream-100': '#FAF7F2',
          'card': '#FFFFFF',
          'border': '#EAE1D5',
          'muted': '#F5F0E8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'DM Serif Display', 'serif'],
      },
      boxShadow: {
        'sehat': '0 2px 8px rgba(79, 52, 34, 0.04)',
        'sehat-elevated': '0 6px 20px rgba(79, 52, 34, 0.06)',
        'sehat-modal': '0 12px 32px rgba(79, 52, 34, 0.10)',
      }
    },
  },
  plugins: [],
}
