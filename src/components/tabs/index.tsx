import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import FollowsItem from '../follows-item';

export default function CustomTabs() {
	const [value, setValue] = React.useState('Followers');

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	const [tabs] = React.useState([
		{ id: 1, tab: 'Followers' },
		{ id: 2, tab: 'Following' },
	]);

	return (
		<Box
			sx={{
				width: 375,
				border: 1,
				borderColor: 'white',
				background: '#1B1B1B',
				paddingTop: '32px',
				paddingBottom: 0,
			}}>
			<Tabs
				value={value}
				onChange={handleChange}
				textColor='inherit'
				TabIndicatorProps={{ style: { background: '#FFFFFF' } }}
				// aria-label='secondary tabs example'
			>
				{tabs.map((o) => (
					<Tab
						key={o.id}
						value={o.tab}
						label={o.tab}
						style={{
							flex: 1,
							color: 'white',
						}}
					/>
				))}
			</Tabs>
			<div className='px-4 pt-[35px] max-h-[calc(100vh-85px)] overflow-y-scroll no-scrollbar'>
				{value === 'Followers' && (
					<ul className='flex flex-col gap-4 '>
						{Array(20)
							.fill('')
							.map((o, i) => (
								<li key={i}>
									<FollowsItem />
								</li>
							))}
					</ul>
				)}
				{value === 'Following' && (
					<ul className='flex flex-col gap-4 '>
						{Array(20)
							.fill('')
							.map((o, i) => (
								<li key={i}>
									<FollowsItem />
								</li>
							))}
					</ul>
				)}
			</div>
		</Box>
	);
}
