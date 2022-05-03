/** @format */

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//get the target root elemnet
const targetRoot = document.getElementById('root');
//call the render method

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	targetRoot
);
