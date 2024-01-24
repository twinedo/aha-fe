import { Divider, Slider } from '@mui/material';
import React, { useState } from 'react';
import Input from '../input';
import { makeStyles } from '@mui/styles';
import Button from '../button';
import Image from 'next/image';
import Link from 'next/link';
import { observable } from '@legendapp/state';
import { persistObservable } from '@legendapp/state/persist';
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage';

const useStyles = makeStyles({
	slider: {
		color: 'transparent',
		position: 'relative',
		'& .MuiSlider-rail': {
			background: '#FFFFFF',
		},
		'& .MuiSlider-track': {
			background: 'linear-gradient(to right,  #FF5C01, #FFD25F)',
		},
		'& .MuiSlider-thumb': {
			backgroundColor: '#1B1B1B',
			borderWidth: 5,
			borderColor: '#FFD05D',
			position: 'relative',
			zIndex: 1,
		},
		'& .MuiSlider-valueLabel': {
			background: 'none',
		},
		'& .MuiSlider-valueLabelLabel': {
			position: 'relative',
			zIndex: 2,
		},
		'& .MuiSlider-markLabel': {
			color: 'white',
		},
	},
});

export type TGlobal = {
	search: string;
	currentPageHome: 'home' | 'result';
	pageSize: number | number[];
	page: number;
	totalResults: number;
};

export const allState$ = observable({
	search: '',
	currentPageHome: 'home',
	pageSize: 3,
	page: 1,
	totalResults: 0,
});

persistObservable(allState$, {
	local: 'allState$aha',
	pluginLocal: ObservablePersistLocalStorage,
});

function Dashboard() {
	const marks = [
		{
			value: 3,
			label: '3',
		},
		{
			value: 6,
			label: '6',
		},
		{
			value: 9,
			label: '9',
		},
		{
			value: 15,
			label: '15',
		},
		{
			value: 50,
			label: '50',
		},
	];

	const classes = useStyles();
	const [pageSizeSlider, setPageSizeSlider] = useState<any>(3);
	const [search, setSearch] = useState('');

	return (
		<div className='flex flex-2 flex-col w-full h-[100vh] md:px-[130px] px-[20px] md:py-[54px] pb-[54px]'>
			<div className='md:hidden w-full h-[70px] flex items-center'>
				<Image width={35} height={15} src='/assets/logo.png' alt='logo.png' />
			</div>
			<div className='flex flex-1 flex-col h-full'>
				<div className='flex flex-row justify-between'>
					<div className='text-white text-2xl'>Search</div>
					<Link href='/exam1'>
						<div className='text-white text-2xl'>Go to Exam 1</div>
					</Link>
				</div>
				<div className='h-[16px] md:h-[20px] w-full' />
				<Input
					placeholder='Keyword'
					value={allState$.get().search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<div className='h-[28px] md:h-[30px] w-full' />
				<div className='hidden md:block'>
					<Divider className='opacity-10' />
					<div className='h-[30px] w-full' />
				</div>
				<div className='text-white text-2xl'># Of Results Per Page</div>
				<div className='h-[16px] md:h-[20px] w-full' />

				<div className='text-[48px] text-white font-bold'>
					{allState$.get().totalResults}
					<span className='text-[16px] font-normal ml-[10px] text-white'>
						results
					</span>
				</div>
				<div className='h-[20px] w-full' />
				<div className='px-3 mb-[26vh] md:mb-[30px]'>
					<Slider
						defaultValue={allState$.get().pageSize}
						valueLabelDisplay='auto'
						aria-labelledby='discrete-slider'
						step={3}
						marks={marks}
						min={3}
						max={50}
						classes={{ root: classes.slider }}
						onChange={(e, value) => setPageSizeSlider(value)}
					/>
				</div>

				<Divider className='opacity-10' />
			</div>
			<Button
				additionalClassName='w-full md:w-[335px] mb-[24px]'
				onClick={() => {
					// alert('test');
					allState$.assign({
						currentPageHome: 'result',
						search: search,
						pageSize: pageSizeSlider!,
						page: 1,
					});
				}}>
				Search
			</Button>
		</div>
	);
}

export default Dashboard;
