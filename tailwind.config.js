module.exports = {
  mode: 'jit', // Enables JIT mode
  purge: ['./src/**/*.{js,jsx,ts,tsx,html}'], // Specify file paths for tree-shaking unused styles
  theme: {
    extend: {
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      }
    },
  },
};
