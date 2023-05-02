/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            black: "#121212",
            offblack: "#212121",
            white: "#FFF",
            pink: "#E22CA4",
            green: "#34D89D",
        },
        extend: {
            fontSize: {
                trettito: "32px",
            },
            maxWidth: {
                pMax: "661px",
                serviceCard: "300px",
                hundre: "100px",
            },
        },
    },
    plugins: [],
};
