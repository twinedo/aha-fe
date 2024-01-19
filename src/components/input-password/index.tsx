import React, { InputHTMLAttributes } from 'react';

type TInputPass = {
	label: string;
	placeholder: string;
} & InputHTMLAttributes<HTMLInputElement>;

function InputPassword(props: TInputPass) {
	const { label = 'Password', placeholder } = props;
	return (
		<div className='w-[335px] h-[58px] flex-col justify-start items-start gap-[3px] inline-flex'>
			<div className='self-stretch relative h-[58px] px-3  flex-col justify-start items-start flex'>
				<div className="text-white text-xs absolute px-[4px] mx-3 top-[-8px] left-4 bg-[#1F1F1F] font-normal font-['Ubuntu'] leading-[18px] tracking-wide">
					{label}
				</div>
				<input
					className="text-white w-[311px] h-[55px] px-3 py-4 bg-transparent outline-none text-base rounded-lg border-2 hover:border-white border-[#FFFFFF80] focus:border-sky-500 font-normal font-['Ubuntu'] leading-normal tracking-tight"
					{...props}
				/>
			</div>
		</div>
	);
}

export default InputPassword;
