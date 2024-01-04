// usePagination.ts
import { useEffect, useState } from 'react';
import { _useAxios } from '@/services/useAxios';

interface PaginatedResponse {
	data: any[];
	page: number;
	pageSize: number;
	total: number;
	totalPages: number;
}

type IParams = {
	initialPage?: number;
	pageSize?: number;
	url: string;
};

const useAPIInfinite = (props: IParams) => {
	const { initialPage = 1, pageSize = 10, url } = props;
	const [page, setPage] = useState(initialPage);
	const [data, setData] = useState<any[]>([]);
	const [totalPages, setTotalPages] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		fetchData();
	}, [page, pageSize, url]);

	const fetchData = async () => {
		try {
			setIsLoading(true);
			const response = await _useAxios({
				url: url,
				method: 'get',
				params: {
					page,
					pageSize,
				},
			});
			const resData = response?.data as PaginatedResponse;
			setData((prevData) => [...prevData, ...resData.data]);
			setTotalPages(resData.totalPages);
		} catch (error) {
			console.error('Error fetching data:', error);
			setError(JSON.stringify(error));
		} finally {
			setIsLoading(false);
		}
	};

	// Check if the user has scrolled to the bottom
	const handleScroll = () => {
		const isBottom =
			window.innerHeight + document.documentElement.scrollTop ===
			document.documentElement.offsetHeight;

		if (isBottom && page < totalPages && !isLoading) {
			setPage(page + 1);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [page, totalPages, isLoading]);

	const refetch = () => {
		setPage(initialPage);
		fetchData();
	};

	return {
		data,
		totalPages,
		currentPage: page,
		refetch,
		isLoading,
		error,
	};
};

export default useAPIInfinite;
