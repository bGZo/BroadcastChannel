import { defineConfig } from 'tailwindcss'


export default defineConfig({
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background-color)',
        foreground: 'var(--foreground-color)',
        highlight: 'var(--highlight-color)',
        border: 'var(--border-color)',
        link: 'var(--link-color)',
        secondary: 'var(--secondary-color)',
        cell: 'var(--cell-background-color)',
        code: 'var(--code-background-color)',
      },
      shadows: {
        card: '0 18px 48px rgba(0, 0, 0, 0.08)',
        nav: '0 12px 32px rgba(7, 193, 96, 0.18)',
        'nav-hover': '0 8px 24px rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
})
