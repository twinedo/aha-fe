'use client';
import BottomNav from '@/components/bottom-nav';
import Dashboard from '@/components/dashboard';
import Sidebar from '@/components/sidebar';
import TagsC from '@/components/tags-c';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function Tags() {
	return (
		<main className='flex min-h-screen flex-col items-center p-24'>
			<head>
				<title>AHA | Tags</title>
				<meta name='description' content='Awesome AHA' />
			</head>
			<TagsC />
		</main>
	);
}

export default Tags;
