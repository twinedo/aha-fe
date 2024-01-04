import { Box, Divider, Slider } from '@mui/material';
import React, { useState } from 'react';
import Input from '../input';
import { makeStyles, createStyles } from '@mui/styles';
import Button from '../button';
import { GoChevronLeft } from 'react-icons/go';
import ResultsItem from '../results-item';
import { globalState$ } from '@/app/page';

function Results() {
	const [resultLength, setResultLength] = useState(0);

	return (
		<div className='flex flex-2 flex-col w-full h-screen overflow-hidden px-[24px] md:px-[130px] md:py-[54px]'>
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
				<div className='text-white text-2xl mb-[24px]'>Results</div>

				<div
					className='flex flex-col h-full overflow-y-auto custom-scrollbar'
					style={{ height: 'calc(100vh - 134px)' }}>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-x-[30px] md:gap-x-[34px] justify-center items-center gap-y-[40px] md:gap-y-[31px] '>
						{Array(19)
							.fill('')
							.map((o, i) => (
								<div key={i} className='flex justify-center items-center'>
									<ResultsItem />
								</div>
							))}
					</div>
					<div className='h-[40px]' />
				</div>
			</div>
		</div>
	);
}

export default Results;
