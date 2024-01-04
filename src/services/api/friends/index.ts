import { useInfiniteQuery } from '@tanstack/react-query';

type IParams = {
	page?: number;
	pageSize?: number;
};

export type TFriends = {
	avater: string;
	id: string;
	isFollowing: boolean;
	name: string;
	username: string;
};

export function useGetFollowers(props?: IParams) {
	const { ...rest } = useInfiniteQuery({
		queryKey: ['useGetFollowers', JSON.stringify(props)],
		initialPageParam: 1,
		queryFn: async ({ pageParam = props?.page }) => {
			try {
				const response = await fetch(
					`${process.env.BASE_URL}/users/all?page=${pageParam}&pageSize=${props?.pageSize}`,
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
				console.log('error get followers', error);
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

export function useGetFollowing(props?: IParams) {
	const { ...rest } = useInfiniteQuery({
		queryKey: ['useGetFollowing', JSON.stringify(props)],
		initialPageParam: 1,
		queryFn: async ({ pageParam = props?.page }) => {
			try {
				const response = await fetch(
					`${process.env.BASE_URL}/users/friends?page=${pageParam}&pageSize=${props?.pageSize}`,
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
				console.log('error get following', error);
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
