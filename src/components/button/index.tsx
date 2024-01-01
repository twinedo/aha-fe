import React, { ButtonHTMLAttributes } from 'react';

type TButton = {
	title: string;
	additionalClassName?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: TButton) {
	const { title, additionalClassName } = props;

	return (
		<button
			className={`min-w-[335px] h-10 px-4 py-[13px] bg-white font-bold text-black rounded justify-center items-center gap-2.5 inline-flex hover:bg-[#121212] hover:text-white hover:border hover:border-[#FFFFFF] ${additionalClassName}`}>
			{title}
		</button>
	);
}

export default Button;
