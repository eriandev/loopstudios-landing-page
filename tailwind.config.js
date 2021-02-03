const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ['./**/*.html'],
    corePlugins: {
        container: false,
    },
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        fontFamily: {
            alata: ['Alata', ...defaultTheme.fontFamily.mono],
            josefinSans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
        },
        colors: {
            'dark-gray': 'hsl(0, 0%, 55%)',
            'very-dark-gray': 'hsl(0, 0%, 41%)',

            'link-color': 'hsl(227, 45%, 44%)',

            'erian-color': '#02AAB0',
            'erian-hover': '#00CDAC',

            black: 'hsl(0, 0%, 0%)',
            white: 'hsl(0, 0%, 100%)',
            transparent: 'transparent',
        },
    },
    variants: {},
    plugins: []
}