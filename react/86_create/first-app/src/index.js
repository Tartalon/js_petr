import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './components/app/app';

ReactDom.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
