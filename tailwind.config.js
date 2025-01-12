/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			textColor: {
				DEFAULT: '#000000', // Set default text color to black
			  },
			colors:{
				primary:'#ffffff',
				accent:{
					DEFAILT:'#00ff99',
					hover:"#00e187"
				}
			},
			screens: {
				sm: '640px',   // Small screens, like mobile devices
				md: '768px',   // Medium screens, like tablets
				lg: '960px',   // Large screens, like laptops or small desktops
				xl: '1200px',  // Extra-large screens, like larger desktops
			},
			container:{
				center:'true',
				padding:'15px '
			},
			fontFamily:{
				primary:"var(--font-jet)"
			}


		}
	},
	plugins: [require("tailwindcss-animate")],
};
