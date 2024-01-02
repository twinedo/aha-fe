'use client';
import TagsC from '@/components/tags-c';

function Tags() {
	return (
		<main className='flex min-h-screen flex-row w-full justify-center bg-[#1F1F1F] overflow-auto custom-scrollbar'>
			<head>
				<title>AHA | Tags</title>
				<meta name='description' content='Awesome AHA' />
			</head>
			<TagsC />
		</main>
	);
}

export default Tags;
