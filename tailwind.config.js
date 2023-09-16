/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            spacing: {
                '10px': '10px',
                '20px': '20px',
                '30px': '30px',
                '40px': '40px',
                '50px': '50px',
                '60px': '60px',
            },
        },
    },
    plugins: [],
};
