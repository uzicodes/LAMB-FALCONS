/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                satoshi: ['Satoshi', 'sans-serif'],
            },
            colors: {
                // Custom blue shades for the Falcons theme
                falcon: {
                    blue: '#3B82F6',
                    'blue-light': '#60A5FA',
                    'blue-dark': '#2563EB',
                },
            },
        },
    },
    plugins: [],
};
