import React, { ButtonHTMLAttributes } from 'react';

type TButton = {
	children: React.ReactNode;
	additionalClassName?: string;
	variant?: 'normal' | 'outlined' | 'contained';
	onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: TButton) {
	const { children, onClick, additionalClassName, variant = 'normal' } = props;

	return (
		<button
			onClick={onClick}
			className={
				variant === 'normal'
					? `w-full md:min-w-[335px] h-10 px-4 py-[13px] bg-white font-bold text-black rounded justify-center items-center gap-2.5 inline-flex hover:bg-[#121212] hover:text-white hover:border hover:border-[#FFFFFF] ${additionalClassName}`
					: variant === 'outlined'
					? `px-2.5 py-2 bg-white hover:bg-neutral-900 rounded-[20px] border border-white justify-center text-neutral-900 hover:text-white items-center gap-2.5 inline-flex ${additionalClassName}`
					: variant === 'contained'
					? `px-2.5 py-2 bg-neutral-900 hover:bg-white rounded-[20px] border border-white text-white hover:text-[#121212] justify-center items-center gap-2.5 inline-flex ${additionalClassName}`
					: additionalClassName
			}>
			{children}
		</button>
	);
}

export default Button;
