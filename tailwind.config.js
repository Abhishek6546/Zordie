/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
	  extend: {
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		colors: {
		  pinkLight: "#FFD6FE",
		  purpleDark: "#560858",
		  
		},
		backgroundImage: {
		  "custom-radial": 
			"radial-gradient(circle, #CB97FF 40%, #000000 92%, #000000 93%, #000000 100%, #CB97FF 0%, #4A106E 100%)",
			"card-gradient":
			"radial-gradient(circle, #9025FF 0%, #9025FF 90%)",
			"circle-gradient":
			"radial-gradient(circle, #5E1E7F 42%,#000000 70%, #5E1E7F 100%,#D02BF9 94% )",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  