import React from 'react';
import Button from '../button';

type TFollowsItem = {
	imgSource: string;
	name: string;
	username: string;
	isFollow?: boolean;
};

function FollowsItem(props: TFollowsItem) {
	const { imgSource, name, username, isFollow } = props;
	return (
		<div className='flex flex-row items-center'>
			<div className='flex flex-row flex-1 gap-[15px]'>
				<img
					className='w-10 h-10 rounded-[5px] border border-stone-50'
					src='https://via.placeholder.com/40x40'
				/>
				<div className='flex flex-col'>
					<div className="text-white text-base font-normal font-['Ubuntu'] leading-normal tracking-tight">
						Fullname
					</div>
					<div className="opacity-50 text-white text-sm font-normal font-['Ubuntu'] leading-[21px] tracking-tight">
						@username
					</div>
				</div>
			</div>
			{isFollow ? (
				<Button variant='outlined'>
					<div className="text-center text-xs font-semibold font-['Open Sans'] capitalize leading-3">
						Following
					</div>
				</Button>
			) : (
				<Button variant='contained'>
					<div className="text-center text-xs font-semibold font-['Open Sans'] capitalize leading-3">
						Follow
					</div>
				</Button>
			)}
		</div>
	);
}

export default FollowsItem;
