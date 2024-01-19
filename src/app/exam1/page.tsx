'use client';
import InputPassword from '@/components/input-password';
import AnimatedInputLabel from '@/components/input-password';
import { CssBaseline, Popover, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/navigation';
import React from 'react';
import { GoChevronLeft } from 'react-icons/go';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import { FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa';

interface ValidationRule {
	name: string;
	regex: RegExp;
}

function Exam1() {
	const navigation = useRouter();

	const [open, setOpen] = React.useState(false);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const id = open ? 'transition-popper' : undefined;

	const [validationRules, setValidationRules] = React.useState<
		ValidationRule[]
	>([
		{ name: 'Have at least one uppercase letter', regex: /[A-Z]/ },
		{ name: 'Have at least one lowercase letter', regex: /[a-z]/ },
		{ name: 'Have at least one number', regex: /\d/ },
		{
			name: 'Have at least one special character (!@#$...etc)',
			regex: /[!@#$%^&*(),.?":{}|<>]/,
		},
		{ name: 'Longer than 8 characters', regex: /.{8,}/ },
	]);

	const [password, setPassword] = React.useState('');
	const [isValid, setIsValid] = React.useState<boolean[]>(
		Array(validationRules.length).fill(false)
	);

	const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
		setAnchorEl(event.currentTarget);
		setOpen(true);
	};

	const handleInputBlur = () => {
		setOpen(false);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newPassword = event.target.value;
		setPassword(newPassword);

		const newIsValid = validationRules.map((rule) =>
			rule.regex.test(newPassword)
		);
		setIsValid(newIsValid);
	};

	return (
		<div className='flex min-h-screen flex-row w-full justify-center bg-[#1F1F1F] overflow-auto custom-scrollbar'>
			<CssBaseline />
			<head>
				<title>AHA | Exam1</title>
				<meta name='description' content='Awesome AHA' />
			</head>
			<div className='flex flex-2 relative flex-col w-full h-screen overflow-hidden px-[24px] md:px-[130px] md:py-[54px] md:pt-[80px]'>
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
				<div className='flex flex-1 flex-col relative'>
					<div className='text-white text-2xl mb-[24px]'>Exam 1</div>

					<div className='text-white font-bold text-4xl mb-[24px]'>
						Password Input
					</div>
					<div className='flex flex-col relative'>
						<InputPassword
							label='Password'
							placeholder='Password'
							type='password'
							value={password}
							onChange={handleInputChange}
							onFocus={handleInputFocus}
							onBlur={handleInputBlur}
							aria-describedby={id}
						/>

						<Popper
							id={id}
							open={open}
							anchorEl={anchorEl}
							placement='bottom-start'
							transition>
							{({ TransitionProps }) => (
								<Fade {...TransitionProps} timeout={350}>
									<div className='w-[335px] px-3 py-2 mt-[20px] bg-neutral-800 rounded-lg shadow flex-col justify-start items-start inline-flex'>
										{validationRules.map((rule, i) => (
											<div
												key={rule.name}
												className='justify-start items-center gap-2.5 inline-flex'>
												{isValid[i] ? (
													<FaCheckCircle color='#00D1FF' className='w-6 h-6' />
												) : (
													<FaRegCheckCircle
														color='#565656'
														className='w-6 h-6'
													/>
												)}

												<div className='w-[277px] h-10 pr-4 py-2 justify-start items-center gap-2.5 flex'>
													<div className="text-white text-sm font-normal font-['Ubuntu'] leading-[21px] tracking-tight">
														{rule.name}
													</div>
												</div>
											</div>
										))}
									</div>
								</Fade>
							)}
						</Popper>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Exam1;
