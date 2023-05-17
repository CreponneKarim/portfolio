/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {

            screens: {
                'mh': { 'raw': '(min-height: 700px)' }
            }
        },
        fontFamily:{
            signature : ["Great Vibes"]
        },
    },
    plugins: [],
}

