/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
		container: false,
	},
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
				primary: {
					50: "#FFE9E8",
					100: "#FFC5C1",
					200: "#FF9E97",
					300: "#FF7E75",
					400: "#FF6257",
					500: "#FF4235",
					600: "#EB2B1E",
					700: "#CB2216",
					800: "#991C13",
					900: "#761912",
				},
				accent: {
					50: "#F4FAFF",
					100: "#E8F4FF",
					200: "#D5EBFD",
					300: "#C3E1F9",
					400: "#B5D8F4",
					500: "#A2CCEE",
					600: "#76B1E0",
					700: "#5095CD",
					800: "#2F6999",
					900: "#20405B",
				},
				"gray-aleo": {
					50: "#F5F4F5",
					100: "#E9E7EA",
					200: "#D6D1D8",
					300: "#B4AEB7",
					400: "#978E9C",
					500: "#736679",
					600: "#594961",
					700: "#413049",
					800: "#32203B",
					900: "#280837",
				},
				warning: {
					50: "#FBF4EE",
					100: "#FAEBE0",
					200: "#F7D9C5",
					300: "#F5C4A3",
					400: "#F09151",
					500: "#FB6A09",
					600: "#CE5403",
					700: "#973D02",
					800: "#612A05",
					900: "#452008",
				},
				success: {
					50: "#F2FBE4",
					100: "#E2F7C5",
					200: "#D2F2A6",
					300: "#B3E967",
					400: "#9DE33B",
					500: "#77CC00",
					600: "#65AD00",
					700: "#508802",
					800: "#325204",
					900: "#1A2905",
				},
				danger: {
					50: "#FCF3F3",
					100: "#F7DEDF",
					200: "#F3C9CA",
					300: "#ECACAE",
					400: "#DF7275",
					500: "#F02832",
					600: "#BF2C31",
					700: "#952226",
					800: "#6C191C",
					900: "#420F11",
				},
				"purple-brand": "#39073F",
			},
			width: {
				"fit-content": "fit-content",
			},
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
			addComponents({
				".section": {
					width: "100%",
					paddingLeft: "20px",
					paddingRight: "20px",
					marginLeft: "auto",
					marginRight: "auto",
					"@screen md": {
						paddingLeft: "40px",
						paddingRight: "40px",
					},
					"@screen lg": {
						paddingLeft: "80px",
						paddingRight: "80px",
					},
				},
				".container": {
					maxWidth: "1440px",
					width: "100%",
					marginLeft: "auto",
					marginRight: "auto",
				},
				"button": {
					borderRadius: '64px',
					transition: 'background-color 0.3s, border 0.3s, color 0.3s',
					padding: '12px 16px',
					fontWeight: '700',
				},
				".btn-primary": {
					backgroundColor: theme('colors.primary.500'),
					border: '2px solid ' + theme('colors.primary.500'),
					color: 'white',
					"&:hover": {
						backgroundColor: theme('colors.primary.600'),
						borderColor: theme('colors.primary.600')
					},
					"&:active": {
						backgroundColor: theme('colors.primary.700'),
						borderColor: theme('colors.primary.700')
					}
				},
				".btn-secondary": {
					border: '2px solid ' + theme('colors.primary.500'),
					color: theme('colors.primary.500'),
					"&:hover": {
						backgroundColor: theme('colors.primary.500'),
						color: 'white',
						borderColor: theme('colors.primary.500')
					},
					"&:active": {
						backgroundColor: theme('colors.primary.200'),
						color: theme('colors.primary.700'),
						borderColor: theme('colors.primary.200')
					}
				},
				".btn-tertiary": {
					border: '2px solid transparent',
					color: theme('colors.primary.500'),
					"&:hover": {
						color: theme('colors.primary.500'),
						borderColor: theme('colors.primary.500')
					},
					"&:active": {
						backgroundColor: theme('colors.primary.200'),
						color: theme('colors.primary.700'),
						borderColor: theme('colors.primary.200')
					}
				},
				".btn-tertiary-white": {
					border: '2px solid white',
					backgroundColor: 'white',
					color: theme('colors.primary.500'),
					"&:hover": {
						color: theme('colors.primary.500'),
						borderColor: theme('colors.primary.500')
					},
					"&:active": {
						backgroundColor: theme('colors.primary.200'),
						color: theme('colors.primary.700'),
						borderColor: theme('colors.primary.200')
					}
				},

			})
		}
  ],
};
