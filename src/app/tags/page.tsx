'use client';
import React, { useEffect } from 'react';
import { GoChevronLeft } from 'react-icons/go';
import { useRouter } from 'next/navigation';
import TagsItem from '@/components/tags-item';
import { TTags, useGetTags } from '@/services/api/tags';
import { UseQueryResult } from '@tanstack/react-query';

type TagsResponse = {
	data: TTags[];
} & UseQueryResult;

function Tags() {
	const navigation = useRouter();

	const { data, isFetching } = useGetTags() as TagsResponse;

	useEffect(() => {
		if (data) {
			console.log('dataTagas', data);
		}
	}, [data]);

	return (
		<main className='flex min-h-screen flex-row w-full justify-center bg-[#1F1F1F] overflow-auto custom-scrollbar'>
			<head>
				<title>AHA | Tags</title>
				<meta name='description' content='Awesome AHA' />
			</head>
			<div className='flex flex-2 flex-col w-full h-screen overflow-hidden px-[24px] md:px-[130px] md:py-[54px] md:pt-[80px]'>
				<div className='w-full sticky top-0 z-50 h-[70px] flex flex-row gap-[25px] items-center md:hidden '>
					<button>
						<GoChevronLeft
							color='white'
							size={26}
							onClick={() => navigation.back()}
						/>
					</button>
					<div className='text-white text-2xl'>Home Page</div>
				</div>
				<div className='flex flex-1 flex-col'>
					<div className='text-white text-2xl mb-[24px]'>Tags</div>

					<div
						className='flex flex-col h-full overflow-y-auto custom-scrollbar'
						style={{ height: 'calc(100vh - 134px)' }}>
						{isFetching ? (
							<div className='text-white text-2xl'>Fetching...</div>
						) : (
							<div className='grid grid-cols-2 md:grid-cols-5 gap-x-[24px] justify-center items-center gap-y-[24px] md:gap-y-[36px] mb-[24px]'>
								{data.map((o, i) => (
									<div key={o.id} className='flex justify-center items-center'>
										<TagsItem
											title={o.name}
											username={o.name}
											imgSource='https://via.placeholder.com/150x150'
											tags={o.name}
										/>
									</div>
								))}
							</div>
						)}
						<div className='h-[40px]' />
					</div>
				</div>
			</div>
		</main>
	);
}

export default Tags;
