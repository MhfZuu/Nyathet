import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4FD1C5',
        'primary-foreground': '#1A202C',
        background: '#F7FAFC',
        foreground: '#4A5568',
        card: '#FFFFFF',
        'card-foreground': '#4A5568',
        secondary: '#E2E8F0',
        'secondary-foreground': '#2D3748',
        muted: '#EDF2F7',
        'muted-foreground': '#718096',
        border: '#E2E8F0',
        'primary-main': '#4A5568',
        'accent-soft': '#4FD1C5',
        'background-light': '#F7FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
