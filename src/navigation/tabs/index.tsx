import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import FollowsItem from '../../components/follows-item';
import {
	TFriends,
	useGetFollowers,
	useGetFollowing,
} from '@/services/api/friends';

export default function CustomTabs() {
	const [value, setValue] = React.useState('Followers');

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	const [tabs] = React.useState([
		{ id: 1, tab: 'Followers' },
		{ id: 2, tab: 'Following' },
	]);

	const {
		data: dataFollowers,
		isLoading: isFollowersLoading,
		hasNextPage: hasNextPageFollowers,
		fetchNextPage: fetchNextPageFollowers,
	} = useGetFollowers({
		page: 1,
		pageSize: 10,
	});
	const {
		data: dataFollowing,
		isLoading: isFollowingLoading,
		hasNextPage: hasNextPageFollowing,
		fetchNextPage: fetchNextPageFollowing,
	} = useGetFollowing({
		page: 1,
		pageSize: 10,
	});

	const handleScroll = (e: React.UIEvent) => {
		const target = e.target as HTMLDivElement;
		if (
			target.scrollHeight - target.scrollTop <= target.clientHeight + 100 &&
			hasNextPageFollowers
		) {
			fetchNextPageFollowers();
		}
	};

	const handleScrollFollowing = (e: React.UIEvent) => {
		const target = e.target as HTMLDivElement;
		if (
			target.scrollHeight - target.scrollTop <= target.clientHeight + 100 &&
			hasNextPageFollowers
		) {
			fetchNextPageFollowing();
		}
	};

	const [newData, setNewData] = React.useState<TFriends[]>([]);
	const [newDataFollowing, setNewDataFollowing] = React.useState<TFriends[]>(
		[]
	);

	React.useEffect(() => {
		if (dataFollowers) {
			let newArr: TFriends[] = [];
			dataFollowers.pages?.map((o) => {
				o.data.map((v: TFriends) => {
					newArr.push(v);
				});
			});

			setNewData(newArr);
			if (
				dataFollowers.pages[dataFollowers.pages.length - 1]?.page <=
				dataFollowers.pages[dataFollowers.pages.length - 1]?.totalPages
			) {
				fetchNextPageFollowers();
			}
		}
	}, [dataFollowers]);

	React.useEffect(() => {
		if (dataFollowing) {
			let newArr: TFriends[] = [];
			dataFollowing.pages?.map((o) => {
				o.data.map((v: TFriends) => {
					newArr.push(v);
				});
			});

			setNewDataFollowing(newArr);
			if (
				dataFollowing.pages[dataFollowing.pages.length - 1]?.page <=
				dataFollowing.pages[dataFollowing.pages.length - 1]?.totalPages
			) {
				fetchNextPageFollowing();
			}
		}
	}, [dataFollowing]);

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
			{value === 'Followers' && (
				<div
					className='px-4 pt-[35px] max-h-[calc(100vh-85px)] overflow-y-scroll no-scrollbar'
					onScroll={handleScroll}>
					<ul className='flex flex-col h-[calc(100vh-137px)] gap-4'>
						{newData?.map((o) => (
							<li key={o.id}>
								<FollowsItem
									name={o.name}
									username={o.username}
									isFollow={o.isFollowing}
									imgSource={o.avater}
								/>
							</li>
						))}
					</ul>
					{isFollowersLoading && <p className='text-white'>Loading...</p>}
				</div>
			)}
			{value === 'Following' && (
				<div
					className='px-4 pt-[35px] max-h-[calc(100vh-85px)] overflow-y-scroll no-scrollbar'
					onScroll={handleScrollFollowing}>
					<ul className='flex flex-col h-[calc(100vh-137px)] gap-4'>
						{newDataFollowing?.map((o) => (
							<li key={o.id}>
								<FollowsItem
									name={o.name}
									username={o.username}
									isFollow={o.isFollowing}
									imgSource={o.avater}
								/>
							</li>
						))}
					</ul>
					{isFollowingLoading && <p className='text-white'>Loading...</p>}
				</div>
			)}
		</Box>
	);
}
