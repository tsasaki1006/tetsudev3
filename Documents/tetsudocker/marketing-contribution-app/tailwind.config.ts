import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Share Tech Mono"', 'monospace'],
      },
      colors: {
        'dark-bg': '#0D0221',
        'neon-cyan': '#00f6ff',
        'neon-magenta': '#ff00ff',
        'neon-lime': '#a8ff00',
      },
      boxShadow: {
        'neon-cyan': '0 0 5px #00f6ff, 0 0 10px #00f6ff, 0 0 20px #00f6ff',
        'neon-magenta': '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff',
      }
    },
  },
  plugins: [],
}
export default config