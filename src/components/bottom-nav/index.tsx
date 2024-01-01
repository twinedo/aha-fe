import {
	BottomNavigation,
	Box,
	BottomNavigationAction,
	Paper,
} from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { BiSolidCopy } from 'react-icons/bi';

function BottomNav({ children }: { children: React.ReactNode }) {
	const [value, setValue] = useState('home');

	const pathname = usePathname();

	const LINKS = [
		{
			text: 'Home',
			href: '/',
			icon: <BiSolidCopy color='white' size='24px' />,
			value: 'home',
		},
		{
			text: 'Tags',
			href: '/tags',
			icon: <BiSolidCopy color='white' size='24px' />,
			value: 'tags',
		},
	];

	return (
		<div className='flex flex-col bg-[#121212]'>
			<Box
				component='main'
				sx={{
					flexGrow: 1,
					p: 3,
				}}>
				{children}
			</Box>
			<Paper
				sx={{
					position: 'fixed',
					bottom: 0,
					left: 0,
					right: 0,
					display: pathname === '/' || pathname === '/tags' ? 'block' : 'none',
				}}
				elevation={3}>
				<BottomNavigation
					showLabels
					value={value}
					style={{
						background: '#1B1B1B',
					}}
					onChange={(_, newValue) => {
						setValue(newValue);
					}}>
					{LINKS.map(({ text, href, icon, value }) => (
						<BottomNavigationAction
							key={text}
							LinkComponent={Link}
							href={href}
							value={value}
							icon={icon}
							style={{
								color: pathname === href ? '#FFFFFF' : '#1B1B1B',
								opacity: pathname === href ? 1 : 0.5,
							}}
						/>
					))}
				</BottomNavigation>
			</Paper>
		</div>
	);
}

export default BottomNav;
