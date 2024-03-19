import { apiClient } from '@/lib/axios';

export const getAgent = async () => {
	const { data } = await apiClient.get('/my/agent');
	return data;
};

export const getAgents = async () => {
	const { data } = await apiClient.get('/agents');
	return data;
};

export const getPublicAgent = async (agentSymbol: string) => {
	const { data } = await apiClient.get(`/agents/${agentSymbol}`);
	return data;
};
