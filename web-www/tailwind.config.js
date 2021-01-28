const production = !process.env.ROLLUP_WATCH; // or some other env var like NODE_ENV
module.exports = {
  purge: {
    content: [
      "./src/**/*.svelte",
      // may also want to include base index.html
    ],
    enabled: production // disable purge in dev
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    // for tailwind UI users only
    require('@tailwindcss/ui'),
    // other plugins here
  ],
  future: { // for tailwind 2.0 compat
    purgeLayersByDefault: true, 
    removeDeprecatedGapUtilities: true,
  }
}
