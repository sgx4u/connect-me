import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';

import './globals.css';

const poppins = Poppins({
	weight: ['200', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font_primary',
	display: 'swap',
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={`${poppins.variable}`}>{children}</body>
		</html>
	);
}
