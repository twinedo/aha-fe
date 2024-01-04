import { Box, Divider, Slider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Input from '../input';
import { makeStyles, createStyles } from '@mui/styles';
import Button from '../button';
import { GoChevronLeft } from 'react-icons/go';
import ResultsItem from '../results-item';
import { globalState$ } from '@/app/page';
import { useGetSearch } from '@/services/api/search';
import { TFriends } from '@/services/api/friends';

function Results() {
	const [resultLength, setResultLength] = useState(0);

	const { search, pageSize, page } = globalState$.get();

	const { data, isFetching, hasNextPage, fetchNextPage } = useGetSearch({
		keyword: search,
		pageSize: pageSize,
		page: page,
	});

	console.log('pageSize', pageSize);

	const [newData, setNewData] = React.useState<TFriends[]>([]);

	const [pageResults, setPageResults] = useState(page);
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		if (data) {
			setTotalPages(data.pages[data.pages.length - 1]?.totalPages);
			setPageResults(data.pages[data.pages.length - 1]?.page);
			globalState$.assign({
				totalResults: data.pages[data.pages.length - 1]?.total,
			});
			let newArr: TFriends[] = [];
			data.pages?.map((o) => {
				o.data.map((v: TFriends) => {
					newArr.push(v);
				});
			});

			setNewData(newArr);
		}
	}, [data]);

	return (
		<div className='flex flex-2 flex-col w-full h-screen overflow-hidden px-[24px] md:px-[130px] md:py-[54px] md:pt-[92px]'>
			<div className='w-full sticky top-0 z-50 h-[70px] flex flex-row gap-[25px] items-center md:hidden '>
				<button>
					<GoChevronLeft
						color='white'
						size={26}
						onClick={() => globalState$.assign({ currentPageHome: 'home' })}
					/>
				</button>

				<div className='text-white text-2xl'>Home Page</div>
			</div>
			<div className='flex flex-1 flex-col'>
				<div className='flex flex-row items-center mb-[24px] gap-[25px]'>
					<button className='hidden md:block'>
						<GoChevronLeft
							color='white'
							size={26}
							onClick={() => globalState$.assign({ currentPageHome: 'home' })}
						/>
					</button>
					<div className='text-white text-2xl '>Results</div>
				</div>

				<div
					className='flex flex-col h-full overflow-y-auto custom-scrollbar'
					style={{ height: 'calc(100vh - 134px)' }}>
					{newData.length === 0 && (
						<div className='text-white text-2xl'>No Results</div>
					)}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-x-[30px] md:gap-x-[34px] justify-center items-center gap-y-[40px] md:gap-y-[31px] mb-[24px]'>
						{newData.map((o, i) => (
							<div key={i} className='flex justify-center items-center'>
								<ResultsItem
									title={o.name}
									username={o.username}
									imgSource={o.avater}
								/>
							</div>
						))}
					</div>

					{pageResults < totalPages && (
						<Button
							variant='normal'
							additionalClassName='w-full md:w-[335px] mb-[60px]'
							onClick={fetchNextPage}>
							MORE
						</Button>
					)}
					<div className='h-[40px]' />
				</div>
			</div>
		</div>
	);
}

export default Results;
