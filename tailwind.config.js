/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js, jsx}", "./components/**/*.{jsx, js}"],
    theme: {
        extend: {
            fontFamily: {
                fraunces: ["Fraunces72ptsupersoft", "sans-serif"],
                fraunces144ptsupersoft: [
                    "Fraunces144ptsupersoft",
                    "sans-serif",
                ],
                geomanist: ["Geomanist", "sans-serif"],
            },
            colors: {
                primary: "#d4ac8e",
                secondary: "#b55730",
                tertiary: "#c47d57",
                light: "#e4ded5",
                dark: "#223240",
                darkMaroon: "#302f39",
                darkBlue: "#223240",
                darkSuccess: "#2d4850",
                danger: "#d90f54",
            },
            fontSize: {
                "7.3xl": [
                    "5rem",
                    {
                        lineHeight: 1,
                    },
                ],
            },
            spacing: {
                18: "4.5rem",
            },
            maxWidth: {
                custom: "87.5rem",
            },
            lineHeight: {
                hug: 1.1,
            },
        },
    },
    plugins: [],
};
