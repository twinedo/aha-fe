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
		<div className='flex flex-2 flex-col w-full h-[100vh] px-[130px] py-[54px]'>
			<div className='flex flex-1 flex-col h-full'>
				<div className='flex flex-row gap-[25px]'>
					<button>
						<GoChevronLeft
							color='white'
							size={26}
							onClick={() => globalState$.assign({ currentPageHome: 'home' })}
						/>
					</button>
					<div className='text-white text-2xl'>Results</div>
				</div>
				<div className='flex flex-col h-screen mt-6'>
					<div className='grid grid-cols-3 gap-x-[31px] overflow-y-auto justify-center items-center gap-y-[34px]'>
						{Array(9)
							.fill('')
							.map((o, i) => (
								<div key={i} className='flex justify-center items-center'>
									<ResultsItem />
								</div>
							))}
					</div>
					<div className='h-[40px]' />
					<Button additionalClassName='w-[335px]'>More</Button>
				</div>
			</div>
		</div>
	);
}

export default Results;
