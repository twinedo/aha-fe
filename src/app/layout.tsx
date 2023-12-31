'use client';
import { Ubuntu } from 'next/font/google';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Sidebar from '@/navigation/sidebar';
import BottomNav from '@/navigation/bottom-nav';
import { useEffect, useState } from 'react';
import Providers from '@/services/utils/provider';

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
			setIsDesktop(window.innerWidth >= 768);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			<html lang='en'>
				<body className={ubuntu.className}>
					<Providers>
						<AppRouterCacheProvider options={{ enableCssLayer: true }}>
							{isDesktop ? (
								<Sidebar>{children}</Sidebar>
							) : (
								<BottomNav>{children}</BottomNav>
							)}
						</AppRouterCacheProvider>
					</Providers>
				</body>
			</html>
		</>
	);
}
