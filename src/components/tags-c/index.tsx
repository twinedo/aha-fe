import React from 'react';
import ResultsItem from '../results-item';
import TagsItem from '../tags-item';

function TagsC() {
	return (
		<div className='flex flex-2 flex-col w-full h-[100vh] px-[130px] py-[54px]'>
			<div className='flex flex-1 flex-col h-full'>
				<div className='text-white text-2xl'>Tags</div>

				<div className='flex flex-col h-screen mt-6'>
					<div className='grid grid-cols-5 gap-x-[24px] justify-center items-center gap-y-[36px] '>
						{Array(19)
							.fill('')
							.map((o, i) => (
								<div key={i} className='flex justify-center items-center'>
									<TagsItem />
								</div>
							))}
					</div>
					<div className='h-[40px]' />
				</div>
			</div>
		</div>
	);
}

export default TagsC;
