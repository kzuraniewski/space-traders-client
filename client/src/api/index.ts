import { apiClient } from '@/lib/axios';

export const getStatus = async () => {
	const { data } = await apiClient.get('/');
	return data;
};

export const registerNewAgent = async () => {
	const { data } = await apiClient.post('/register', {
		faction: 'COSMIC',
		symbol: 'justCarl',
		// email
	});
	return data;
};
