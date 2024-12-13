/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
    	extend: {
    		colors: {
                'light-first': 'var(--light-first)',
                'light-second': 'var(--light-second)',
                'light-third': 'var(--light-third)',
                'light-fourth': 'var(--light-fourth)',
                'light-fifth': 'var(--light-fifth)',

                'dark-first': 'var(--dark-first)',
                'dark-second': 'var(--dark-second)',
                'dark-third': 'var(--dark-third)',
                'dark-fourth': 'var(--dark-fourth)',
                'dark-fifth': 'var(--dark-fifth)',
            }
    	}
    },
    plugins: [require("tailwindcss-animate")],
}
