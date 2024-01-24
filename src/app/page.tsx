'use client';
import Dashboard, { allState$ } from '@/components/dashboard';
import CustomTabs from '@/components/tabs';
import { useEffect, useState } from 'react';
import { enableReactTracking } from '@legendapp/state/config/enableReactTracking';
import {
	configureObservablePersistence,
	persistObservable,
} from '@legendapp/state/persist';
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage';
import { ObservableObject, observable } from '@legendapp/state';
import Results from '@/components/results';

enableReactTracking({
	auto: true,
});

configureObservablePersistence({
	pluginLocal: ObservablePersistLocalStorage,
});

export default function Home() {
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
		<>
			<main className='flex min-h-screen  flex-row w-full justify-center bg-[#1F1F1F]'>
				<head>
					<title>
						{`AHA | `}
						{allState$.currentPageHome.get() === 'home' ? 'Home' : 'Results'}
					</title>
					<meta name='description' content='Awesome AHA' />
				</head>
				{allState$.currentPageHome.get() === 'home' ? (
					<Dashboard />
				) : (
					<Results />
				)}
				{isDesktop && (
					<div className='flex w-[375px]'>
						<CustomTabs />
					</div>
				)}
			</main>
		</>
	);
}
