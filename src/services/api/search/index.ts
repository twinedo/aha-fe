import { useInfiniteQuery } from '@tanstack/react-query';

interface IParams {
	page?: number;
	pageSize?: number | number[];
	keyword?: string;
}

export function useGetSearch(props?: IParams) {
	const { ...rest } = useInfiniteQuery({
		queryKey: ['useGetFollowers', JSON.stringify(props)],
		initialPageParam: 1,
		queryFn: async ({ pageParam = props?.page }) => {
			try {
				const response = await fetch(
					`${process.env.BASE_URL}/users/all?page=${pageParam}&pageSize=${props?.pageSize}&keyword=${props?.keyword}`,
					{
						method: 'get',
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/json',
						},
					}
				);
				const data = await response?.json();
				// return data?. as IBanner[];
				return data;
			} catch (error) {
				console.log('error get search', error);
				return error;
			}
		},
		getNextPageParam: (lastPage) =>
			lastPage.page < lastPage.totalPages ? lastPage.page + 1 : null,
		refetchOnMount: true,
		refetchOnReconnect: true,
	});

	return { ...rest };
}
