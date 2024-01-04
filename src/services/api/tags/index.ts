import { useQuery } from '@tanstack/react-query';

export type TTags = {
	id: string;
	name: string;
	count: number;
};

export function useGetTags() {
	const { ...rest } = useQuery({
		queryKey: ['useGetTags'],
		queryFn: async () => {
			try {
				const response = await fetch(`${process.env.BASE_URL}/tags`, {
					method: 'get',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
				});
				const data = await response?.json();

				return data as TTags[];
			} catch (error) {
				console.log('error get tags', error);
				return error;
			}
		},

		refetchOnMount: true,
		refetchOnReconnect: true,
	});

	return { ...rest };
}
