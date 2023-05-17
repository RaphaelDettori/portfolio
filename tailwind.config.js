import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        fontFamily: {
            primary: "Lobster",
            body: "Quicksand"
        },
        container: {
            padding: {
                DEFAULT: "1rem",
                lg: "3rem"
            },
        },
        extend: {
            colors: {
                "light-primary": "#EEEEEE",
                "light-secondary": "#E1D4BB",
                "light-tail-100": "#98cccc",
                "light-tail-500": "#537188",
                "light-orange-100": "#f8ad7a",
                "light-orange-500": "#864316",
                "dark-primary": "#05213D",
                "dark-secondary": "#375875",
                "dark-navy-100": "#CDB084",
                "dark--navy-500": "#836A32",
                accent: {
                    DEFAULT: "#d19d62",
                    hover: "#925A2B",
                },
                paragraph: "#c9d8f6",
                blue: colors.blue,
                indigo: colors.indigo,
                green: colors.green,
                red: colors.red
            }
        }
    },

    plugins: [forms],
};
