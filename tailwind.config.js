/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        cream: {
          DEFAULT: '#F7F2E9',
          50: '#FFFDF8',
          100: '#FAF6EE',
          200: '#F7F2E9',
          300: '#EFE6D6',
          400: '#E5D8C0',
        },
        ivory: '#FFFDF8',
        espresso: {
          DEFAULT: '#3B241C',
          950: '#150E0A',
          900: '#1E1511',
          850: '#2A1C16',
          800: '#3B241C',
          700: '#4D3126',
          600: '#5E3D30',
        },
        coffee: {
          DEFAULT: '#6B4938',
          light: '#855E49',
          dark: '#52372A',
        },
        beige: {
          DEFAULT: '#D9C6AE',
          light: '#E7D9C7',
          dark: '#C7B195',
        },
        olive: {
          DEFAULT: '#73745B',
          light: '#8E9071',
          dark: '#5B5C47',
        },
        amber: {
          DEFAULT: '#C5A059',
          light: '#DFC58C',
          dark: '#9F7C34',
        }
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(59, 36, 28, 0.08), 0 0 1px 1px rgba(217, 198, 174, 0.25)',
        'luxury-hover': '0 25px 50px -12px rgba(59, 36, 28, 0.14), 0 0 1px 1px rgba(197, 160, 89, 0.35)',
        'luxury-card': '0 10px 30px -10px rgba(59, 36, 28, 0.06)',
      },
      backgroundImage: {
        'warm-vignette': 'radial-gradient(ellipse at center, rgba(59, 36, 28, 0.4) 0%, rgba(21, 14, 10, 0.85) 100%)',
        'soft-cream-gradient': 'linear-gradient(180deg, #FFFDF8 0%, #F7F2E9 100%)',
      }
    },
  },
  plugins: [],
}
