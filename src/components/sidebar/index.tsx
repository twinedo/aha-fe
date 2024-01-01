import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Link from 'next/link';
import Image from 'next/image';
import { BiSolidCopy } from 'react-icons/bi';
import { usePathname } from 'next/navigation';

function Sidebar({ children }: { children: React.ReactNode }) {
	const DRAWER_WIDTH = 80;

	const pathname = usePathname();

	const LINKS = [
		{
			text: 'Home',
			href: '/',
			icon: <BiSolidCopy color='white' size='24px' />,
		},
		{
			text: 'Tags',
			href: '/tags',
			icon: <BiSolidCopy color='white' size='24px' />,
		},
	];

	return (
		<div>
			<div className='flex flex-row bg-[#121212]'>
				<Drawer
					sx={{
						width: DRAWER_WIDTH,

						flexShrink: 0,
						'& .MuiDrawer-paper': {
							width: DRAWER_WIDTH,
							boxSizing: 'border-box',
							height: 'auto',
							bottom: 0,
							background: '#1B1B1B',
						},
					}}
					variant='permanent'
					anchor='left'>
					<div className='flex w-20 h-20 flex-col justify-center items-center'>
						<Image
							width={35}
							height={15}
							src='/assets/logo.png'
							className='w-[35px] h-[15px]'
							alt='logo.png'
						/>
					</div>

					<List>
						{LINKS.map(({ text, href, icon }) => (
							<ListItem key={href} disablePadding>
								<ListItemButton
									component={Link}
									href={href}
									className='flex flex-col items-center justify-center'
									style={{ opacity: pathname === href ? 1 : 0.5 }}>
									<ListItemIcon className='justify-center'>{icon}</ListItemIcon>

									<ListItemText
										primary={text}
										color='#FFFFFF'
										style={{ color: pathname === href ? '#FFFFFF' : '#1B1B1B' }}
									/>
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Drawer>

				<Box
					component='main'
					sx={{
						flexGrow: 1,
					}}>
					{children}
				</Box>
			</div>
		</div>
	);
}

export default Sidebar;
