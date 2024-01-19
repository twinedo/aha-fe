/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		BASE_URL: 'https://avl-frontend-exam.herokuapp.com/api',
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.fakercloud.com',
			},
			{
				protocol: 'https',
				hostname: 'via.placeholder.com',
			},
		],
	},
};

module.exports = nextConfig;
