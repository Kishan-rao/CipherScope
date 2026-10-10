/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cipher: {
          bg: 'var(--color-app)', card: 'var(--color-card)', surface: 'var(--color-surface)',
          border: 'var(--color-border)', text: 'var(--color-text)', muted: 'var(--color-muted)', accent: 'var(--color-accent)',
        }
      },
      fontFamily: { mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'] },
    },
  },
  plugins: [],
}
