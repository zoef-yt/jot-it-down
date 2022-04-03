import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AllProvider } from './context/AllProvider';
import { makeServer } from './server';

makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AllProvider>
				<App />
			</AllProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
