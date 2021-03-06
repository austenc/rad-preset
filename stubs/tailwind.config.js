const colors = require('tailwindcss/lib/flagged/uniformColorPalette').default
    .theme.colors

module.exports = {
    experimental: 'all',
    plugins: [
        require('@tailwindcss/custom-forms'),
        require('@tailwindcss/typography'),
    ],
    purge: [
        'app/**/*.php',
        './resources/**/*.php',
        './resources/**/*.css',
        './resources/**/*.js',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                default: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
            },
        },
        extend: {
            colors: {
                primary: colors.teal,
                secondary: colors.orange,
            },
        },
    },
}
