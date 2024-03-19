import axios from 'axios';

const token = localStorage.getItem('token');

export const apiClient = axios.create({
	baseURL: 'https://api.spacetraders.io/v2/',
	timeout: 1000,
	headers: {
		'Content-type': 'application/json',
		Authorization: `Bearer ${token}`,
	},
});
