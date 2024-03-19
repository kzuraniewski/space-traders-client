import { css, Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './reset.css';

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
		</QueryClientProvider>
	);
}

export default App;
