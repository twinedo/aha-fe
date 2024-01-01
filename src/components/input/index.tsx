import React, { InputHTMLAttributes } from 'react';

type TInput = {
	classes?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function Input(props: TInput) {
	return (
		<input
			className={`w-full h-[60px] bg-transparent px-[18px] text-white rounded-md border border-[#FFFFFF80] focus:outline-none focus:ring focus:border-[#FF9B33] focus:ring-orange-400 ${props.classes}`}
			{...props}
		/>
	);
}

export default Input;
