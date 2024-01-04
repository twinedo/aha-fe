import React from 'react';

type TResultItem = {
	imgSource: string;
	title: string;
	username: string;
};

function ResultsItem(props: TResultItem) {
	const { imgSource, title, username } = props;
	return (
		<div className='flex flex-col gap-3'>
			<img
				className='w-full md:w-[219px] h-[223px] md:h-[146px]'
				src='https://via.placeholder.com/219x146'
			/>
			<div className='flex flex-col'>
				<div className="text-white text-[14.90px] font-normal font-['Ubuntu'] leading-snug tracking-tight">
					This is a title
				</div>
				<div className="text-zinc-400 text-[11.17px] font-normal font-['Ubuntu'] leading-none tracking-tight">
					by username
				</div>
			</div>
		</div>
	);
}

export default ResultsItem;
