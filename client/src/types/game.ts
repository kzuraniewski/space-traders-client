export type ServerStatus = {
	status: string;
	version: string;
	resetDate: string;
	description: string;
	stats: {
		agents: number;
		ships: number;
		systems: number;
		waypoints: number;
	};
	leaderboards: {
		mostCredits: Array<{
			agentSymbol: string;
			credits: number;
		}>;
		mostSubmittedCharts: Array<{
			agentSymbol: string;
			chartCount: number;
		}>;
	};
	serverResets: {
		next: string;
		frequency: string;
	};
	announcements: Array<{
		title: string;
		body: string;
	}>;
	links: Array<{
		name: string;
		url: string;
	}>;
};
