import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

	theme: {
		extend: {
			backgroundImage: {
				'bg-shape': "url('/assets/images/bg.svg')",
				'dark-transparent-overlay': 'linear-gradient(to top, hsl(var(--overlay-dark)) 0%, transparent 50%)',
			},
			colors: {
				text: {
					DEFAULT: 'hsl(var(--text))',
					secondary: 'hsl(var(--text-secondary))',
				},
				background: {
					DEFAULT: 'hsl(var(--bg))',
					dark: 'hsl(var(--bg-dark))',
				},
				info: {
					DEFAULT: 'hsl(var(--info))',
					light: 'hsl(var(--info-light))',
					dark: 'hsl(var(--info-dark))',
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					light: 'hsl(var(--success-light))',
					dark: 'hsl(var(--success-dark))',
				},
				warn: {
					DEFAULT: 'hsl(var(--warn))',
					light: 'hsl(var(--warn-light))',
					dark: 'hsl(var(--warn-dark))',
				},
				error: {
					DEFAULT: 'hsl(var(--error))',
					light: 'hsl(var(--error-light))',
					dark: 'hsl(var(--error-dark))',
				},
				neutral: {
					DEFAULT: 'hsl(var(--neutral))',
					extraLight: 'hsl(var(--neutral-extraLight))',
					light: 'hsl(var(--neutral-light))',
					dark: 'hsl(var(--neutral-dark))',
				},
			},
			fontSize: {
				xs: '.8125rem',
			},
			screens: {
				xs: '400px',
			},
		},
	},

	plugins: [],
};

export default config;
