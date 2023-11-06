/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ['"Inter"', "sans-serif"],
            },
            colors: {
                white: "#FFFFFF",
                black: "#000000",
                blue1: "#6C47FF",
                blue2: "#4F2CD9",
                blue3: "#3213AC",
                blue4: "#240C86",
                gray1: "#F8F8F8",
                gray2: "#D9D9D9",
                gray3: "#595959",
                red1: "#D73737",
                red2: "#B72121",
            },
            fontSize: {
                h1: "48px",
                h2: "36px",
                h3: "24px",
                h4: "16px",
                p: "14px",
            },
            lineHeight: {
                h1: "58px",
                h2: "42px",
                h3: "28px",
                h4: "18px",
                p: "16px",
            },
            container: {
                center: true,
                padding: "40px",
                screens: {
                    "2xl": "1840px",
                },
            },
        },
    },
    plugins: [],
};
