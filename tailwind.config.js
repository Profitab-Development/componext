/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-suisse)'],
        'suisse': ['var(--font-suisse)'],
        'mono': ['Roboto Mono', 'var(--font-roboto-mono)', 'SF Mono', 'Monaco', 'Inconsolata', 'Courier New', 'monospace'],
        'montserrat': ['Montserrat', 'var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
