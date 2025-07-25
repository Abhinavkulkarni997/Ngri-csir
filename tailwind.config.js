/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend:  {
      animation: {
        text: 'text 5s ease infinite',
      },
      colors:{
        'primary': '#550000',
        'secondary': '#f3f4f6',
        'tertiary': '#f8fafc',
        'accent': '#f59e0b',
        'dark': '#1f2937',
        'light': '#f3f4f6',
        'highlight': '#fbbf24',
        'muted': '#9ca3af',
        'error': '#dc2626',
        'success': '#16a34a',
        'warning': '#f59e0b',
        'info': '#2563eb',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
     screens: {
      xs: '375px', 
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  
  plugins: [
  
  ],
}