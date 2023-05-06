/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#331B3B",
                secondary: "#FBBF24",
                clrLightYellow: "#FEF3C7",
                clrLightBlue: "#E0F2FE",
                clrBlue: "#BAE6FD",
                clrLightPurple: "#78697E",
                clrPink: "#FEE2E2",
                clrLightPink: "#FCE7F3"
            },
            
            fontFamily: {
                georgia: ["Georgia", "sans-serif"],
                aria: ["Arial", "sans-serif"]
            },
            fontSize: {
                
                "xs": ".75rem",
                "sm": ".875rem",
                "base": "1rem",
                "lg": "1.125rem",
                "xl": "1.25rem",
                "2xl": "1.5rem",
                "3xl": "1.875rem",
                "4xl": "2.25rem",
                "5xl": "3rem",
                "6xl": "4rem"
            },
            fontWeight: {
                "light": 300,
                "normal": 400,
                "semibold": 600,
                "bold": 700,
                "extrabold": 800
            },
            borderRadius: {
                huge: "400px",
                large: "128px"
            },
            width: {
                mdPercent: "38%",
                smMdPercent: "35%",
                smPercent: "30%"
            }
        },
    },
    plugins: [],
}