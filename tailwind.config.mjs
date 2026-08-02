/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Core palette — warm, grounded, print-editorial
        parchment:  '#fcfbfa',
        charcoal:   '#2c2a29',
        ink:        '#1a1917',
        'ink-muted':'#5a5754',
        'ink-light':'#8c8986',
        rule:       '#e2ddd8',

        // Accent trio — choose contextually per study
        olive:    { DEFAULT: '#6b7355', light: '#f0f1e8', border: '#c4c9a8' },
        slate:    { DEFAULT: '#4a6080', light: '#edf1f6', border: '#b0c1d4' },
        terra:    { DEFAULT: '#b06040', light: '#faf2ee', border: '#e2bfaf' },
        gold:     { DEFAULT: '#c09a4a', light: '#fdf8ee', border: '#e8d49a' },
      },
      fontFamily: {
        serif:  ['Lora', 'Georgia', 'Cambria', 'serif'],
        sans:   ['Inter', 'system-ui', 'sans-serif'],
        display:['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        // Editorial type scale
        'display-xl': ['clamp(3rem, 8vw, 6.5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 5vw, 4rem)',  { lineHeight: '1.0',  letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.5rem)',{ lineHeight: '1.1',  letterSpacing: '-0.01em' }],
        'heading':    ['clamp(1.25rem, 2vw, 1.75rem)',{ lineHeight: '1.25', letterSpacing: '-0.005em' }],
        'subheading': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.12em' }],
        'body-lg':    ['1.125rem', { lineHeight: '1.8' }],
        'body':       ['1rem',     { lineHeight: '1.75' }],
        'caption':    ['0.8125rem',{ lineHeight: '1.5', letterSpacing: '0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        'section': '7rem',
      },
      maxWidth: {
        'content': '72rem',
        'prose':   '42rem',
        'narrow':  '32rem',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};
