import React from 'react';
import { css, Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './reset.css';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Global
				styles={css`
					*,
					*::after,
					*::before {
						box-sizing: border-box;
					}
				`}
			/>
		</QueryClientProvider>
	);
}

export default App;
