import React from 'react';

type TResultItem = {
	imgSource: string;
	title: string;
	username: string;
};

function TagsItem(props: TResultItem) {
	const { imgSource, title, username } = props;
	return (
		<div className='flex flex-col gap-3'>
			<div className='relative flex flex-col w-full '>
				<img
					className='w-[150px] h-[150px] rounded-lg'
					src='https://via.placeholder.com/150x150'
				/>
				<div className='absolute bottom-[14px] overflow-ellipsis max-w-[150px] w-[calc(100% - 50px)] right-[10px] left-[10px] px-3.5 py-[7px] rounded-lg border-4 border-white justify-start items-start gap-2.5 inline-flex bg-transparent'>
					<div className='line-clamp-1 max-w-[150px] text-white text-2xl font-bold capitalize leading-9'>
						Beautiful
					</div>
				</div>
			</div>
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

export default TagsItem;
