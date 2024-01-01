import { Box, Divider, Slider } from '@mui/material';
import React, { useState } from 'react';
import Input from '../input';
import { makeStyles, createStyles } from '@mui/styles';
import Button from '../button';

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

function Dashboard() {
	const [resultLength, setResultLength] = useState(0);

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

	return (
		<div className='flex flex-1 flex-col w-full h-[100vh] px-[130px] py-[54px]'>
			<div className='flex flex-1 flex-col h-full'>
				<div className='text-white text-2xl'>Search</div>
				<div className='h-[20px] w-full' />
				<Input placeholder='Keyword' />
				<div className='h-[30px] w-full' />
				<Divider className='opacity-10' />
				<div className='h-[30px] w-full' />
				<div className='text-white text-2xl mb-[20px]'>
					# of results per page
				</div>
				<div className='h-[20px] w-full' />

				<div className='text-[48px] text-white font-bold'>
					{resultLength}
					<span className='text-[16px] font-normal ml-[10px] text-white'>
						results
					</span>
				</div>
				<div className='h-[20px] w-full' />
				<div className='px-3'>
					<Slider
						defaultValue={3}
						valueLabelDisplay='auto'
						aria-labelledby='discrete-slider'
						step={3}
						marks={marks}
						min={3}
						max={50}
						classes={{ root: classes.slider }}
					/>
				</div>
				<div className='h-[30px] w-full' />
				<Divider className='opacity-10' />
			</div>
			<Button title='Search' additionalClassName='w-[335px]' />
		</div>
	);
}

export default Dashboard;
