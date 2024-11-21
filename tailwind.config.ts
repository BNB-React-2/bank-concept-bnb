import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        text: 'var(--text)',
        contrast: 'var(--contrast)',
        white: 'var(--white)',
        bg: 'var(--bg)',
      },
    },
  },
  plugins: [require('daisyui')],
  modules: {
    daisyui: {
      theme: ['light'],
    },
  },
} satisfies Config;
