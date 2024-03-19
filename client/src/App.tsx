import { css, Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './reset.css';

import GameView from './components/GameView';

const queryClient = new QueryClient();

const globalStyles = css`
	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}
`;

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Global styles={globalStyles} />

			<GameView />
		</QueryClientProvider>
	);
}

export default App;
