import CustomTabs from '@/components/tabs';
import React, { useEffect, useState } from 'react';

function Results() {
	const [isDesktop, setIsDesktop] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 1440);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<main className='flex min-h-screen flex-row w-full justify-center'>
			<head>
				<title>AHA | Home</title>
				<meta name='description' content='Awesome AHA' />
			</head>
			<Results />
			{isDesktop && (
				<div className='flex w-[375px]'>
					<CustomTabs />
				</div>
			)}
		</main>
	);
}

export default Results;
