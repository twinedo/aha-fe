'use client';
import { Ubuntu } from 'next/font/google';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Sidebar from '@/components/sidebar';
import BottomNav from '@/components/bottom-nav';
import { useEffect, useState } from 'react';

const ubuntu = Ubuntu({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isDesktop, setIsDesktop] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 768); // Adjust the breakpoint as needed
		};

		handleResize(); // Set initial width

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			<html lang='en'>
				<head>
					<title>Title</title>
					<meta name='description' content='Description' />
				</head>
				<body className={ubuntu.className}>
					<AppRouterCacheProvider options={{ enableCssLayer: true }}>
						{isDesktop ? (
							<Sidebar>{children}</Sidebar>
						) : (
							<BottomNav>{children}</BottomNav>
						)}
					</AppRouterCacheProvider>
				</body>
			</html>
		</>
	);
}
