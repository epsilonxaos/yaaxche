const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/index.php",
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
    darkMode: "class", // or 'class'
    theme: {
        extend: {
            colors: {
                verde: "#445147",
                crema: "#EDECE5",
            },
            fontFamily: {
                tranja: ["Trajan Pro", "sans-serif"],
                mark: ["Mark Pro", "sans-serif"],
            },
        },
    },

    plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
