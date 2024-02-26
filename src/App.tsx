import React from 'react';
import { css, Global } from '@emotion/react';

import './reset.css';

function App() {
	return (
		<>
			<Global
				styles={css`
					*,
					*::after,
					*::before {
						box-sizing: border-box;
					}
				`}
			/>
		</>
	);
}

export default App;
