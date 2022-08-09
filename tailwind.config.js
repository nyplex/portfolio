/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                outfit: ["Outfit", "sans-serif"],
            },
            colors: {
                lightBlue: "#0b0952",
                darkBlue: "#070640",
                red: "#fe3e57",
                white: "#fefefe",
            },
        },
        screens: {
            mobile: "375px",
            xs: "440px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1440px",
        },
    },
    plugins: [],
};
