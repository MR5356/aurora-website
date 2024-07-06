/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.{js,ts,jsx,tsx,md,mdx}",
        "./**/*.{js,ts,jsx,tsx,md,mdx}",
        "./.vitepress/**/*.{js,ts,jsx,tsx,md,mdx,mts}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

