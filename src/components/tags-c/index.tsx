import React from 'react';
import ResultsItem from '../results-item';
import TagsItem from '../tags-item';
import { GoChevronLeft } from 'react-icons/go';
import { useRouter } from 'next/navigation';

function TagsC() {
	const navigation = useRouter();

	return (
		<div className='flex flex-2 flex-col w-full h-screen overflow-hidden px-[24px] md:px-[130px] md:py-[54px]'>
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
					<div className='grid grid-cols-2 md:grid-cols-5 gap-x-[24px] justify-center items-center gap-y-[24px] md:gap-y-[36px] '>
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
