module.exports = {
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        'accent-8': '#663399',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        md: '15px',
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: theme => ({
        'main-pattern': "url('../public/pageturner.svg')",
      }),
      purge: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
        ],
        theme: {},
        variants: {},
        plugins: [],
    }
    },
  },
}
