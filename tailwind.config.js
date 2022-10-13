module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                barlow: "'Barlow', sans-serif",
            },
            fontSize: {
                "4xl": [
                    "2.25rem",
                    {
                        lineHeight: "2.688rem",
                        fontWeight: "500",
                    },
                ],
                "2xl": [
                    "1.5rem",
                    {
                        lineHeight: "1.75rem",
                        fontWeight: "500",
                    },
                ],
                lg: [
                    "1.125rem",
                    {
                        lineHeight: "1.375rem",
                        fontWeight: "400",
                    },
                ],
                base: [
                    "1rem",
                    {
                        lineHeight: "1.188rem",
                        fontWeight: "400",
                    },
                ],
                sm: [
                    "0.875rem",
                    {
                        lineHeight: "1.063rem",
                        fontWeight: "400",
                    },
                ],
                xs: [
                    "0.75rem",
                    {
                        lineHeight: "0.9rem",
                        fontWeight: "400",
                    },
                ],
            },
            gridTemplateColumns: {
                4: "repeat(auto-fill, minmax(250px, 1fr))",
            },
            boxShadow: {
                card: "0px 4px 24px #00000014",
            },
            colors: {
                cardLabel: "#00000052",
                modalBG: "#0000008F",
            },
        },
        maxWidth: {
            modalBox: "35rem",
            imageBox: "70rem",
        },
    },
    plugins: [],
};
